import React from 'react'
import { useState } from 'react';

const ManageData = () => {
    let someData = 10;

    const [Number, setNumber] = useState(15);

    return (
        <div>
          <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
          </div>
          <div>
            <p>Valor: {Number}</p>
            <button onClick={() => setNumber(20)}>Mudar state</button>
          </div>
        </div>
      );
}

export default ManageData;