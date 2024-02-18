import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import RedReport from './RedReport';
import OrangeReport from './OrangeReport';
import GreenReport from './GreenReport';
import BlueReport from './BlueReport';
import TotalReport from './TotalReport';

const App = () => {
  const [currentView, setCurrentView] = useState('main');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleReportClick = (view) => {
    setCurrentView(view);
    setIsPlaying(true); // Auto-play when switching to a report
  };

  const handleBackClick = () => {
    setCurrentView('main');
    setIsPlaying(false); // Pause when returning to the main screen
  };

  const renderMainView = () => (
    <div className="rectangle">
      <button onClick={() => handleReportClick('red')}>Open Red Report</button>
      <button onClick={() => handleReportClick('orange')}>Open Orange Report</button>
      <button onClick={() => handleReportClick('green')}>Open Green Report</button>
      <button onClick={() => handleReportClick('blue')}>Open Blue Report</button>
      <button onClick={() => handleReportClick('total')}>Download Total Report</button>
    </div>
  );

  const renderReportView = () => {
    switch (currentView) {
      case 'red':
        return <RedReport />;
      case 'orange':
        return <OrangeReport />;
      case 'green':
        return <GreenReport />;
      case 'blue':
        return <BlueReport />;
      case 'total':
        return <TotalReport />;
      default:
        return null;
    }
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
          <button onClick={() => setIsPlaying((prevIsPlaying) => !prevIsPlaying)}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>

      {/* The other half for additional content */}
      <div className="other-content-container">
        {/* Display the selected view */}
        {currentView === 'main' ? renderMainView() : renderReportView()}

        {/* Back button */}
        {currentView !== 'main' && (
          <button onClick={handleBackClick}>Back</button>
        )}
      </div>
    </div>
  );
};

export default App;
