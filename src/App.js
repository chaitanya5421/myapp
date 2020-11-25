import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Great from "./components/Great";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/messages";
import Counter from "./components/Counter";
import FunctionClick from "./components/functionclick";
import ClassClick from "./components/classClick";
import EventBind from "./components//eventBind";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Great name="bruce" heroname="batman">
         <p>this is children</p>
       </Great>
       <Great name="clarck" heroname="superman"/>
       <Great name="dyana" heroname="wonder women"/>

       <Welcome/> */}
        {/* 
       <Message></Message> */}

        {/* <Counter /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick></ClassClick> */}
        {/* <EventBind /> */}
        <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter>
      </div>
    );
  }
}

export default App;
