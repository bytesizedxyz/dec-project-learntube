import React from 'react'
import { LOGIN, SIGNUP, LOGOUT } from "../state/actions/auth";
import { Link } from '@reach/router';
import {connect} from 'react-redux';



//use Connect: dispatching actions with mapDispatchToProps


const HeaderBar = ({title}) => (<header>{title}</header>);


class Header extends React.Component {
    
 


handleLoginClick() {

}

handleLogoutClick() {

}


  render() {
    console.log(this.props)
    const loggedIn = this.props.authenticationStatus.logged_In;   //containerComponent
   let button;
    if (loggedIn) {
      button = <button onClick={this.handleLogoutClick}>LogOut</button>
    } else {
      button = <button onClick={this.handleLoginClick}>LogIn</button>
    }
      
    return (
      <div>
        <ul>
          <li><Link to='/'>Landing</Link></li>
          <li><Link to='/login'>login</Link></li>
          <li><Link to='/signup'>singup</Link></li>
          <li><Link to='/logout'>logout</Link></li>          
        </ul>
      </div>

 
);
  }
};



const HeaderComponent = connect(state => state)(Header)



export default Header;