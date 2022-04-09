import React from 'react';

const project = ({ project }) => {
    return (
        <li className="card">
            <img src={project.image[0]} alt="project" />
            <div className="infos">
                <p>{project.title}</p>
            </div>
        </li>
    );
};

export default project;