import React from "react";
import { connect } from "react-redux";
import { signup } from "../../state/actions/auth";
import Form from "../fun-components/form";

class SignUpPage extends React.Component {
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

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { signup } = this.props;
    const { username, password, email, submitted } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <h1> Register for LearnTube! </h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            data-test-id="username"
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
            data-test-id="password"
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
            data-test-id="passwordConfirm"
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
            data-test-id="email"
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
      </Form>
    );
  }
}

const mapDispatchToProps = () => {
  return { signup };
};

const SignUpPage = connect(
  state => state,
  mapDispatchToProps
)(SignUpPage);

export default SignUpPage;
