import React, { Component } from 'react';
import './style/home.css'
import Item from './Item';

let appData = {
    "ME": {
      "title": 'About Me',
      "description": 'My name is Toshal Ghimire and I am a current CSCI Student at CU Boulder and will be Graduating from the University on the spring of 2019! I am someone who has a great Learning and problem-solving skills. This allows me to quickly adapt and conquer to any new challenges or ideas that your company or I am faced with. Everything that Ive worked on I have always put my best ability forwards and will always get the job done.',

      "image": 'myPhoto.jpg' 
    }
}

class HomePage extends Component {
  

  render() {
    return (
    <div className="App">
        <div class="content">  
            <br/>
            <h2 >Hello World!<br/><br/> Welcome to my portfolio!</h2>
            
            <br/>
            
            <Item data={appData.ME} left={true} bgColor="#FFFFFF"  />
            <img scr={require("./images/myPhoto.jpg")}/>
            <br/>
            <br/>
            <p className="Cgoal"><b>My career goal is to be part of a Project in the field of technology that has a POSITIVE impact on the world!</b> 
		</p>

        </div>
    </div>
    );
  }
}

export default HomePage;