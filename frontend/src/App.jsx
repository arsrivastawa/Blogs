import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-red-700 font-bold">Hello World</h1>
    </>
  );
}

export default App;