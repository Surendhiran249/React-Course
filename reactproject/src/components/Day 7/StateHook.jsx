import { useState } from 'react';

const Counter = () =>{
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>You Clicked  {count} times</h1>
            <button  onClick={() => setCount(count + 1)} style={{padding : '20px' , borderRadius : '4px', backgroundColor : 'red' , color:'white'}}>Click me</button>
        </div>
    )
}

export default Counter ;