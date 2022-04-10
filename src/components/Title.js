import React from 'react';

const Title = ({ title, icon }) => {
    return (
        <div className="title">
            <img src={"." + icon} alt="logo project" />
            <h3>{title}</h3>
        </div>
    );
};

export default Title;