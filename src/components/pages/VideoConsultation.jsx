import { useState, useEffect, useRef } from 'react';
import { connect, createLocalVideoTrack } from 'twilio-video';

const VideoConsultation = () => {
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [error, setError] = useState('');
  
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    // Initialize local video preview
    const startLocalVideo = async () => {
      try {
        const track = await createLocalVideoTrack();
        if (localVideoRef.current) {
          track.attach(localVideoRef.current);
        }
      } catch (err) {
        setError('Failed to access camera. Please check your permissions.');
      }
    };

    startLocalVideo();

    // Cleanup
    return () => {
      if (room) {
        room.disconnect();
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!roomName.trim()) {
      setError('Please enter a consultation room name');
      return;
    }

    setConnecting(true);
    try {
      // TODO: Get token from backend
      // const response = await fetch('/api/token', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ roomName })
      // });
      // const { token } = await response.json();
      
      // For demo purposes, using a mock token
      const mockToken = 'your-twilio-token';
      setToken(mockToken);

      const room = await connect(mockToken, {
        name: roomName,
        audio: true,
        video: { width: 640 }
      });

      setRoom(room);
      room.participants.forEach(participantConnected);
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);
    } catch (err) {
      setError('Failed to connect to the consultation room.');
    } finally {
      setConnecting(false);
    }
  };

  const participantConnected = (participant) => {
    setParticipants(prevParticipants => [...prevParticipants, participant]);
    
    participant.tracks.forEach(track => {
      if (track.kind === 'video') {
        track.attach(remoteVideoRef.current);
      }
    });

    participant.on('trackSubscribed', track => {
      if (track.kind === 'video') {
        track.attach(remoteVideoRef.current);
      }
    });
  };

  const participantDisconnected = (participant) => {
    setParticipants(prevParticipants =>
      prevParticipants.filter(p => p !== participant)
    );
  };

  const handleDisconnect = () => {
    if (room) {
      room.disconnect();
      setRoom(null);
      setParticipants([]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Video Consultation
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Connect with healthcare professionals through secure video calls
        </p>
      </div>

      {!room && (
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="roomName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Consultation Room Name
              </label>
              <input
                type="text"
                id="roomName"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter room name"
              />
            </div>

            {error && (
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={connecting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                connecting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {connecting ? 'Connecting...' : 'Join Consultation'}
            </button>
          </form>
        </div>
      )}

      {room && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video ref={localVideoRef} autoPlay playsInline className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                You
              </div>
            </div>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                Doctor
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleDisconnect}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              End Consultation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoConsultation;
