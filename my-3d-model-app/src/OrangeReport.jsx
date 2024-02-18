import React from 'react';
import ReactPlayer from 'react-player';

const OrangeReport = () => {
  return (
    <div>
      <div className="video-container">
        <ReactPlayer
          url="/50001-0241.mp4" // Replace with the path to the orange report video
          controls={true}
          playing={true} // Auto-play for demonstration, you can modify as needed
          width="100%"
          height="100%"
        />
      </div>
      <div className="description-container">
        <p>Upon inspection of the window in Building XYZ, it is evident that significant damage has occurred, particularly in the form of a broken window. Immediate attention and remediation are necessary to address this issue.</p>
        <p>The broken window poses a security risk, allowing unauthorized access to the building. It also exposes the interior to external elements such as weather, increasing the potential for water damage and compromising the overall safety and comfort of the occupants.</p>
        <p>Additionally, the broken glass creates a safety hazard, with sharp edges that could cause injuries to occupants or passersby. It is crucial to address this issue promptly to ensure the well-being of individuals in and around the building.</p>
        <p>In conclusion, urgent action is required to replace and repair the broken window in Building XYZ. This involves securing the area, removing the damaged glass, and installing a new window to restore the structural integrity and security of the building.</p>
      </div>
    </div>
  );
};

export default OrangeReport;
