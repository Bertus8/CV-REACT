import React from "react";
import "./About.css";

const About = ({ hero }) => {
  return (
  <div>  
    <div className="about">
      <h2 className="title-about">Sobre mi</h2>
   {hero.about.map((item)=>{ 
     return(
       <>
       <hr />
       <div key={JSON.stringify(item)}>
         <p>{item.info1}</p>
         <p>{item.info2}</p>
         <p>{item.info3}</p>
         <p>{item.info4}</p>
       </div>
       </>
     );
   })}
   </div>
 </div>
  );
};

export { About };