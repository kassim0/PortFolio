import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carroussel from '../components/Carroussel';
import Description from '../components/Description';
import Title from '../components/Title';
import allProjects from "../projects";

const About = () => {
    const params = useParams()
    const { projectId } = params;
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(allProjects);
    }, [])

    return (
        <div className="about">
            {
                data
                    .filter((project) => project.id == projectId)
                    .map((project, index) =>
                        <div key={index}>
                            <Title title={project.title2} icon={project.icon} />
                            <hr />
                            <div className="detail">
                                <Carroussel images={project.image} />
                                <Description description={project.description}
                                    caractéristique={project.caractéristique}
                                    domaine={project.domaine}
                                    projet={project.projet} />
                            </div>
                        </div>)
            }
        </div>
    );
};

export default About;