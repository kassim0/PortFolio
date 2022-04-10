import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title';
import allProjects from "../projects";

const About = () => {
    const params = useParams()
    const { projectId } = params;
    const [data, setData] = useState([]);
    //console.log(projectId);
    //console.log(allProjects);

    useEffect(() => {
        setData(allProjects);
    }, [])

    return (
        <div className="about">
            {
                data
                    .filter((project) => project.id == projectId)
                    .map((project, index) => <Title key={index} title={project.title2} icon={project.icon} />)
            }
        </div>
    );
};

export default About;