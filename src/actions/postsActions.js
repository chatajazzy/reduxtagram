import appConstants from '../constants/appConstants';

// data
import posts from '../data/posts';

export function loadPosts() {
  return {
    type: appConstants.LOAD_POSTS,
    posts
  };
}

// increment
export function incrementLikes(index) {
  return {
    type: appConstants.INCREMENT_LIKES,
    index
  };
}
