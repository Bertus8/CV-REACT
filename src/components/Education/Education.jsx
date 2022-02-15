import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education-card">
        {education.map((item) => {
          return (
            <>
            <hr></hr>
            <div key={JSON.stringify(item)}>
              
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export {Education};