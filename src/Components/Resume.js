import React from "react";

function Resume(props) {
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{props.year}</h6>
      </div>  
      <div className="mi-resume-details">
        <h5>{props.position || props.graduation}</h5>
        <h6 className="mi-resume-company">{props.company || props.university}</h6>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default Resume;
