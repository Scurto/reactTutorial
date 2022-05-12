import React, {Suspense} from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navigation from './components/nav/Navigation';
import {Route, Switch} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader";
import News from "./components/news/News";
import LoginContainer from "./components/login/LoginContainer";

const DialogsContainer = React.lazy(() => import("./components/dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"));

class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent)=> {
        alert('some error occured');
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }


    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer></HeaderContainer>
                <Navigation/>

                <Suspense fallback={<Preloader />}>
                    <Switch>
                        <Route exact path='/dialogs' component={DialogsContainer} />
                        <Route exact path='/profile/:userId?' component={ProfileContainer} />
                        <Route exact path='/users' component={UsersContainer} />
                        <Route exact path='/login' component={LoginContainer} />
                        <Route exact path='/news' component={News} />
                        <Route path='*' render={ () => <div>404 NOT FOUND</div> } />
                    </Switch>
                </Suspense>
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
