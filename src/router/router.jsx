import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import ProjectsViewer from "../components/Projects/ProjectsViewer";

const ReactRouter =()=>{
return (
<>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />\
        <Route exact path="/projects/:project" element={<ProjectsViewer/>} />\
    </Routes>
</>
);}
export default ReactRouter;