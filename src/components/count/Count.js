import React from 'react';
import { useState } from 'react';

function Count() {
    console.log('count')
    const [count, setCount] = useState(0)
    const countHandler = ()=>{
        setCount(count + 1)
      }
    
    return (
        <div>
        <input type='button' onClick={countHandler} value='count +1'/>
        <p>{count}</p>
        {count>5 && (<>
        вы достигли {count}
        </>)}
        </div>
    );
}

export default Count;