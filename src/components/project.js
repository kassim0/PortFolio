import React from 'react';

const project = ({ project }) => {
    return (
        <li className="card">
            <img src={project.image[0]} alt="project" />
            <a href={"/about/" + project.id} className="infos">
                <p>{project.title}</p>
            </a>
        </li>
    );
};

export default project;