import * as React from 'react';
import { Component } from "react";

interface TitleProps {
    color?: string;
}
interface TitleState {}

export class Title extends Component<TitleProps, TitleState> {

    setElementStyle() {
        const { color } = this.props;
        return {
            style: {
                color
            }
        }
    }

    render() {
        const { style } = this.setElementStyle();
        return <h1 {...style}>Hello Wold</h1>
    }
}