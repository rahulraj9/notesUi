
import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from '../action/signUpAction'

const initialState = {
  loading: false,
  error: null,
  user: null
}

export default function SIGNUPReducer(state=initialState,action){
  switch (action.type) {
    case SIGNUP_REQUEST:
      return{
        ...state,
        loading: true,
        error: null
      }
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error: null
        };
        case SIGNUP_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error
          };
  
    default:
      return state
  }
}