const themeReducer = (state = {}, action)=>{
  if(!state){
    return state
  }
  switch(action.type) {
    case "": 
      return Object.assign({}, state, { comments: action.comments })
    default:
      return state;
  }
}

export default themeReducer;