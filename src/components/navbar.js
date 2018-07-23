import React, { Component } from 'react';
import './style/navbar.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from './home';
import Contact from './contact';
import Skills from './skills';
import Projects from './projects';





class Nav extends Component {
  

  render() {
    return (
        <div id="Menu">
            <Router>
                <div>
                    <div className="bar">
                        <nav className="navbar" id="navbarList" >
                            <ul id="nli"> 
                            <Link to={"/home"} > <li>Home</li></Link>
                            <Link to={"/projects"}> <li>Projects</li></Link>
                            <Link to={"/skills"} > <li>Skills</li></Link>
                            <Link to={"/contact"}> <li>Contact</li></Link>
                            </ul>
                        </nav>
                    </div>

                    <Switch>
                        <Route path='/home' component={HomePage}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/skills' component={Skills}/>
                        <Route path='/projects' component={Projects}/>

                    </Switch>
                    
                    
                </div>
            </Router>
      </div>
      
    );
  }
}


export default Nav;


/*


 <div id="Menu">
            <Button >Primary</Button>            
            <div className="bar">
                <nav class="navbar" id="navbarList" >
                    <ul >
                        
                        <a href="index.html" class="active"><li>Home</li></a>
                        <a href="projects.html" ><li>Projects</li></a>
                        <a href="WhatIKnow.html"><li>Skills</li></a>
                        <a href="contact.html"><li>Contact</li></a>
                    </ul>
                </nav>
            </div>
      </div>
      
      */