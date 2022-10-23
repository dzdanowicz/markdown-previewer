import React from "react";
import "./Editor.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <textarea
          id="editor"
          value={this.state.text}
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

export default Editor;
