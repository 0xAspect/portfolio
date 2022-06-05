import React  from 'react'
import "./projects.scss"
import { useParams } from 'react-router-dom';
import data from './ProjectData';

const ProjectsViewer = () => {

  const projectUrl  = useParams().project;
  const projectData = data.Projects.filter(function (projects){return projects.url === projectUrl;})[0];

    return (
    <>
      <div style={{color:"white"}}>
        <h1> {projectData.title}</h1>
        <ul>{projectData.tech.map(tool => { return (<li>{tool + " "} </li> )})}</ul>
        <p>{projectData.description}</p>
      </div>
    </>
    );
};

export default ProjectsViewer
