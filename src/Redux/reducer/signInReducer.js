
import {SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE} from '../action/signInAction'

const initialState = {
  loading: false,
  error: null,
  user: null
}

export default function signInReducer(state=initialState,action){
  console.log("Action::",action)
  switch (action.type) {
    case SIGNIN_REQUEST:
      return{
        ...state,
        loading: true,
        error: null
      }
      case SIGNIN_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null
        };
        case SIGNIN_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error
          };
  
    default:
      return state
  }
}