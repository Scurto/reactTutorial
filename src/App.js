import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navigation from './components/nav/Navigation';
import {Route} from "react-router-dom";
import Login from "./components/news/Login";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/news/LoginContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer></HeaderContainer>
            <Navigation/>
            {/*<Route path='/profile/' component={Profile}/>*/}
            {/*<Route exact path='/dialogs/' component={Dialogs}/>*/}
            {/*<Route path='/dialogs/' component={Dialogs}/>*/}

            <Route path='/dialogs/' render = {
                () => <DialogsContainer />
            }/>
            <Route path='/profile/:userId?' render={
                () => <ProfileContainer />
            }/>
            <Route path='/users/' render = {
                () => <UsersContainer />
            }/>
            <Route path='/login' render = {
                () => <LoginContainer />
            }/>
            <Route path='/news/' component={Login}/>
            <Footer></Footer>
        </div>
    );
};

export default App;
