import React from 'react'
import laptopImg from "../Assets/react.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import express from "../Assets/expre.png";
import js from "../Assets/js.jpeg";
import mongo from "../Assets/mongo.png";
import node from "../Assets/node.png";

import './Skills.css'

const skills={
    textDecoration:'underline',
}
function Skillcard(props){
  return(
    <div className='card'>
        <img src={props.image} alt="React" srcset="" />
    </div>
  );
}
const Skills = () => {
  return (
    <div className='main'>
      <h1 id ="skills"style={skills}>Skills</h1>
      <div className='cards'>
      <Skillcard image={laptopImg}/>
      <Skillcard image={html}/>
      <Skillcard image={css}/>
      <Skillcard image={js}/>
      <Skillcard image={node}/>
      <Skillcard image={express}/>
      <Skillcard image={mongo}/>
      </div>
    </div>
  );
}

export default Skills
