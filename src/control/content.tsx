import * as React from 'react';
import { Component } from "react";
import { CommentApp } from '../comment2.0/containers/CommentApp';
import HeadContent from './reduxdemo/HeadContent';
import { Provider } from 'react-redux';
import { store } from '../redux/redux-demo';
import { store as comment2 } from '../redux/reducer';

interface ContentPageProps {
}
interface ContentPageStates {
}

export class ContentPage extends Component<ContentPageProps,ContentPageStates>{ 
    constructor(props, context){
      super();
      this.state={
      };
    } 

    render() {
        return <div className="content"> 
                <h1>Hello World</h1>
                <Provider store={comment2}>
                    <CommentApp />
                </Provider>
                <Provider store={store}>
                    <HeadContent />
                </Provider>
            </div>
    }
}