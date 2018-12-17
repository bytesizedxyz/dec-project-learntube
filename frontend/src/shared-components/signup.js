import React from 'react';
import {connect} from 'react-redux';
import { signup } from "../state/actions/auth";
import { AboveModalContainer } from '../shared-styles'
import Form from '../shared-components/fun-components/form'
import Icon from '../resources/icon'

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      email: "",
      validationErrorMsg: null
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => this.props.signup();

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  onSubmit(e) {
    this.setState();
    //send a sign up request later
  }

  render() {
    const { signup, toggleModal } = this.props;
    const { username, password, email, submitted, validationErrorMsg } = this.state;
    return (
        <AboveModalContainer ref={this.props.formRef}>
        <div>
          <span>
          <h3 data-testid="header-one">Sign Up</h3>
            {validationErrorMsg ? (
              <p data-testid="validation-err-msg">{validationErrorMsg}</p>
            ) : null}
          </span>
          <span onClick={toggleModal}>
            <Icon name="close icon" />
          </span>
        </div>
        <Form>
        <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
          <label className="control-label">Confirm Password</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className="form-control"
          />
          <label className="control-label">Email Address</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
          <button className="btn btn-primary btn-lg">Sign Up</button>
        </Form>
        </AboveModalContainer>
    );
  }
}

const SignUpPage = connect(
  state => state,
  { signup }
)(SignUp);

export default SignUpPage;

//still trying to figure this out ^
//dispatch is an event