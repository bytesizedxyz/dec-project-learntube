import React from 'react'
import { LOGIN, SIGNUP, LOGOUT } from "../state/actions/auth";
import { Link } from '@reach/router';
import {connect} from 'react-redux';
import styled from 'styled-components';
import LearnTubeLogo from "../resources/learntube.svg";
import PernHubLogo from "../resources/pernhub.svg";


//use Connect: dispatching actions with mapDispatchToProps


const HeaderBar = ({title}) => (<header>{title}</header>);


const Img = styled.img`
width: 200px;
height: auto;
`;

class Logo extends React.Component {
  state = {
    pg: true
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        {this.state.pg ? (
          <Img src={LearnTubeLogo} />
        ) : (
          <Img src={PernHubLogo} />
        )}
      </div>
    );
  }
}



class Header extends React.Component {
    
 
handleLoginClick() {

}

handleLogoutClick() {

}


  render() {
    console.log(this.props)
    const loggedIn = this.props.authenticationStatus.logged_in;   //containerComponent
   let button;
    if (loggedIn) {
      button = <button onClick={this.handleLogoutClick}>LogOut</button>
    } else {
      button = <button onClick={this.handleLoginClick}>LogIn</button>
    }
      
    return (
      <div>
        <nav>

          <div style={{display: 'flex', width: '100%', height: '50px', justifyItems: 'center', justifyContent: 'space-between', background: '#224259', color: 'white'}}>
            <div style={{flex: 1, paddingLeft: '10px'}}>
              <input type='text' placeholder='Search...'/>
            </div>
            
            <div style={{flex: 1}}>
              <Link style={{color: 'white'}} to='/'><Logo /></Link>
            </div>
            
            <div style={{flex: 1, textAlign: 'right', paddingRight: '20px'}}>
              <Link style={{color: 'white', paddingRight: '10px'}} to='/login'>login</Link>
              <Link style={{color: 'white', paddingRight: '10px'}} to='/signup'>SignUp</Link>
            <  Link style={{color: 'white'}} to='/logout'>Logout</Link>
            </div>
          </div>
        </nav>
      </div>

 
);
  }
};



export default connect(state => state)(Header)


