import React, { Component } from "react";
import TODOLIST from "./view/todolist/App.jsx";
// import {KFButton} from 'kf-component/dist/bundle.js'
const logo = new URL("./images/login.png", import.meta.url);
const styleClass = {
	fff:{
		color:'red'
	}
}
export default class App extends Component {
	constructor(props) {
	  super(props)
	
	}
  render() {
    return (
      <>
        <div>react without create-react-app</div>
				<TODOLIST></TODOLIST>


      </>
    );
  }
}


