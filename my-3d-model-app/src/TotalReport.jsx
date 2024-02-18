import React from 'react';

const TotalReport = () => {
  return (
    <div>
      <div className="report-container">
        <h2>Property Maintenance Report</h2>
        <p><strong>Date:</strong> February 18, 2024</p>
        <p><strong>To:</strong> Mr. John Smith, Property Manager</p>
        <p><strong>Subject:</strong> Urgent Repairs Required</p>
        
        <p>Dear Mr. Smith,</p>

        <p>I hope this document finds you well. We conducted a routine inspection of the property located at 123 Main Street on February 15, 2024, and it is our duty to inform you of several issues that require immediate attention to ensure the safety and integrity of the premises.</p>

        <ol>
          <li>
            <strong>Broken Window:</strong>
            <ul>
              <li><strong>Location:</strong> Living Room</li>
              <li><strong>Description:</strong> The window at the specified location is broken, posing a security risk and allowing environmental elements to enter the property. Urgent repair or replacement is advised to maintain the safety and aesthetics of the building.</li>
            </ul>
          </li>

          <li>
            <strong>Faulty Patio:</strong>
            <ul>
              <li><strong>Location:</strong> Backyard, Patio Area</li>
              <li><strong>Description:</strong> The patio structure exhibits signs of wear and tear, with evident faults in the flooring and support. This poses a potential hazard to residents and visitors. Immediate attention is required to rectify the issues and prevent further deterioration.</li>
            </ul>
          </li>

          <li>
            <strong>Damaged Chimney:</strong>
            <ul>
              <li><strong>Location:</strong> Rooftop</li>
              <li><strong>Description:</strong> The chimney structure is damaged, compromising its functionality and potentially leading to issues such as water leakage or poor ventilation. Repair work is essential to maintain the safety and efficiency of the chimney system.</li>
            </ul>
          </li>

          <li>
            <strong>Dilapidated Stairway:</strong>
            <ul>
              <li><strong>Location:</strong> Main Entrance, Staircase</li>
              <li><strong>Description:</strong> The stairway is in a dilapidated state, with visible signs of structural instability. This poses a significant safety risk to anyone using the stairs. Urgent repairs or reconstruction are necessary to prevent accidents and ensure the well-being of the property's occupants.</li>
            </ul>
          </li>
        </ol>

        <p>We strongly recommend engaging the services of a licensed and qualified contractor to assess and address these issues promptly. Failure to do so may lead to further damage, increased repair costs, and potential safety hazards for occupants and visitors.</p>

        <p>Please feel free to contact us if you require assistance in finding reputable contractors or need further clarification on the issues outlined in this report.</p>

        <p>Thank you for your prompt attention to these matters.</p>

        <p>Sincerely,</p>
        <p>
        Immersion Data Solutions Property Management</p>
      </div>
    </div>
  );
};

export default TotalReport;
