import React from 'react';
import {connect} from 'react-redux';
import {login} from '../state/actions/auth'
import { AboveModalContainer } from '../shared-styles'
import Form from '../shared-components/fun-components/form'
import Icon from '../resources/icon'

class LoginForm extends React.Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      submitted: false,
      validationErrorMsg: null
    }

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    const {name, value} = e.target;

    this.setState({ [name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  };

  render() {
    const { login, formRef, toggleModal } = this.props;
    console.log(this.props);
    const { username, password, submitted, validationErrorMsg } = this.state;
    return (
      <AboveModalContainer ref={this.props.formRef}>
        <div>
          <span>
            <h3 data-testid="header-one">Login</h3>
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
                defaultValue={this.state.username}
                onChange={this.handleChange}
                type="text"
                name="username"
                className="form-conrol"
            />
            <label className="control-label"> Password </label>
            <input
                defaultValue={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                className="form-conrol"
            />
            <button className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
        </Form>
      </AboveModalContainer>
    );
  }
}

const mapDispatchToProps ={
login
}

export default connect(
  state => state,
  mapDispatchToProps
)(LoginForm);

//still trying to figure this out ^
//dispatch is an event
