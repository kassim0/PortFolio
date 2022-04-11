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
                        <div key={index} className="details">
                            <Carroussel images={project.image} />
                            <div key={"des" + index} className="presentation">
                                <Title className="title" title={project.title} icon={project.icon} />
                                <Description
                                    description={project.description}
                                    caractéristique={project.caractéristique}
                                    projet={project.projet}
                                    domaine={project.domaine}
                                    lien={project.lien}
                                    phrase_lien={project.phrase_lien} />
                            </div>
                        </div>)
            }
        </div>
    );
};

export default About;