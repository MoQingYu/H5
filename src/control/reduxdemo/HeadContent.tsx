import * as React from 'react';
import { Component } from "react";
import { ThemeSwitch } from './ThemeSwitch';
import { connect } from '../purecomponent/connect'

interface HeadContentProps {
}
interface HeadContentStates {
    themeColor?: ''
}

class HeadContent extends Component<HeadContentProps,HeadContentStates>{
    static contextTypes = {
        store: React.PropTypes.any
      }

    constructor(props,context){
      super();
      this.state={
        themeColor: ''
      };
    } 

    componentWillMount() {
        const { store } = this.context;
        this.updateThemeColor()
        store.subscribe(()=> this.updateThemeColor());
    }

    private updateThemeColor() {
        const { store } = this.context;
        const state = store.getState();
        this.setState({themeColor: state.themeColor})
    }



    render() {
        return <div>
            <h1 style={{color: this.state.themeColor}}>Hello World</h1>
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