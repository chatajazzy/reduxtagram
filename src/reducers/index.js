import { combineReducers } from 'redux';

import comments from './commentsReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({ comments, posts });

export default rootReducer;
