import { useState, useEffect, resetEffects, resetState } from "../something.js";

const counterValue = document.querySelector("#counterValue");

let setCountRef;
let countRef;

document.addEventListener("click", (e) => {
  const btn = e.target;

  if (!btn) return;

  if (btn.id === "decrementBtn") {
    if (countRef > 0) {
      setCountRef(countRef - 1);
      counterValue.textContent = `${countRef}`;
    } else return;
  }

  if (btn.id === "incrementBtn") {
    setCountRef(countRef + 1);
    counterValue.textContent = `${countRef}`;
  }
});

function App() {
  const [count, setCount] = useState(0);
  setCountRef = setCount;
  countRef = count;
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);
}
window.render = render;

function render() {
  resetState();
  resetEffects(); 
  App();
}
render(); 
