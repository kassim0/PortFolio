import React from 'react';

const Description = ({ description, caractéristique, domaine, projet }) => {
    return (
        <div className="description">
            <div className="projet">
                {domaine + " | projet " + projet}
            </div>
            <h3>{description}</h3>
            <div className="params">
                {caractéristique.map((param, index) => <p key={index}>{param}</p>)}
            </div>
        </div>
    );
};

export default Description;