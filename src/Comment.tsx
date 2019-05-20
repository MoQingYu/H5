import * as React from 'react';
import { Component } from "react";

export interface commentModal {
  username?: string,
  content?: string,
  dateCreate?: number,
}

interface CommentProps {
  comment: commentModal
}

interface CommentStates {

}

export class Comment extends Component<CommentProps, CommentStates> {
  render() {
    const { comment } = this.props;
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>：
        </div>
        <p>{comment.content}</p>
        <span className='comment-createdtime'>
          {this._updateTimeString(comment.dateCreate)}
        </span>
      </div>
    )
  }

  _updateTimeString (dateCreate) {
    const duration = (+Date.now() - dateCreate) / 1000
    return duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
  }

}