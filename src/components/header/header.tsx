import * as React from 'react';
import { Component } from "react";

interface VWHeaderProps {}
interface VWHeaderStates {}

export class VWHeader extends Component<VWHeaderProps, VWHeaderStates>{
 constructor(props, context) {
  super();
  this.state = {};
 }

 render() {
  return <div className="vw-header">
     <div className="vw-logo">
      <img src="http://www.runoob.com/wp-content/uploads/2016/02/react.png" />
      <span>REACT-DEMO</span>
     </div>
     <div className="vw-sign">
      <a href="/">Sign in</a>
      <span>|</span>
      <a href="/">Sign up</a>
     </div>
    </div>
 }
}