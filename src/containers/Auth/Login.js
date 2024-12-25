import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { handleLoginAPI } from '../../services/userService'
// import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })

        try {
            let data = await handleLoginAPI(this.state.userName, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data?.message
                })
            }

            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
            }

        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error?.response?.data?.message
                    })
                }
            }

        }
    }

    handleShowPassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {

        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-login'>Login</div>

                        <div className='col-12 form-group login-input'>
                            <label>Username</label>
                            <input onChange={(event) => { this.handleChange(event) }} name='userName' className='form-control' type='text' placeholder='Enter your username'></input>
                        </div>

                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='showPassword position-relative'>
                                <input onChange={(event) => { this.handleChange(event) }} name='password' className='form-control' type={`${this.state.isShowPassword ? 'text' : 'password'}`} placeholder='Enter your password'></input>
                                <i onClick={() => { this.handleShowPassword() }} className={`position-absolute ${this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}`}></i>
                            </div>
                            <div className='col-12 text-danger'>  {this.state.errMessage} </div>
                        </div>

                        <div className='col-12'>
                            <button onClick={() => { this.handleLogin() }} className='btn-login'>Login</button>
                        </div>

                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password</span>
                        </div>

                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login '>Or login with</span>
                        </div>

                        <div className='col-12 social-login'>
                            <i className='fab fa-google-plus-g google'></i>
                            <i className='fab fa-facebook-f facebook'></i>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        // adminLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
