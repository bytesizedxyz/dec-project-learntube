import React from "react";
import { connect } from "react-redux";
import { render } from "react-testing-library";
import PropTypes from "prop-types";
import lunr from "lunr";

class searchBar extends React.Component {
  state = { index: null, filter: "", finishedIndexing: false, results: null };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  componentDidMount() {
    setTimeout(this.makeMap, 2000);
  }

  makeMap = () => {
    const { videos, videoUuids } = this.props.state;
    const index = lunr(function() {
      //what fields to look for
      this.field("title");
      this.field("url");
      this.field("username");
      this.field("watch_count");

      this.ref("uuid");

      //adding videos by id to the index to search by
      videoUuids.forEach(id => this.add(videos[id]), this);
    });
    //setting lunr functions to the index, while also storing the indexed videos there too??
    this.setState({ index, finishedIndexing: true });
  };

  handleSubmit = e => {
    this.setState({ results: null });
    const { updateList } = this.props;
    const { videos } = this.props.state;
    const { filter, index } = this.state;
    e.preventDefault();
    if (!filter) return [];
    const results = index.search(filter);
    this.setState({ results });
    updateList(results);
    this.setState({ filter: "" });
  };

  render() {
    const { filter, finishedIndexing } = this.state;
    return (
      <div>
        {finishedIndexing ? (
          <div id="searchbar">
            <form onSubmit={this.handleSubmit}>
              <input name="filter" value={filter} onChange={this.handleChange} />
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

searchBar.protoTypes = {
  fields: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  filter: PropTypes.string,
  children: PropTypes.func
};

export default searchBar;
