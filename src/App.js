import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import Navigation from './components/nav/Navigation';
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = (props) => {

    // debugger;

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header></Header>
                <Navigation/>
                {/*<Route path='/profile/' component={Profile}/>*/}
                {/*<Route exact path='/dialogs/' component={Dialogs}/>*/}
                {/*<Route path='/dialogs/' component={Dialogs}/>*/}
                <Route path='/profile/' render={() => <Profile posts={props.posts}/>}/>
                <Route path='/dialogs/' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                <Route path='/news/' component={News}/>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    );
};

export default App;
