import * as React from 'react';
import { Component } from "react";
import { connect } from 'react-redux';

interface ThemeSwitchProps {
    themeColor?: string;
    onSwitchColor?: (color?: string)=> void;
}
interface ThemeSwitchStates {
    themeColor?: string;
}

class ThemeSwitch extends Component<ThemeSwitchProps,ThemeSwitchStates>{
    constructor(props,context){
      super();
      this.state={
          themeColor: ''
       };
    } 

    handleSwitchColor(color?: string) {
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color);
        }
    }

    render() {
        return <div>
            <button
                onClick={this.handleSwitchColor.bind(this, "red")}
                 style={{color: this.props.themeColor}}>Red</button>
            <button
                onClick={this.handleSwitchColor.bind(this, "blue")}
                 style={{color: this.props.themeColor}}>Blue</button>
        </div>
    }
}

const mapStateToProps = (state)=> {
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onSwitchColor: (color)=> {
            dispatch({type: "CHANGE_COLOR", themeColor: color});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)