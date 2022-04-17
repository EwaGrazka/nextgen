import { useState } from "react";
import "./App.scss";
import Header from "./app/components/Header/Header";

function App() {
  const [night, setNight] = useState(false);
  const [lang, setLang] = useState("pl");

  return (
    <div className="App">
      <Header night={night} setNight={setNight} />
    </div>
  );
}

export default App;
