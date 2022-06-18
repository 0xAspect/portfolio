import React, {useEffect}  from 'react'
import "./projectsViewer.scss"
import { useParams,useLocation } from 'react-router-dom';
import data from './ProjectData';



const ProjectsViewer = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, useLocation);

  const projectUrl  = useParams().project;
  const projectData = data.Projects.filter(function (projects){return projects.url === projectUrl;})[0];

    console.log(projectData);
    return (
    <>
      <div className='display-container'>
        <div className='display-title-container'><h1 className='display-title'>{projectData.title}</h1>
         <div>
           <a className= 'header-link' href={projectData.links.github}>GitHub</a>
           <a className= 'header-link' href={projectData.links.blockscanner}>Block Explorer</a>
           <a className= 'header-link' href={projectData.links.frontend}>Front End</a>
        </div>
      </div>
      <hr/>
      <ul className='display-tech'>{projectData.tech.map(tool => { return (<li className='display-tech-item'>{tool + " "} </li> )})}</ul>
      <div className='display-images-container'>
        <img className='display-img' alt="img" src={require('../../images/Projects/'+projectData.url.toString()+'/0.jpg')}></img>
        <img className='display-img'alt="img"src={require('../../images/Projects/'+projectData.url.toString()+'/1.jpg')}></img>
        <img className='display-img'alt="img"src={require('../../images/Projects/'+projectData.url.toString()+'/2.jpg')}></img>
        <img className='display-img'alt="img"src={require('../../images/Projects/'+projectData.url.toString()+'/3.jpg')}></img>
      <h2>{projectData.tagline}</h2>
      <h1 className='body-title'>Description</h1>
        {projectData.description.map((value, index) => {
        return <p className='description-p' key={index}>{value}</p>
      })}
      <h1 className='body-title' >Features</h1>
      <p className='description-p'>{projectData.features.description}</p>
      <ul>      {projectData.features.features.map((value, index) => {
        return <li className="features-list-item" key={index}>{value}</li>
      })}</ul>


        </div>
      </div>
    </>
    );
};

export default ProjectsViewer
