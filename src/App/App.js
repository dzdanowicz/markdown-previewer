import React from "react";
import "./App.css";
import Editor from "../Editor/Editor.js";
import Preview from "../Preview/Preview.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "# This is Markdown Previewer\n## You can try putting here your Markdown markup language\n### For example:\n\n- Text\nYou can make text **bold**, *italic* or ~~strikethrough~~ it\n\n---\n\n- Inline Code\nYou can put for example `console.log()` inside the text\n\n---\n\n- Code Block\n```\nclass App extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return <h1>Lorem Ipsum</h1>;\n  }\n}\n```\n```\nfunction App() {\n  return <h1>Lorem Ipsum</h1>;\n}\n```\n\n---\n\n- Quote\n> This is a blockquote\n> in a multiple\n> lines\n\n---\n\n- Image\n![This is an image](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)\n\n---\n\nYou can learn more about Markdown [here](https://docs.github.com/en/get-started/writing-on-github)",
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
