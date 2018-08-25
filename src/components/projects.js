import React, { Component } from 'react';
import './style/projects.css'

let cppDISC = 'C++ sandbox is a combined repository of bunch of programs created by me. The repository includes things such as, Unit tests, OOP design patterns, GUI development and general programing techniques. Although everything here is done on C++, I could easly reproduce this in the other core langauages that i know ';
let lifeDISC = 'For my first GUI project I created the Conways Game of Life using QT Creator. Additional features includes rolling a dice, simulation speed slider and a controllable red tile.';
let originalGameDISC = 'Using the board game settlers of catan as inspirations, I created an original board game that incoroprates original creature cards designs, game economics,  movements, and combat. This was created on QT cretor using OOP concepts and design patterns.'
let CCDISC = 'This was a past web app created for a class project. It querys user input to display the early and mid careear salary for all college majors. This site is no longer active, but the github repository still exists.';
let dataDISC = 'Assignments from a Data Science class that shows me using the full potential of python to do data analysis. Content includes: Cleaning and analyzing data, Data visualizations, Probability theory, Estimate data given sample data, Hypothesis testing, Diagnostics of simple linear, multilinear, and logistic regression models. '; 


class Projectnode extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <p class="speech-bubble">{this.props.discription} </p>
      </div>
    );
  }
}


class Projects extends Component {
  

  render() {
    return (
      <div className="App">
      <h2 class="project-title">c++ sandbox</h2>
			<a href="https://github.com/ToshalGhimire/CPP-Sandbox" ><img id="cpp_logo" src={require("./images/cpp_logo.png")} alt=""/></a>
       <Projectnode  discription={cppDISC} />
       <hr/><br/>

      <h2 class="project-title">Conway's game of life</h2>
			<a href="https://github.com/ToshalGhimire/CPP-Sandbox/tree/master/QT-ConwaysGameOfLife" ><img id="life_gif" src="https://media.giphy.com/media/1kTU2QbRpDRYcNYmu3/giphy.gif" alt=""/></a>
       <Projectnode  discription={lifeDISC}/>
       <hr/><br/>

      <h2 class="project-title">Original Board Game</h2>
			<a href="https://github.com/ToshalGhimire/GameDesignProject/tree/master/FinalProject"><img id="originalGame_picture" src={require("./images/originalGame.PNG")} alt="" /></a>
      <Projectnode  discription={originalGameDISC} />
       <hr/><br/>

      <h2 class="project-title">College Crusaders</h2>
			<a href="https://github.com/TaylorJesse/CSCI3308CollegeCrusaders"><img id="CollegeCrusaders" src={require("./images/college_crusaders.PNG")} alt="" /></a>
      <Projectnode  discription={CCDISC}/>
      <hr/><br/>

      <h2 class="project-title">Data Science Work</h2>
			<a href="https://github.com/ToshalGhimire/CSCI3302/tree/master/csci3022/hmwk"><img id="data_image" src={require("./images/data_logo.png")} alt="" /></a>
      <Projectnode  discription={dataDISC}/>
      <hr/><br/>

	
      
      <h3> More Projects Coming Soon...</h3>
      </div>
    );
  }
}

export default Projects;