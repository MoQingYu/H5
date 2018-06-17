import * as React from 'react';
import CommentInputContainer from './CommentInputContainer';
import CommentListContainer from './CommentListContainer';

export const CommentApp = (props)=>{
    return <div className='wrapper'>
        <CommentInputContainer/>
        <CommentListContainer/>
    </div>
}