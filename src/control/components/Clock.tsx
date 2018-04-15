import * as React from 'react';
import { Component } from 'react';

interface ClockProps {

}

interface ClockState {
    date?: any;
    content?: string;
}

export class Clock extends Component<ClockProps, ClockState> {
    timer?: any;
    constructor(props, context){
        super();
        this.state = {
            date: new Date(),
             content: "<h1>你好啊</h1>"
        }
        console.log("constructor");
    }

    componentWillMount() {
        // this.timer = setInterval(()=>{
        //     this.setState({date: new Date()})
        // })
        console.log("componentWillMount");
    }
    
    // componentDidUpdate() {
    //     console.log("componentDidUpdate")
    // }

    // componentWillReceiveProps() {
    //     console.log("componentWillReceiveProps")
    // }
 
    // componentWillUpdate() {
    //     console.log("componentWillReceiveProps")
    // }

    // componentDidMount() {
    //     console.log("componentDidMount");
    // }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timer);
    }

    render() {
        console.log("render");
        const { date, content } = this.state;
        return <div>
            <h1>
                <p>现在时间是：</p>
                {date.toLocaleTimeString()}
            </h1>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
    }
 }