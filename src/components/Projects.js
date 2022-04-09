import React, { useEffect, useState } from 'react';
import allProjects from "../projects";
import Project from "./project.js";

const Projects = () => {

    const [data, setData] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Unity", "web", "programmation", "iot"];

    useEffect(() => {
        setData(allProjects)
    })

    return (
        <div className="projects">
            <ul className="radio-container">
                {radios.map((type, index) => <li key={index}>
                    <input type="radio" id={type} name="typeRadio" onChange={(e) => setSelectedRadio(e.target.id)} checked={type === selectedRadio} />
                    <label htmlFor={type}>{type}</label>
                </li>)}
            </ul>
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")} >Annuler la recherche</button>
            )}
            <ul>
                {
                    data
                        .filter((project) => project.type.includes(selectedRadio))
                        .map((project, index) => <Project key={index} project={project} />)
                }
            </ul>
        </div>
    );
};

export default Projects;