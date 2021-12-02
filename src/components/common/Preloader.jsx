import React from 'react';
import css from './Preloader.module.css';
import preloader from "../../assets/img/preloader.svg";


const Preloader = () => {
    return (
        <img src={preloader}/>
    );
};

export default Preloader;