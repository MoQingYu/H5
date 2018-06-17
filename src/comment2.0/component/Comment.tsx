import * as React from 'react';
import { Component } from "react";

interface CommentProps {
    comment?: any;
    onDelete?: (index)=> void;
    index?: number;
}
interface CommentStates {
    timeStr?: string;
}

export class Comment extends Component<CommentProps,CommentStates>{
    timer?: any;
    constructor(props,context){
      super();
      this.state={
          timeStr: ""
      };
    }

    componentWillMount() {
        this.updateTimeString();
        this.timer = setInterval(this.updateTimeString.bind(this), 50000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    private updateTimeString() {
        const { comment } = this.props;
        const duration = (+Date.now() - comment.createdTime) / 1000;
        this.setState({
            timeStr: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleDeletComment() {
        const { index, onDelete } = this.props;
        if(onDelete) {
            onDelete(index);
        }
    }

    render() {
        const { comment } = this.props;
        const { timeStr } = this.state;
        return <div className="comment">
            <div>
                <span>{comment.userName}</span>
            </div>&nbsp;:&nbsp;
            <p>
                {comment.content}
            </p>
            <span>{timeStr}</span>
            <span 
                style={{
                    color: "#38A3D2", 
                    cursor: "pointer"}}
                    onClick={this.handleDeletComment.bind(this)}>删除</span>
        </div>
    }
}