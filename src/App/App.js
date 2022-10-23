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
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(editorText) {
    this.setState({
      text: editorText,
    });
  }

  render() {
    return (
      <div id="App">
        <Editor
          handleEditorChange={this.handleEditorChange}
          text={this.state.text}
        />
        <Preview text={this.state.text} />
      </div>
    );
  }
}

export default App;
