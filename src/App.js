import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Navigation from './components/nav/Navigation';
import {Route} from "react-router-dom";
import News from "./components/news/News";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import PostsContainer from "./components/profile/posts/PostsContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header></Header>
            <Navigation/>
            {/*<Route path='/profile/' component={Profile}/>*/}
            {/*<Route exact path='/dialogs/' component={Dialogs}/>*/}
            {/*<Route path='/dialogs/' component={Dialogs}/>*/}
            <Route path='/profile/' render={
                () => <PostsContainer />
            }/>
            <Route path='/dialogs/' render = {
                () => <DialogsContainer />
            }/>
            <Route path='/news/' component={News}/>
            <Footer></Footer>
        </div>
    );
};

export default App;
