import React from 'react';
import Cats from '../cats/Cats';
import Count from '../count/Count';

function Card() {
    console.log('card')
    return (
        <div className='card'>
        <Count/>
        <Cats/>
        </div>
    );
}

export default Card;