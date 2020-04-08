import React from 'react';
import css from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={css.navigation}>
            <div className={css.item}>
                <NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" activeClassName={css.activeLink}>Dialogs</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
            </div>
        </div>
    );
};

export default Navigation;
