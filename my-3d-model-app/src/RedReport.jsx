import React from 'react';
import ReactPlayer from 'react-player';

const RedReport = () => {
  return (
    <div>
      <div className="video-container">
        <ReactPlayer
          url="/20001-0241.mp4" // Replace with the path to the red report video
          controls={true}
          playing={true} // Auto-play for demonstration, you can modify as needed
          width="100%"
          height="100%"
        />
      </div>
      <div className="description-container">
        <p>Upon careful inspection of the patio in Building XYZ, it has become evident that there are several issues compromising its structural integrity and overall functionality. The patio, designed to be a serene outdoor space, has unfortunately succumbed to various challenges that demand immediate attention and remediation.</p>
        <p>The concrete surface of the patio exhibits noticeable cracks, ranging from hairline fissures to more substantial fractures. These cracks not only compromise the aesthetic appeal of the patio but also raise concerns about its ability to withstand load-bearing requirements.</p>
        <p>The choice of materials for the patio construction appears to be substandard, as evidenced by accelerated wear and tear. Weathering, erosion, and fading are prominent issues, diminishing the patio's visual appeal and jeopardizing its long-term durability.</p>
        <p>In conclusion, addressing these issues is imperative to restore the patio to a safe, functional, and aesthetically pleasing outdoor space. A comprehensive remediation plan, encompassing structural repairs, drainage improvements, material upgrades, and proper sealing, is recommended to ensure the longevity and safety of the patio in Building XYZ.</p>
      </div>
    </div>
  );
};

export default RedReport;
