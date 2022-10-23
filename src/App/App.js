import React from "react";
import "./App.css";
import Editor from "../Editor/Editor.js";
import Preview from "../Preview/Preview.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <div id="App">
        <Editor />
        <Preview />
      </div>
    );
  }
}

export default App;
