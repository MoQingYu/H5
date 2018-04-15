import * as React from 'react';
import { Component } from "react";
import { CommentInput } from './CommentInput';
import { CommentList } from './CommentList';
import { Clock } from './Clock';

interface CommentAppProps {
    
}
interface CommentAppStates {
    comments?: Array<any>;
}

export class CommentApp extends Component<CommentAppProps,CommentAppStates>{
    constructor(props,context){
      super();
      this.state={
          comments: []
      };
    }

    componentWillMount() {
        this.loadComments();
    }

    private loadComments() {
        const comments = localStorage.getItem("comments");
        if(comments) {
            const commentsList = JSON.parse(comments);
            this.setState({ comments: commentsList })
        }
    }

    private saveComments(comments) {
        localStorage.setItem("comments", JSON.stringify(comments))
    }

    handleSubmitComment(data: any) {
        let { comments } = this.state;
        comments.push(data);
        this.setState({comments});
        this.saveComments(comments);
    }

    handleDeleteComment(index) {
        let { comments } = this.state;
        comments.splice(index, 1);
        this.setState({comments});
        this.saveComments(comments);
    }

    render() {
        const { comments } = this.state;
        return <div className="wrapper">
            <CommentInput 
                onSubmit={this.handleSubmitComment.bind(this)}/>
            <CommentList comments={comments} onDelete={this.handleDeleteComment.bind(this)}/>
            {/* <Clock/> */}
        </div>
    }
}