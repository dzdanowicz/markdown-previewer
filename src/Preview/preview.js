import React from "react";
import { marked } from "marked";
import "./Preview.css";
import "github-markdown-css";

marked.setOptions({
  gfm: true,
  breaks: true,
});

class Preview extends React.Component {
  componentDidUpdate() {
    document.getElementById("preview").innerHTML = marked.parse(
      this.props.text
    );
  }

  render() {
    return (
      <div id="previewContainer" className="markdown-body">
        <div id="preview"></div>
      </div>
    );
  }
}

export default Preview;
