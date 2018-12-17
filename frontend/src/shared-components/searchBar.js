import React from "react";
import PropTypes from "prop-types";
import lunr from "lunr";

class searchBar extends React.Component {
  constructor(props) {
    super(props);
    const { videos, videoUuids } = props.state;
    console.log("loggin props");
    console.log(props);
    const index = lunr(function() {
      this.field("title");
      console.log(videoUuids);
      videoUuids.forEach(id => this.add(videos[id]));
    });
    this.state = { index, videos };
  }

  getResult = filter => {
    if (!filter) return [];
    const results = this.state.index
      .search(filter)
      .map(({ field, ...rest }) => ({
        field,
        item: this.state.videos.find(v => v.id == field),
        ...rest
      }));
    return results;
  };

  render = () => {
    const results = this.getResult(this.props.filter);
    const childrenWithProps = React.Children.map(this.props.children, function(
      child
    ) {
      return React.cloneElement(child, { results, getResult: this.getResult });
    });
    return <div>{childrenWithProps}</div>;
  };
}

searchBar.protoTypes = {
  fields: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  filter: PropTypes.string,
  children: PropTypes.func
};

export default searchBar;

//export connect(state => state)(searchBar)
