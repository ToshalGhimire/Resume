import React, { Component } from 'react';
//import './style/projects.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Projectnode from './projects';
import Item from './Item'


let cppDISC = 'C++ sandbox is a combined repository programs created by me. The repository includes things such as, Unit tests, OOP design patterns, GUI development and general programing techniques. Although everything here is done on C++, I could easly reproduce this in the other core langauages that I know ';
let lifeDISC = 'For my first GUI project I created the Conways Game of Life using QT Creator. Additional features includes rolling a dice, simulation speed slider and a controllable red tile.';
let originalGameDISC = 'Using the board game settlers of catan as inspirations, I created an original board game that incoroprates original creature cards designs, game economics,  movements, and combat. This was created on QT cretor using OOP concepts and design patterns.'
let CCDISC = 'This was a web app created for a class project. It querys user input to display the early and mid careear salary for all college majors. This site is no longer active, but the github repository still exists.';
let dataDISC = 'Homework assignments from Data Science class that shows me using the full potential of python to do data analysis. Content includes: Cleaning and analyzing data, Data visualizations, Probability theory, Estimate data given sample data, Hypothesis testing, Diagnostics of simple linear, multilinear, and logistic regression models. '; 


let appData = {
  "NFL": {
    "title": 'NFL TEAMS APP',
    "description": 'I love NFL and fantasy football. I wanted an easier way to get live team stats, current roster, leauge news and injury updates. So I built an app for andriod that does just this. Beacuse of the NFL\'s strict copyright laws, there is no public API for the data, so I had to create my own and use it to automaticly update the app with the latest information from the leauge. Dynamic web Scraping tools, AWS live servers, Firebase are some of the tools used build this app.',
    "image": 'nflTeams.gif' 
  },
  "RooMates": {
    "title": 'RooMates APP (coming soon)',
    "description": 'RooMates is a personal start-up that I am a founder of. It is currently in the very early stages. The app is designed to be used by roomates who desrie to be more organized in their current living situation',
    "image": 'Home.png',
    "link": "http://roomate.us/landing-page/"
    
  },

  
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  div:{
    padding: "20px",
    margin: "20px"
  }
});

var divStyle = {
    padding: "20px",
    textAlign: "flex"

   
  };

function newProjects(props) {
  const { classes } = props;

  return (
    <div style={divStyle} className="App">

      <Item data={appData.NFL} left={true} bgColor="#FFFFFF"  />
      <p> Disclaimer: This app is for personal use and no profit is made from it. <a href="https://github.com/ToshalGhimire/DepthChart" >Click here </a> to view github repo</p>
      <br/>
      <br/>

      <hr/>
      <br/>
      <br/>

      <Item data={appData.RooMates} left={false} bgColor="#FFFFFF"  />
      <p><a href="http://roomate.us/landing-page/" >Click here </a> for the landing page (built by me) </p>
      <br/>


      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>
          
            <h2 class="project-title">c++ sandbox</h2>
			      <a href="https://github.com/ToshalGhimire/CPP-Sandbox" ><img id="cpp_logo" src={require("./images/cpp_logo.png")} alt=""/></a>
            <br/>
            <Paper elevation={5} className={classes.paper}>

                <p margin-top="200px" class="project-title">{cppDISC}</p>
            </Paper>

          
          </Paper>
        </Grid>

      

        <Grid item xs>
          <Paper className={classes.paper}>
          
            <h2 class="project-title">Data Science Work</h2>
			<a href="https://github.com/ToshalGhimire/CSCI3302/tree/master/csci3022/hmwk"><img id="data_image" src={require("./images/data_logo.png")} alt="" /></a>
            <br/><br/>
            <Paper elevation={5} className={classes.paper}>

                <p class="project-title">{dataDISC}</p>
            </Paper>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h2 class="project-title">Original Board Game</h2>
			<a href="https://github.com/ToshalGhimire/GameDesignProject/tree/master/FinalProject"><img id="originalGame_picture" src={require("./images/originalGame.PNG")} alt="" /></a>
            <br/>
            <Paper elevation={5} className={classes.paper}>

                <p class="project-title">{originalGameDISC}</p>
            </Paper>

          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <h2 class="project-title">College Crusaders</h2>
			<a href="https://github.com/TaylorJesse/CSCI3308CollegeCrusaders"><img id="CollegeCrusaders" src={require("./images/college_crusaders.PNG")} alt="" /></a>
            <br/><br/>
            <Paper elevation={5} className={classes.paper}>

                <p class="project-title">{CCDISC}</p>
            </Paper>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>
                <h2 class="project-title">Conays game of life</h2>
			<a href="https://github.com/ToshalGhimire/CPP-Sandbox/tree/master/QT-ConwaysGameOfLife" ><img id="life_gif" src="https://media.giphy.com/media/1kTU2QbRpDRYcNYmu3/giphy.gif" alt=""/></a>
            <br/>
            <Paper elevation={5} className={classes.paper}>

                <p class="project-title">{lifeDISC}</p>
            </Paper>

          </Paper>
        </Grid>
      </Grid>

      <br/>
      <br/>

      <Paper elevation={5} className={classes.paper}>
      <p><b>More projects coming soon... </b> </p>
      <br/>
      <p> Currently working on using reinforcement learning to train AI to play an atari game, a personal startup called RooMate and have alot of machine learning models and work that im waiting to share.</p>
      <br/>
      <p> All these new projects will be added at the end of the current semester. (Fall 2018) </p>

      </Paper>


    </div>
  );
}

newProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(newProjects);

