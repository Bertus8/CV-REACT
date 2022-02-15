import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience-card">
        {experience.map((item) => {
          return (
            <>
            <hr />
            <div key={JSON.stringify(item)}>
              <p>📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export {Experience};