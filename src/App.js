import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import Navigation from './components/nav/Navigation';

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

const App = () => {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <Navigation></Navigation>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  );
}

export default App;
