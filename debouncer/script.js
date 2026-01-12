import {
  useState,
  useEffect,
  useDebounce,
  resetState,
  resetEffects
} from "../something.js";

const input = document.querySelector("#searchInput");
const renderedValue = document.querySelector("#renderedValue");

let setSearchRef;
let searchRef;

input.addEventListener("input", (e) => {
  setSearchRef(e.target.value);
});

function App() {
  const [search, setSearch] = useState("");
  setSearchRef = setSearch;
  searchRef = search;

  const debouncedValue = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedValue === "") return;
    console.log("Debounced value:", debouncedValue);
  }, [debouncedValue]);

}

function render() {
  resetState();
  resetEffects();
  App();
}

window.render = render;
render();
