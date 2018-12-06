import React from 'react'

class SignUpForm extends React.Component {
    constructor(props)
    super(props);
    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        email: ''
    }

this.onChange = this.onChange.bind(this);
this.onSubmit = this.onSubmit.bind(this);
}

const onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
}


    render() {
       return (
           <form onSubmit={this.onSubmit}>
               <h1> Register for PernHub! </h1>

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
                   <button className="btn btn-primary btn-lg">
                       Sign Up
                   </button>
               </div>                    
           </form>
           <router>
               <SignUpPage path="/signup" />
           </router>
       )
   }
};