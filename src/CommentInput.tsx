import * as React from 'react';
import { Component } from "react";

interface CommentInputProps {
  onSubmit?:({})=> void;
}

interface CommentInputStates {
  username: string,
  content: string
}

export default class CommentInput extends Component<CommentInputProps, CommentInputStates> {
  constructor(props,context){
    super();
    this.state={
      username: "",
      content: ""
    };
  }

  componentWillMount() {
    this._loadUserName();
  }

  _loadUserName() {
    const username = localStorage.getItem("username");
    username && this.setState({username});
  }

  _saveUserName(username) {
    localStorage.setItem('username', username)
  }

  render() {
    const { username, content } = this.state;
    return (
      <div className='comment-input'>
       <div className='comment-field'>
         <span className='comment-field-name'>用户名：</span>
         <div className='comment-field-input'>
           <input value={username} onChange={(e)=> this._handleChange(e, "username")}/>
         </div>
       </div>
       <div className='comment-field'>
         <span className='comment-field-name'>评论内容：</span>
         <div className='comment-field-input'>
           <textarea value={content} onChange={(e)=> this._handleChange(e, "content")}/>
         </div>
       </div>
       <div className='comment-field-button'>
         <button onClick={this._handleSubmit.bind(this)}>发布</button>
       </div>
      </div>
    )
  }

  _handleChange(e, key: string) {
    const result = {}
    result[key] = e.target.value;
    this.setState(result);
  }

  _handleSubmit() {
    const { onSubmit } = this.props;
    const { username, content } = this.state;
    onSubmit && onSubmit({username, content});
    this._saveUserName(username);
    this.setState({content: ""});
  }

}