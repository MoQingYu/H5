import * as React from 'react';
import { Component } from "react";
import { Comment } from "./Comment";

interface CommentListProps {
  comments?: Array<object>
}

interface CommentListStates {

}

export default class CommentList extends Component<CommentListProps, CommentListStates> {

  static defaultProps = {
    comments: []
  }

  render() {
    const { comments } = this.props;
    return (
      <div>
        {
          comments.map((d, i)=><Comment comment={d} key={i}/>)
        }
      </div>
    )
  }
}