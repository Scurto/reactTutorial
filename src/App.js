import React, {Suspense} from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navigation from './components/nav/Navigation';
import {Route} from "react-router-dom";
import Login from "./components/login/Login";
// import DialogsContainer from "./components/dialogs/DialogsContainer";
// import ProfileContainer from "./components/profile/ProfileContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader";

const DialogsContainer = React.lazy(() => import("./components/dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader></Preloader>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer></HeaderContainer>
                <Navigation/>

                <Route path='/dialogs/' render={
                    () => {
                        return <Suspense fallback={<div>Loading...</div>}>
                            <DialogsContainer/>
                        </Suspense>
                    }
                }/>
                <Route path='/profile/:userId?' render={
                    () => {
                    return <Suspense fallback={<div>Loading...</div>}>
                        <ProfileContainer/>
                    </Suspense>
                }
                }/>
                <Route path='/users/' render={
                    () => <UsersContainer/>
                }/>
                <Route path='/login' render={
                    () => <LoginContainer/>
                }/>
                <Route path='/news/' component={Login}/>
                <Footer></Footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App);
