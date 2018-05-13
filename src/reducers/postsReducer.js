import appConstants from '../constants/appConstants';
import initialState from './initialState';

export default function postsReducer(state = initialState.posts, action) {
  switch (action.type) {
    case appConstants.LOAD_POSTS:
      return action.posts;
    case appConstants.ADD_POST:
      return [...state, Object.assign({}, action.posts)];
    case appConstants.INCREMENT_LIKES:
      const i = action.index;
      console.log('object :', i);
      return [
        ...state.slice(0, i),
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
}
