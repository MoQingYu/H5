import * as React from 'react';
import { Component } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import { commentModal } from "./Comment";
import { connect } from "react-redux";

interface CommentAppProps {
  
}
interface CommentAppStates {
  comments: Array<object>

}

class CommentApp extends Component<CommentAppProps, CommentAppStates> {
  constructor(props,context){
    super(props,context);
    this.state={
      comments: []
    };
  }

  componentWillMount() {
    this._loadComments();
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      const data: Array<object> = JSON.parse(comments)
      this.setState({ comments: data })
    }
  }

  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  render() {
    const { comments } = this.state;
    console.log(this.props);
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this._handleSubmit.bind(this)}/>
        <CommentList comments={comments} />
      </div>
    )
  }

  _handleSubmit(v: commentModal) {
    if (!v) return
    if (!v.username) return alert('请输入用户名')
    if (!v.content) return alert('请输入评论内容')
    let { comments } = this.state;
    v['dateCreate'] = +new Date();
    comments.push(v);
    this._saveComments(comments);
    this.setState({comments});
  }

}
const mapStateToProps = (state) => {
  return {
    propData: state
  };
};
export default connect(mapStateToProps)(CommentApp);