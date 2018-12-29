import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = async term => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    const data = await res.data.results;
    const img = data.map(image => image.urls.full);

    await this.setState({
      images: [...img]
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
