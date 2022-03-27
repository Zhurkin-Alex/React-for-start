import React from 'react';

function Outh({outh}) {
    const handlOuth =()=>{
        outh(true)
    }
    console.log('outh');
    return (
        <div>
            <p>тут регистрация</p>
            <button onClick = {handlOuth}> button </button>
        </div>
    );
}

export default Outh;