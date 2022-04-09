import React, { useEffect } from 'react';
import projects from "../projects";

const Projects = () => {

    useEffect(() => {
        console.log(projects)
    })

    return (
        <div className="projects">
            <ul className="radio-container"></ul>
        </div>
    );
};

export default Projects;