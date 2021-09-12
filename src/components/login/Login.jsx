import React from 'react';
import css from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators/validators";


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
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

export default Login;
