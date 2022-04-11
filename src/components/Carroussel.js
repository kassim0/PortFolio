import React, { useState } from 'react';

const Carroussel = ({ images }) => {
    const [numero, setNumero] = useState(0);


    function add() {
        setNumero(numero + 1)
        if (numero >= images.length - 1) {
            setNumero(0)
        }
    }
    function remove() {
        setNumero(numero - 1)
        if (numero <= 0) {
            setNumero(images.length - 1)
        }
    }

    return (
        <div className="carroussel">
            <button onClick={() => [remove()]}>-1</button>
            <img src={"." + images[numero]} />
            <button onClick={() => [add()]}>+1</button>
        </div>
    );
};

export default Carroussel;

