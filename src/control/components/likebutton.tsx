import * as React from 'react';
import ReactDOM from 'react-dom';


interface LikeButtonProps {
    LikedText?: string;
    unlikedText?: string;
 }
interface LikeButtonStates {
    isLiked?: boolean;
}


export class LikeButton extends React.Component<LikeButtonProps, LikeButtonStates> {
    static defaultProps = {
        LikedText: "已赞", 
        unlikedText: "赞"
    }
    constructor() {
        super();
        this.state = {
            isLiked: false
        }
    }

    handleClickLikeButton() {
        this.setState({ isLiked: !this.state.isLiked });
    }

    render() {
        const { isLiked } = this.state;
        let { LikedText, unlikedText } = this.props;
        LikedText = LikedText || "取消"
        unlikedText = unlikedText || "点赞"
        return <button onClick={this.handleClickLikeButton.bind(this)}>
            {isLiked ? LikedText : unlikedText}👍
        </button>;
    }
}