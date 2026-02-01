import { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4); // 0.0 to 1.0
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    // Attempt autoplay on mount
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      
      const playAudio = () => {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            // Remove listeners once playing
            document.removeEventListener('click', playAudio);
            document.removeEventListener('keydown', playAudio);
          })
          .catch((error) => {
            console.log("Autoplay failed, waiting for interaction:", error);
            setIsPlaying(false);
          });
      };

      // Try immediately
      playAudio();

      // If blocked, wait for user interaction
      // We add these listeners to catch the first interaction to start audio
      document.addEventListener('click', playAudio);
      document.addEventListener('keydown', playAudio);

      return () => {
        document.removeEventListener('click', playAudio);
        document.removeEventListener('keydown', playAudio);
      };
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => console.error("Play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div 
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/20 backdrop-blur-md p-2 rounded-full shadow-lg border border-white/30 hover:bg-white/30 transition-all font-sans"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      <audio
        ref={audioRef}
        src="/bgm.mp3"
        loop
      />
      
      {/* Volume Slider - Revealed on Hover */}
      <div className={`overflow-hidden transition-all duration-300 flex items-center ${showVolume ? 'w-24 opacity-100 pr-2' : 'w-0 opacity-0'}`}>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-1 bg-white/50 rounded-lg appearance-none cursor-pointer accent-red-600"
        />
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors shadow-md cursor-pointer"
        aria-label={isPlaying ? "Pause music" : "Play music"}
        type="button"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
