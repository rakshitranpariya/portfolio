import React from "react";
import "./ExperienceFirstPage.css";
import locationImage from "../../Images/location.png";

function ExperienceFirstPage({ sendData }) {
  // Guard against undefined
  if (!sendData) return null;

  const {
    CompanyName,
    Role,
    EmploymentType,
    Location,
    Duration,
    TechStack = [],
    ImageLink,
  } = sendData;
  console.log(TechStack);
  return (
    <div className="experienceFirstPage">
      <div className="primaryInformationSection mobilePrimaryInformationSection">
        <div className="imageContainer">
          {ImageLink ? (
            <img
              src={ImageLink}
              alt={`${CompanyName} logo`}
              className="institutionImage mobileInstituteImage"
            />
          ) : null}
        </div>
        <div className="descriptionContainer">
          <div className="jobTitleDiv">
            <div className="roleTitle mobileRoleTitle">{Role}</div>
            <div className="companyTitle mobileCompanyTitle">{CompanyName}</div>
          </div>

          <div className="triSection">
            <div className="locationDiv">
              <img className="locationIcon" src={locationImage} />
              <div className="location">{Location}</div>
            </div>
            <div className="employmentTypeDiv">
              <span className="employmentTypeDot" aria-hidden="true" />
              <span className="employmentTypeText">{EmploymentType}</span>
            </div>
          </div>
          <div className="durationDiv">{Duration}</div>
        </div>
      </div>


      <div className="secondaryInformationSection">
        <div className="bubbleSection">
          <div className="bubbleTrack1">
            {[...TechStack, ...TechStack, ...TechStack].map((tech, idx) => (
              <span key={idx} className="bubbleChip">
                {tech}
              </span>
            ))}
          </div>
          <div className="bubbleTrack2">
            {[...TechStack, ...TechStack, ...TechStack].map((tech, idx) => (
              <span key={idx} className="bubbleChip">
                {tech}
              </span>
            ))}
          </div>
          <div className="bubbleTrack3">
            {[...TechStack, ...TechStack, ...TechStack].map((tech, idx) => (
              <span key={idx} className="bubbleChip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>



      
    </div>
  );
}

export default ExperienceFirstPage;
