import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={css.header}>
            <div className={css.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Header;
