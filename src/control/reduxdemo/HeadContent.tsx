import * as React from 'react';
import { Component } from "react";
import ThemeSwitch from './ThemeSwitch';
import { connect } from 'react-redux';

interface HeadContentProps {
    themeColor?: string;
}

interface HeadContentStates {
    themeColor?: ''
}

class HeadContent extends Component<HeadContentProps,HeadContentStates>{

    constructor(props,context){
      super();
      this.state={
      };
    } 

    render() {
        return <div>
            <h1 style={{color: this.props.themeColor}}>Hello World</h1>
            <ThemeSwitch/>
        </div> 
    }
}

const mapStateToProps = (state)=> {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps)(HeadContent);