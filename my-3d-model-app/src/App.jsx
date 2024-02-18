import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="app-container">
      {/* Quarter of the screen for the video */}
      <div className="video-container">
        <ReactPlayer
          url="/0001-0250.mp4"  // Replace with the correct path to your video file in the public folder
          controls={false}
          playing={isPlaying}
          loop={true}
          width="50%"
          height="50%"
        />
        <div className="custom-controls">
          <button onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>

      {/* The other half for additional content */}
      <div className="other-content-container">
        {/* Add your other components/content here */}
      </div>
    </div>
  );
}

export default App;
