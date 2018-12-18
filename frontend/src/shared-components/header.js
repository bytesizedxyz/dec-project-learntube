import React from 'react'
import { 
  login, signup, logout
 } from "../state/actions/auth";
import { Link } from '@reach/router';
import {connect} from 'react-redux';
import styled from 'styled-components';
import LearnTubeLogo from "../resources/learntube.svg";
import PernHubLogo from "../resources/pernhub.svg";
import Modal from "./modal";
import { BlurredBackground } from "../shared-styles";
import LoginForm from "./login";
import LogoutForm from "./logout";
import SignupForm from "./signup";
import SearchBar from "./searchBar";
import SearchResultsModal from "./searchResultsModal";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

//use Connect: dispatching actions with mapDispatchToProps

const HeaderBar = ({ title }) => <header>{title}</header>;

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
        {this.state.pg ? <Img src={LearnTubeLogo} /> : <Img src={PernHubLogo} />}
      </LogoContainer>
    );
  }
}

class Header extends React.Component {
  state = { toggleFormModal: null, toggleSearchModal: null, searchResults: [] };

  // handleClick = (event) => {
  //   const id = event.target.id
  //   switch(id) {
  //     case 'login':
  //       this.handleLoginClick()
  //       break;
  //     case 'logout':
  //       this.handleLogoutClick()
  //       break;
  //     default:
  //       return
  //   }
  // }

  handleClick = e => {
  console.log(this.state.toggleFormModal)
  if(this.state.toggleFormModal || this.state.toggleFormModal === "logout") {
    this.setState({
      toggleFormModal: null
    })
  }
  const id = e.target.id
  this.toggleModal(id);
  // Using the logged_in boolean from props to determine which action creator to fire off.

  // If a user is not logged in
  // then this should toggle a boolean that will open the login modal
  //  -> Furthermore, the login modal will contain the state necessary for
  //     logging in a user, i.e. username/password, and it can

  // if a user is logged in
  // then this should fire the log out action creator.
}

  handleSearch = () => {
    if (this.state.toggleSearchModal) {
      this.setState({
        toggleSearchModal: null
      });
    }
    this.clearResults();
  };

  clearResults = () => {
    this.setState({ searchResults: [] });
  };
handleLogoutClick = () => {
  this.props.logout()
}

  toggleModal = id => {
    this.setState({
      toggleFormModal: id
    });
  };

  handleLogoutClick = () => {
    console.log("HANDLE LOGOUT");
  };

  // this gets passed to
  fireOffLoginAction = (username, password) => {
    // This should be an action creator
    // this.props.login(username, password)
  };

  updateVideoList = videos => {
    //grab the video from props
    //use video.ref as id for that video
    //set it to the search results in the state
    this.setState({ toggleSearchModal: "searchResults" });
    videos.map(video => {
      this.setState({
        searchResults: this.state.searchResults.concat(
          this.props.videoListingState.videos[video.ref]
        )
      });
    });
  };

  render() {
    const { handleClick, handleSearch } = this;
    const { toggleFormModal, toggleSearchModal, searchResults } = this.state;
    console.log("header props", this.props);
    const { logged_in } = this.props.authenticationStatus;
    return(
      <Nav>
      <div id="headerBg">
        <SearchBar
          id="searchbar"
          updateList={this.updateVideoList}
          state={this.props.videoListingState}
        />

        <div id="logo-container">
          <Link style={{ color: "white" }} to="/">
            <Logo />
          </Link>
        </div>
        <div id="buttons">
              {logged_in? <button id={"logout"} onClick={this.handleLogoutClick}>{"Log Out"}</button>:<button id={"login"} onClick={this.handleClick}>{"Log In"}</button>}
              
              {/* <button id={!logged_in ? "login" : "logout"} onClick={logged_in? () => this.handleClick() : () => this.handleLogoutClick()}>{!logged_in ? "Log In" : "Log Out"}</button> */}
              <button id="signup" onClick={this.handleClick}>Sign Up</button>
            </div>
           
          {toggleFormModal ? (
            <Modal>
            {formRef => {
              return (
                <>
                  <BlurredBackground />
                  {toggleFormModal === "login" && (
                    <LoginForm formRef={formRef} toggleModal={handleClick} />
                  )}
                  {toggleFormModal === "signup" && (
                    <SignupForm formRef={formRef} toggleModal={handleClick} />
                  )}
                </>
              );
            }}
          </Modal>
        ) : null}
        {toggleSearchModal ? (
          <Modal>
            {formRef => {
              console.log(formRef);
              return (
                <>
                  <BlurredBackground />
                  {toggleSearchModal === "searchResults" && (
                    <SearchResultsModal
                      history={this.props.history}
                      formRef={formRef}
                      toggleModal={handleSearch}
                      searchResults={searchResults}
                    />
                  )}
                </>
              );
            }}
          </Modal>
        ) : null}
        </div>
      </Nav>
    )}
}

const mapDispatchToProps = {logout}
const Nav = styled.nav`
  #headerBg {
    display: flex;
    flex-direction: ${props => (props.col ? "column" : "row")}
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: #224259;
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
`;

export default connect(state => state, mapDispatchToProps)(Header);


