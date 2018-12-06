import React from 'react'

import { LOGIN, SIGNUP, LOGOUT } from "../actions/auth-actions";
const HeaderBar = ({title}) => (<header>{title}</header>);

//need to make header a higher order component
//use Connect: dispatching actions with mapDispatchToProps

class Header extends React.Component {
  render() {
    const {login, signup, logout, title} = this.props;
    return (
      <HeaderBar title={title} />
      
    );
  }
};


export default Header;