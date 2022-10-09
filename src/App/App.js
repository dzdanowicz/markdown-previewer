import React from "react";
import "./App.css";
import Editor from "../Editor/editor.js";
import Preview from "../Preview/preview.js";

function App() {
  return (
    <div id="App">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
