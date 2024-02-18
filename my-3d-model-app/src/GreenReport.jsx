import React from 'react';
import ReactPlayer from 'react-player';

const GreenReport = () => {
  return (
    <div>
      <div className="video-container">
        <ReactPlayer
          url="/40001-0241.mp4" // Replace with the path to the green report video
          controls={true}
          playing={true} // Auto-play for demonstration, you can modify as needed
          width="100%"
          height="100%"
        />
      </div>
      <div className="description-container">
        <p>Upon thorough inspection of the stairway in Building XYZ, it is evident that the structure is in a dilapidated state, presenting significant safety concerns that require immediate attention and remediation.</p>
        <p>The stairway displays visible signs of wear and decay, with compromised structural integrity. The steps show evidence of cracking and deterioration, posing a serious risk to the safety of occupants navigating the stairs. The overall instability of the stairway raises concerns about its ability to support the load-bearing requirements and ensure safe passage.</p>
        <p>Furthermore, the handrails are loose or missing in certain sections, exacerbating the safety hazards associated with using the stairway. The absence of secure handrails poses an increased risk of accidents, particularly for individuals with mobility challenges.</p>
        <p>Due to the dilapidated condition of the stairway, there is an immediate need for comprehensive repairs and structural reinforcement. This should include the replacement of damaged steps, reinforcement of the underlying structure, and the installation of secure handrails to meet safety standards.</p>
        <p>In conclusion, addressing the issues with the deteriorated stairway in Building XYZ is crucial to ensure the safety and well-being of occupants. A prompt remediation plan, incorporating structural repairs and safety enhancements, is strongly recommended to restore the stairway to a safe and functional condition.</p>
      </div>
    </div>
  );
};

export default GreenReport;
