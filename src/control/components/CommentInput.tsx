import * as React from 'react';
import { Component } from "react";

interface CommentInputProps {
    onSubmit?: (data)=> void;
}
interface CommentInputStates {
    userName: string;
    content: string;
}

export class CommentInput extends Component<CommentInputProps,CommentInputStates>{
    static defaultProps = {
        onSubmit: (value)=> {}
    };

    textarea?: any;
    constructor(props,context){
      super();
      this.state={
          userName: "",
          content: ""
      };
    }

    componentWillMount() {
        this.loadUserName()
    }

    componentDidMount() {
        this.textarea.focus();
    }

    private loadUserName() {
        const userName = localStorage.getItem("userName");
        if(userName) {
            this.setState({ userName })
        }
    }

    private saveUserName(userName: string = "") {
        localStorage.setItem("userName", userName)
    }

    handleUserNameChange(e) {
        this.setState({ userName: e.target.value })
    }

    handleContentChange(e) {
        this.setState({ content: e.target.value })
    }

    handleSubmit() {
        const { userName, content } = this.state;
        if(!userName){
            alert("请输入username");
            return;
        }
        if(!content){ 
            alert("请输入content");
            return;
        }
        if(this.props.onSubmit) {
            this.props.onSubmit({
                userName,
                content,
                createdTime: +new Date()
            });
        }
        this.setState({content: ""});
    }

    handleUserNameBlur(e) {
        this.saveUserName(e.target.value);
    }

    render() {
        const { userName, content } = this.state;
        const { onSubmit } = this.props;

        return <div className="comment-input">
                <div>
                    <span>用户名：</span>
                    <div>
                        <input 
                            value={userName} 
                            onBlur={this.handleUserNameBlur.bind(this)}
                            onChange={this.handleUserNameChange.bind(this)}/>
                    </div>
                </div>
                <div>
                    <span>评论内容：</span>
                    <div>
                        <textarea
                            ref={(textarea)=> this.textarea = textarea} 
                            value={content}
                            onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div>
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
    }
}