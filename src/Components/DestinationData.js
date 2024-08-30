import React, { Component } from "react";
// import Mountain1 from "../Assets/1.jpg"
// import Mountain2 from "../Assets/2.jpg"
// import Mountain3 from "../Assets/11.png"
// import Mountain4 from "../Assets/12.jpg"
import "./DestinationStyles.css";

export default class DestinationData extends Component {
  render() {
    return (
        <div className={this.props.className}>
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>
            {this.props.text}    
            </p>
        </div>
        <div className="image">
            <img alt="img" src ={this.props.img1}/>
            <img alt="img" src ={this.props.img2}/>
        </div>
     </div>  
    )
  }
}
