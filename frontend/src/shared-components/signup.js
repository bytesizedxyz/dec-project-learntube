import React from "react";
import { connect } from "react-redux";
import { signup } from "../state/actions/auth";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      email: ""
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
    const { signup } = this.props;
    const { username, password, email, submitted } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1> Register for LearnTube! </h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Confirm Password</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label">Email Address</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign Up</button>
        </div>
        <div>
          <SignUpPage path="/signup" />
        </div>
      </form>
    );
  }
}

const SignUpPage = connect(
  state => state,
  { signup }
)(SignUp);

export default SignUpPage;
