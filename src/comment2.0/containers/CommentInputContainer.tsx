import * as React from 'react';
import { Component } from "react";
import { CommentInput } from '../component/CommentInput'
import { ReduxAction } from '../../redux/action';
import { connect } from 'react-redux'

interface CommentInputContainerProps {
    comments: Array<any>;
    onSubmit?: (comment?: any)=> void;
}
interface CommentInputContainerStates {
    userName?: string;
    content?: string;
}

class CommentInputContainer extends Component<CommentInputContainerProps,CommentInputContainerStates>{
    constructor(props,context){
      super();
      this.state={
        userName: '',
        content: ''
      };
    }

    componentWillMount() {
        this.loadUserName();
    }

    private loadUserName() {
        const userName = localStorage.getItem('userName');
        if(userName) {
            this.setState({ userName })
        }
    }

    private saveUserName(userName: string = "") {
        localStorage.setItem("userName", userName)
    }

    handleSubmit(comment:any = {}) {
        const { userName, content } = comment;
        if(!comment) return;
        if(!userName){
            alert("请输入username");
            return;
        }
        if(!content){ 
            alert("请输入content");
            return;
        }
        const { comments } = this.props;
        const newComments = [...comments, comment];
        localStorage.setItem("comments", JSON.stringify(newComments));
        if(this.props.onSubmit) {
            this.props.onSubmit(comment);
        }
    }


    render() {
        return <CommentInput
            userName={this.state.userName}
            onUserNameInputBlur={this.saveUserName.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}/>
    }
}

const mapStateToProps = (state)=> {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onSubmit: (comment?: Array<any>)=> {
            dispatch(ReduxAction.addComment(comment));
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CommentInputContainer);