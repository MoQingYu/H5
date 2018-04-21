import * as React from 'react';
import { Component } from "react";

interface ThemeSwitchProps {}
interface ThemeSwitchStates {
    themeColor?: string;
}

export class ThemeSwitch extends Component<ThemeSwitchProps,ThemeSwitchStates>{
    constructor(props,context){
      super();
      this.state={
          themeColor: ''
       };
    } 

    static contextTypes = {
        store: React.PropTypes.any
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

    handleSwitchColor(color?: string) {
        const { store } = this.context;
        store.dispatch({
            type: 'CHANGE_COLOR',
            themeColor: color
        })
    }

    render() {
        return <div>
            <button
                onClick={this.handleSwitchColor.bind(this, "red")}
                 style={{color: this.state.themeColor}}>Red</button>
            <button
                onClick={this.handleSwitchColor.bind(this, "blue")}
                 style={{color: this.state.themeColor}}>Blue</button>
        </div>
    }
}