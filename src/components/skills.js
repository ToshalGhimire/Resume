import React, { Component } from 'react';
import './style/skills.css';
import {ListGroupItem} from 'react-bootstrap'


class Skills extends Component {
  

  render() {
    return (
      <div className="App">
        <h3 className="skillIntro">Everything listed below was learned from the computer science program at the University of Colorado in Boulder as well as resources found on the Internet. </h3>

        <hr/>
        <h2 id="title"><b>Programing Languages</b></h2>
        <div id="languages">
          
          <ol>
            <br/>
            <h3 id="subTitle"><b>Core languages</b></h3>
            <ListGroupItem>C/C++</ListGroupItem>
            <ListGroupItem>Python </ListGroupItem>
            <ListGroupItem>Java</ListGroupItem>

            <br/>
            <h3><b>Other Languages</b></h3>

            <ListGroupItem>C#</ListGroupItem>
            <ListGroupItem>JavaScript</ListGroupItem>
            <ListGroupItem>HTML/CSS</ListGroupItem>
            <ListGroupItem>XML</ListGroupItem>
            <ListGroupItem>SQL</ListGroupItem>
            
            
         </ol>

        
         </div>
         <hr/>
          <h2 id="title"><b>Known Skills</b></h2>
        <div id="Skills">
          
          <ul >
            <ListGroupItem>- Version Control</ListGroupItem>
            <ListGroupItem>- Unit Testing</ListGroupItem>
            <ListGroupItem>- Unix/Linux Environments</ListGroupItem>
            <ListGroupItem>- Object Oriented Programming and Design</ListGroupItem>
            <ListGroupItem>- Android App Development</ListGroupItem>
            <ListGroupItem>- Desktop GUI Development With QT </ListGroupItem>
            <ListGroupItem>- Web App Development with React</ListGroupItem>            
            <ListGroupItem>- Data Analysis/Data Mining with Python</ListGroupItem>
            <ListGroupItem>- Video and Photo editing with Photoshop and Sony Vegas</ListGroupItem>

          </ul>
          
          
        </div>
        <hr/>
        <h2 id="title"><b>College Computer Science Courses</b></h2>
        <div id="Classes">
          
          <ul >
            <br/>
            <h3><b>Completed</b></h3>

            <ListGroupItem>Data Structure</ListGroupItem>
            <ListGroupItem>Computer System</ListGroupItem>
            <ListGroupItem>Algorithms</ListGroupItem>
            <ListGroupItem>Linear Algebra</ListGroupItem>
            <ListGroupItem>Data Science</ListGroupItem>
            <ListGroupItem>Data Mining</ListGroupItem>
            <ListGroupItem>Game Design Workshop</ListGroupItem>            
            <ListGroupItem>Operating Systems</ListGroupItem>
            <ListGroupItem>Database and Information System</ListGroupItem>
            <ListGroupItem>Principles and Practices of Programing Langugages</ListGroupItem>
            <ListGroupItem>Software Development Methods and tools</ListGroupItem>
            <ListGroupItem>Programing Project Workshop</ListGroupItem>

            <br/>
            <h3><b>Curently enrolled </b></h3>
            <ListGroupItem>Senior Capstone: Entrepreneurial Projects</ListGroupItem>
            <ListGroupItem>Object-Oriented Anlysis/Design</ListGroupItem>

          </ul>
          
          
        </div>
      </div>
    );
  }
}

export default Skills;


/*


<ul>
            <h6><b>Known Langugages</b></h6>        
            <li className="lang">C#</li>
            <li className="lang">Scala</li>
            <li>Kotlin</li>
            <li>SQL</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>HTML/CSS</li>
            <li>XML</li>
		      </ul>


*/