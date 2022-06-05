import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import ProjectsViewer from "../components/Projects/ProjectsViewer";

const ReactRouter =()=>{
return (
<>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />\
        <Route exact path="/projects/:project" element={<ProjectsViewer/>} />\
        <Route exact path="/contact" element={<Contact/>} />\
    </Routes>
</>
);}
export default ReactRouter;