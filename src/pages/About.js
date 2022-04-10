import React from 'react';
import { useParams } from 'react-router-dom';

const About = (props) => {
    const params = useParams()
    const { projectId } = params
    console.log(projectId);

    return (
        <div>
            about
        </div>
    );
};

export default About;