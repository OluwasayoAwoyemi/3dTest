// App.jsx
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
          url="/0001-0250.mp4"
          controls={false}
          playing={isPlaying}
          loop={true}
          width="100%"
          height="100%"
        />
        <div className="custom-controls">
          <button onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>

      {/* The other half for additional content */}
      <div className="other-content-container">
        {/* Rectangle with width 40% and height 70% */}
        <div className="rectangle">
          <button className="button">Open Red Report</button>
          <button className="button">Open Orange Report</button>
          <button className="button">Open Green Report</button>
          <button className="button">Open Blue Report</button>
          <button className="button">Download Total Report</button>
        </div>
        {/* Add your other components/content here */}
      </div>
    </div>
  );
}

export default App;
