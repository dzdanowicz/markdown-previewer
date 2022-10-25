import React from "react";
import "./Editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleEditorChange(event.target.value);
  }

  render() {
    return (
      <div id="editorContainer">
        <textarea
          id="editor"
          value={this.props.text}
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

export default Editor;
