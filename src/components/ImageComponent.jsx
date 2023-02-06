import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} width="500" height="500" alt="kittens" />
      </div>
    );
  }
}

export default ImageComponent;
