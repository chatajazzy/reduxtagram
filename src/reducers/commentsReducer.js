import appConstants from '../constants/appConstants';
import initialState from './initialState';

export default function commentsReducer(state = initialState.comments, action) {
  switch (action.type) {
    case appConstants.LOAD_COMMENTS:
      return action.comments;
    case appConstants.ADD_COMMENT:
      if (typeof state[action.postId] !== 'undefined') {
        return {
          ...state,
          [action.postId]: [
            ...state[action.postId],
            {
              text: action.comment,
              user: action.author
            }
          ]
        };
      } else {
        return {
          [action.postId]: [
            {
              text: action.comment,
              user: action.author
            }
          ]
        };
      }
    case appConstants.REMOVE_COMMENT:
      console.log('state', state);
      console.log('state2', ...state);
      console.log(
        state[action.postId].slice(0, action.index),
        'lol',
        state[action.postId].slice(action.index + 1)
      );
      return {
        ...state,
        [action.postId]: [
          ...state[action.postId].slice(0, action.index),
          ...state[action.postId].slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}
