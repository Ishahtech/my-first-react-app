// import { useState } from "react";

function SimpleCounter() {
  // const [counter, setCounter] = 0;
  // //handle increment
  // const handleIncrement = () => {
  //   setCounter((prev) => {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  // };
  // //handle decrement
  // const handleDecrement = () => {
  //   setCounter((prev) => {
  //     console.log(prev);
  //     return prev - 1;
  //   });
  // };
  return (
    <div>
      <p>0</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default SimpleCounter;
