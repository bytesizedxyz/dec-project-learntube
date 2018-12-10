import React from 'react'

class SignUpForm extends React.Component {
    constructor(props)
        super(props);
        this.state = {
            username: ''
        }

this.onChange = this.onChange.bind(this);
    }

const onChange =(e) => {
        this.setState({ [e.target.name]: e.target.value});
}


   render() {
       return (
           <form>
               <h1> Register for PernHub! </h1>

               <div className="SignUpForm">
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
                   <button className="btn btn-primary btn-lg">
                       Sign Up
                   </button>
               </div>                    
           </form>
       )
   }
}