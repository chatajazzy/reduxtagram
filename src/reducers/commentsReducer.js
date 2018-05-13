import appConstants from '../constants/appConstants';
import initialState from './initialState';

export default function commentsReducer(state = initialState.comments, action) {
  switch (action.type) {
    case appConstants.LOAD_COMMENTS:
      return action.comments;
    case appConstants.ADD_COMMENT:
      return [...state, Object.assign({}, action.comments)];
    default:
      return state;
  }
}
