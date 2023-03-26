import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import workCardData from "./WorkCardData";
import React from "react";


const work = () => {
  return ( 
  <div className="work-container" >
    <h1 className="project-heading"></h1>
    <div className="project-container">
      {workCardData.map((value, index)=> {
      return(
        <workCard key={index} imgsrc={value.imgsrc}
        title={value.title}/>

      )
      })};
   
     </div>
  </div>
  );
};

export default work;