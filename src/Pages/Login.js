import React, { Component, PropTypes } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { login } from '../reducer';
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <div>
        <div className="row">
        <div className="col-xs-6 col-md-4"></div>
        <div className="col-xs-6 col-md-4"><div>
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">User Name</label>
              <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
            </div>
           
            <button type="button" className="btn btn-default" onClick={this.onSubmit}>Submit</button>
            <div className="message">
              { isLoginPending && <div>Please wait...</div> }
              { isLoginSuccess && <div>Success. <Redirect push to="/home" /></div> }
              { loginError && <div>{loginError.message}</div> }
            </div>
          </form>
        </div></div>
        <div className="col-xs-6 col-md-4"></div>
      	</div>
      </div>
    );
  }
  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }

}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
