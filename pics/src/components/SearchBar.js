import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onInputChange = async e => {
    await this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-bar">Image Search</label>
            <input
              type="text"
              id="search-bar"
              onChange={this.onInputChange}
              value={term}
              placeholder="Type here to search image"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
