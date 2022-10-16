import React from "react";
import "./Editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <div className="container">
        <textarea id="editor"></textarea>
      </div>
    );
  }
}

export default Editor;
