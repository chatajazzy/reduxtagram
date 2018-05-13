import appConstants from '../constants/appConstants';

// data
import comments from '../data/comments';

export function loadComments() {
  return {
    type: appConstants.LOAD_COMMENTS,
    comments
  };
}

// increment
export function increment(index) {
  return {
    type: appConstants.INCRENENT_LIKES,
    index
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: appConstants.ADD_COMMENT,
    postId,
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: appConstants.REMOVE_COMMENT,
    postId,
    i
  };
}
