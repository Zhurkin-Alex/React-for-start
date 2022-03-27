import React from 'react';
import { useState } from 'react';

function Cats() {
    console.log('cats')
    const [object, setObject] = useState()
    const chancheHadler =()=>{
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data =>setObject(data[0]))
    }
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <button onClick={chancheHadler}>cats</button>
        <img className='img' src={object?.url} style={{width:'400px'}}/>
        </div>
    );
}

export default Cats;