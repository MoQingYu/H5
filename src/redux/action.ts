import { INIT_COMMENTS, ADD_COMMENT, DELETE_COMMENT } from "./reducer";

export class ReduxAction {

    static initComments(comments) {
        return { type: INIT_COMMENTS, comments };
    }

    static addComment(comment) {
        return { type: ADD_COMMENT, comment };
    }

    static deleteComment(commentIndex) {
        return { type: DELETE_COMMENT, commentIndex };
    }
}