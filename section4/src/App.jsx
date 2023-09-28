import "./App.css";
import { useState, useEffect, useRef } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";
import useUpdate from "./hooks/useUpdate";
import useInput from "./hooks/useInput";

function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();

  useUpdate(() => {
    console.log("App Component Udpate");
  });

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText}></input>
      </section>
      <section>
        <Viewer count={count}></Viewer>
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton}></Controller>
      </section>
    </div>
  );
}

export default App;
