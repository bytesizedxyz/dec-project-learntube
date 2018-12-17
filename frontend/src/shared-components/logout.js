import React from 'react';
import {connect} from 'react-redux';
import {login, logout} from '../state/actions/auth'
import { AboveModalContainer } from '../shared-styles'
import Form from '../shared-components/fun-components/form'
import Icon from '../resources/icon'

class LogoutForm extends React.Component {
  state = {
    username: '',
    password: '',
    submitted: false,
    validationErrorMsg: null
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
    const { login, formRef, toggleModal } = this.props;
    const { username, password, submitted, validationErrorMsg } = this.state
    return (
        <AboveModalContainer ref={this.props.formRef}>
        <div>
          <span>
          <h3 data-testid="header-one">Log</h3>
            {validationErrorMsg ? (
              <p data-testid="validation-err-msg">{validationErrorMsg}</p>
            ) : null}
          </span>
          <span onClick={toggleModal}>
            <Icon name="close icon" />
          </span>
        </div>
        <Form>
            <label className="control-label"> Username </label>
            <input
                value={this.state.username}
                handleChange={this.handleChange}
                type="text"
                name="username"
                className="form-conrol"
            />
            <label className="control-label"> Password </label>
            <input
                value={this.state.password}
                handleChange={this.handleChange}
                type="password"
                name="password"
                className="form-conrol"
            />
            <button className="btn btn-primary">Login</button>
        </Form>
        </AboveModalContainer>
    )
  }
};

const mapDispatchToProps = () => {
    return {login, logout}
}

export default connect(state => state, mapDispatchToProps)(LogoutForm)

//still trying to figure this out ^
//dispatch is an event