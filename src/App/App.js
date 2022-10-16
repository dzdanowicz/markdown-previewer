import React from "react";
import "./App.css";
import Editor from "../Editor/Editor.js";
import Preview from "../Preview/Preview.js";

function App() {
  return (
    <div id="App">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
