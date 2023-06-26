import { useState } from "react";
const MyButton2 = () => {
  const [count, setCount] = useState(0);
  const [resulOfOperation, setResultOfOperation] = useState();
  const [operators, setOperators] = useState("+");
  const number = 0;
  function calculate() {
    if (operators === "+") {
      setResultOfOperation(count + count);
    } else if (operators === "-") {
      setResultOfOperation(count - count)
    } else if (operators === "x") {
      setResultOfOperation(count * count)
    } else if (operators === "/") {
      setResultOfOperation(count / count)
    }



  }
  return (

    <div className="App">
      <nav class="Navbar">
        <div>React Exercises</div>
        <div class="numbers">
          <p>#1</p>
          <p>#2</p>
          <p>#3</p>
          <p>#4</p>
        </div></nav>
      <header className="header">

        Exercise 2
      </header>
      <p class="enunciate">
        Increment the number when you click on the buttons and display the result of the operation. You can only use 3 states.
      </p>
      <p class="output">

        <button class="btn" onClick={() => setCount((count) => count + 1)}>{count}</button>
        <select onClick={calculate} onChange={event => setOperators(event.target.value)} id="operators">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="x">x</option>
          <option value="/">/</option>
        </select>
        <button class="btn" onClick={() => setCount((count) => count + 1)}>{count}</button>
        <p>=</p>
       <p> {resulOfOperation || "0"}</p>
      </p>
    </div>
  )
}
export default MyButton2;
