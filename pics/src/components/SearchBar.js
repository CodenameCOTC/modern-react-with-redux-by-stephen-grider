import React from "react";

class SearchBar extends React.Component {
  state = {
    searchBar: ""
  };

  onInputChange = async e => {
    await this.setState({ searchBar: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { searchBar } = this.state;
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-bar">Image Search</label>
            <input
              type="text"
              id="search-bar"
              onChange={this.onInputChange}
              value={searchBar}
              placeholder="Type here to search image"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
