import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({
      spans
    });
  };

  render() {
    const { ImageURI } = this.props;
    const { spans } = this.state;
    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img ref={this.imageRef} alt="GTFO" src={ImageURI} />
      </div>
    );
  }
}

export default ImageCard;
