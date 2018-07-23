import React, { Component } from 'react';


class Contact extends Component {
  

  render() {
    return (
      <div className="App">
        <h4><b>Email</b>: toshal1996@gmail.com</h4>
        <h4><b>Location</b>: Boulder, Colorado</h4>

        <div class="iconLinks">
       
			  	<a className="git" href="https://github.com/ToshalGhimire"><img style={{width: 80, height: 80}} class="Github_icon" src={require('./images/GitHub-Mark.png')} alt="Github" /></a>
				  <a href="https://www.linkedin.com/in/toshal-ghimire-799256162/"><img style={{width: 110, height: 110}} class="Linkedin_icon" src={require('./images/Linkedin-Mark.png')} alt="Linkedin"/></a>	
			</div>
      </div>
    );
  }
}

export default Contact;