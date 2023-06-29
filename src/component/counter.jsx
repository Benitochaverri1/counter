import { useState } from "react";

const Counter = () => {
  const[count, setCount] = useState(0)
          const countHandler = () =>{
            setCount(count + 1);
            
          }
          const countSubtract = () =>{
            setCount(count - 1);
            
          }
          const countReset = () =>{
            setCount(0);
            
          }

          return(
    <div>

      <h1>{count}</h1>
      <button onClick={countHandler}> Add </button>
      <button onClick={countSubtract}> Subtract </button>
      <button onClick={countReset}> Reset </button>
    </div>

          );
};

export default Counter;



