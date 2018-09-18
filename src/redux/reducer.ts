import { createStore } from 'redux';

export const INIT_COMMENTS = 'INIT_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';


export const defaultReducer = (state, action) => {
 if (!state) {
  state = { comments: [] }
 }

 switch (action.type) {
  case INIT_COMMENTS:
   return { comments: action.comments };
  case ADD_COMMENT:
   return { comments: [action.comment, ...state.comments] }
  case DELETE_COMMENT:
   return {
    comments: [
     ...state.comments.slice(0, action.commentIndex),
     ...state.comments.slice(action.commentIndex + 1)
    ]
   }
  default:
   return state;
 }
}

export const store = createStore(defaultReducer);
