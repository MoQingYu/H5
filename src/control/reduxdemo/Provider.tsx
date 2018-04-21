import * as React from "react";
import { Component } from 'react';

interface ProviderProps {
    store?: any;
    children?: any;
}
interface ProviderState {}

export class Provider extends Component<ProviderProps, ProviderState> {
    constructor(props,context){
        super();

    }

    static childContextTypes = {
        store: React.PropTypes.object
    }

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return <div>{this.props.children}</div>
    }
}