import { ZH_CN } from 'cache';
import { CHANGE_LANG } from "../modalStatic";
const commonReducer = function(state = {
  lang: ZH_CN
}, action: any) {
  switch(action.type) {
    case CHANGE_LANG: 
      return {...state, lang: action.value};
    default: return state
  }
}

export default commonReducer;