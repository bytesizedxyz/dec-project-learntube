import React from 'react';
import {connect} from 'react-redux';
import {login, logout} from '../state/actions/auth'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    submitted: false
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true})
    const { username, password } = this.state;
    if (username && password) {
        this.props.login(username, password);
    }
  }

  render() {
    const { login } = this.props;
    const { username, password, submitted } = this.state
    return (
        <form handleSubmit={this.handleSubmit}>
            <div className="form-group">
                <label className="control-label"> Username </label>
                <input
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
                value={this.state.password}
                handleChange={this.handleChange}
                type="password"
                name="password"
                className="form-conrol"
                />
            </div>
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
            </div>
        </form>
    )
  }
};

const mapDispatchToProps = () => {
    return {login, logout}
}

export default connect(state => state, mapDispatchToProps)(LoginForm)

//still trying to figure this out ^
//dispatch is an event