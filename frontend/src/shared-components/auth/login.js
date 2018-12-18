import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../state/actions/auth';
import { Link } from 'react-router';
import Form from '../fun-components/form';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    //resets login status

    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }

  componentDidMount = () => this.props.logout();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  };

  render() {
    const { login } = this.props;
    const { username, password, submitted } = this.state;
    return (
        <Form>
            <div className="form-group">
                <label className="control-label"> Username </label>
                <input
                data-test-id='username'
                value={this.state.username}
                handleChange={this.handleChange}
                type="text"
                name="username"
                className="form-conrol"
                />
            </div>
            <div className="form-group">
                <label className="control-label"> Password </label>
                <input
                data-test-id='password'
                value={this.state.password}
                handleChange={this.handleChange}
                type="password"
                name="password"
                className="form-conrol"
                />
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
            </div>
            <div>
                <Link to="/signup" className="btn btn-link">Signup</Link>
            </div>
        </Form>
    )
  }
}

const mapDispatchToProps = {login, logout };




export default connect(state => state, mapDispatchToProps)(LoginPage);
