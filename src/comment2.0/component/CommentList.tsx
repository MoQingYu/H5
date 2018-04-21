import * as React from 'react';
import { Component } from "react";
import { Comment } from "./Comment";

interface CommentListProps {
    comments?: Array<any>;
    onDeleteComment?: (index)=> void;
}
interface CommentListStates {
}

export class CommentList extends Component<CommentListProps,CommentListStates>{
    static defaultProps = {
        comments: []
    }
    constructor(props,context){
      super();
    }

    render() {
        const { comments, onDeleteComment } = this.props;
        return <div>
                {comments.map((d, i)=>{
                    return <Comment 
                        comment={d} key={i}
                        index={i}
                        onDelete={(index)=> onDeleteComment(index)} />
                })}
            </div>
    }
}