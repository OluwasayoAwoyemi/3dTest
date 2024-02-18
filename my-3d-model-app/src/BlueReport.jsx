import React from 'react';
import ReactPlayer from 'react-player';

const BlueReport = () => {
  return (
    <div>
      <div className="video-container">
        <ReactPlayer
          url="/30001-0241.mp4" // Replace with the path to the blue report video
          controls={true}
          playing={true} // Auto-play for demonstration, you can modify as needed
          width="100%"
          height="100%"
        />
      </div>
      <div className="description-container">
        <p>Upon thorough examination of the chimney structure in Building XYZ, it is evident that significant damage has occurred, necessitating urgent attention and remediation.</p>
        <p>The chimney exhibits visible cracks and structural instability, raising concerns about its ability to withstand external forces and potential hazards. These cracks are not only compromising the aesthetic appeal of the chimney but also posing a risk of structural failure.</p>
        <p>Additionally, signs of water infiltration and moisture damage are evident, further exacerbating the structural issues. The presence of moisture can lead to accelerated deterioration of the chimney materials, including bricks and mortar, potentially compromising the overall integrity of the structure.</p>
        <p>The mortar joints between the bricks have eroded, creating voids that could allow more water to penetrate the chimney. This erosion has weakened the bonds between the bricks, contributing to the overall instability of the chimney structure.</p>
        <p>In conclusion, immediate action is necessary to address the damaged chimney in Building XYZ. A comprehensive remediation plan, including structural repairs, re-pointing of mortar joints, and waterproofing measures, is recommended to ensure the safety and longevity of the chimney.</p>
      </div>
    </div>
  );
};

export default BlueReport;
