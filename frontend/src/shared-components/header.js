import React from 'react'
import { LOGIN, SIGNUP, LOGOUT } from "../state/actions/auth";
import { Link } from '@reach/router';
import {connect} from 'react-redux';
import styled from 'styled-components';
import LearnTubeLogo from "../resources/learntube.svg";
import PernHubLogo from "../resources/pernhub.svg";
import Modal from "./modal";
import { BlurredBackground } from "../shared-styles";
import LoginForm from './login'

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`



//use Connect: dispatching actions with mapDispatchToProps


const HeaderBar = ({title}) => (<header>{title}</header>);


const Img = styled.img`
  width: 250px;
  height: 100px;
`;

class Logo extends React.Component {
  state = {
    pg: true
  };

  render() {
    return (
      <LogoContainer>
        {this.state.pg ? (
          <Img src={LearnTubeLogo} />
        ) : (
          <Img src={PernHubLogo} />
        )}
      </LogoContainer>
    );
  }
}



class Header extends React.Component {
  state = { toggleLoginForm: false }
 
  handleClick = (event) => {
    const id = event.target.id
    switch(id) {
      case 'login':
        this.handleLoginClick()
        break;
      case 'logout':
        this.handleLogoutClick()
        break;
      default:
        return
    }
  }

handleLoginClick = () => {
  console.log("HANDLE LOGIN")
  // Using the logged_in boolean from props to determine which action creator to fire off.

  // If a user is not logged in
  // then this should toggle a boolean that will open the login modal
  //  -> Furthermore, the login modal will contain the state necessary for
  //     logging in a user, i.e. username/password, and it can

  // if a user is logged in
  // then this should fire the log out action creator.
}

handleLogoutClick = () => {
  console.log("HANDLE LOGOUT")
}

// this gets passed to 
fireOffLoginAction = (username, password) => {
  // This should be an action creator
  // this.props.login(username, password)
}


  render() {
    const { toggleLoginForm } = this.state
    console.log(this.props)
    const { logged_in } = this.props.authenticationStatus;   //containerComponent
      
    // Going to need to include the login modal inside of
    return (
        <Nav>
          <div id="headerBg" >
            <div id="searchbar">
              <input type='text' placeholder='Search...'/>
            </div>
            
            <div id="logo-container">
              <Link style={{color: 'white'}} to='/'><Logo /></Link>
            </div>
            
            <div id="buttons">
              <button id={!logged_in ? "login" : "logout"} onClick={this.handleClick}>{!logged_in ? "Sign In" : "Sign Out"}</button>
            </div>
          </div>
          {toggleLoginForm ? (
          <Modal>
            <BlurredBackground />
            <LoginForm />
          </Modal>
        ) : null}
        </Nav>
    );
  }
};

const Nav = styled.nav`
  #headerBg {
    display: flex;
    flex-direction: ${props => props.col ? 'column' : 'row'}
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #fbfbfb;
    color: white;
  }

  #searchbar {
    flex: 1;
    padding-left: 10px;
  }

  #logo-container {
    flex: 1;
  }

  #buttons {
    flex: 1;
    text-align: right;
    padding-right: 20px;
    color: black;
  }
`


export default connect(state => state)(Header)


