import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import Navigation from './components/nav/Navigation';
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/news/News";

const App = (props) => {

    // debugger;

    return (
        <div className="app-wrapper">
            <Header></Header>
            <Navigation/>
            {/*<Route path='/profile/' component={Profile}/>*/}
            {/*<Route exact path='/dialogs/' component={Dialogs}/>*/}
            {/*<Route path='/dialogs/' component={Dialogs}/>*/}
            <Route path='/profile/'
                   render={() => <Profile posts={props.state.profilePage.posts}
                                          newPostText={props.state.profilePage.newPostText}
                                          addPost={props.addPost}
                                          updateNewPostText={props.updateNewPostText}
                   />}
            />
            <Route path='/dialogs/' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogsData}
                                                           messages={props.state.dialogsPage.messagesData}/>}/>
            <Route path='/news/' component={News}/>
            <Footer></Footer>
        </div>
    );
};

export default App;
