import React, { Component } from 'react';
import './App.css'
import Nav from './components/navbar'



class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="Headertext">Toshal Ghimire</h3>
          <h1 className="sub">Software Developer</h1>
          
        </header>
        <body>
        <Nav/> 

        <div className="MyBody">
       
        </div>   

            
        
        </body>
        
      </div>
    );
  }
}

export default App;

/* 

<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>

*/