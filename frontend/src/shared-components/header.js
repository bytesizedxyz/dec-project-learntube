import React from 'react'

import { LOGIN, SIGNUP, LOGOUT } from "../actions/header-actions";



const Header = ({title}) => (<header>{title}</header>);
const Body = ({title}) => (<body>{title}</body>);

//need to make header a higher order component
//use Connect: dispatching actions with mapDispatchToProps

class Header extends React.Component {
  render() {
    const {login, signup, logout} = this.props;
    return (
      <div className="app">
        <Header title={header} />
        <Body title={body} />
      </div>
    );
  }
};

React.render(
  <App 
    header="I am the header" 
    body="I am the body" />, 
  document.getElementById('react')
);