import * as React from 'react';
import { Component } from "react";
import { CommentList } from '../component/CommentList'
import { ReduxAction } from '../../redux/action';
import { connect } from 'react-redux'

interface CommentListContainerProps {
    comments: Array<any>;
    innitComments: (comments?: any)=> void;
    onDeleteComment: (index?: number)=> void;
}
interface CommentListContainerStates {
}

class CommentListContainer extends Component<CommentListContainerProps,CommentListContainerStates>{
    constructor(props,context){
      super();
      this.state={
      };
    }

    componentWillMount() {
        this.loadComments();
    }

    private loadComments() {
        let comments = localStorage.getItem('comments');
        comments = comments ? JSON.parse(comments) : [];
        this.props.innitComments(comments);
    }

    handleDeleteComment(index) {
        const { comments } = this.props;
        const newComments = [
            ...comments.slice(0, index),
            ...comments.slice(index + 1)
        ]
        localStorage.setItem('comments', JSON.stringify(newComments));
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }


    render() {
        return <CommentList
            comments={this.props.comments}
            onDeleteComment={this.handleDeleteComment.bind(this)}/>
    }
}

const mapStateToProps = (state)=> {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        innitComments: (comments?: Array<any>)=> {
            dispatch(ReduxAction.initComments(comments));
        },
        onDeleteComment: (commentIndex?: number)=> {
            dispatch(ReduxAction.deleteComment(commentIndex))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);