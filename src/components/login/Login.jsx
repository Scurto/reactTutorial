import React from 'react';
import css from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.login, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}></Redirect>
    }

    return (
        <div className={css.content}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit }></LoginReduxForm>
        </div>
    );
};
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} validate={[required]} component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
            </div>
            <div>
                <button type={"submit"}>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'loginForm'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout})(Login);
