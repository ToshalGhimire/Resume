import React, { Component } from 'react';
//import styleCSS from "./style.css"




const imageStyle = {
  
  maxWidth: '90%',
  maxHeight: '90%'
}





class Item extends Component {

  constructor(props) {
    
    
    super(props);
    this.state = {
      imageIsLeft: props.left,
      themeColor: props.bgColor,
      div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        padding: "20px"
      },
      innerDiv: {
        width: '50%',
        marginLeft:'2%',
        marginRight: '2%',
        display: "inline",
        padding: '20px',
        color: '#333',
        textAlign: 'right'
        
      }

    };
    
    this.state.div["backgroundColor"] = this.state.themeColor;
   
    if(this.props.left === true){
      this.state.innerDiv["textAlign"] = "left";
      this.state.innerDiv["marginLeft"] = "0";


    }else{
      this.state.innerDiv["textAlign"] = "right";

    }


    
 }

 
    render() {
      if( this.state.imageIsLeft === true){
        // Place image on left
        return (
          <div style={this.state.div}>
          <img style={imageStyle} src={require("./images/" + this.props.data.image)} alt=""/>
            <div style={this.state.innerDiv}>
              <h1><strong>{this.props.data.title}</strong></h1>
              <p>
              {this.props.data.description}   
              </p>
            </div>
        </div>
        )
      }else{
        // Image is on the right
        return (
          <div style={this.state.div}>
            <div style={this.state.innerDiv}>
              <h1><strong>{this.props.data.title}</strong></h1>
              <p>
              {this.props.data.description}   
              </p>
            </div>
            <img style={imageStyle} src={require("./images/" + this.props.data.image)} alt="" />
        </div>
        )
      }
      
    }
}

export default Item;