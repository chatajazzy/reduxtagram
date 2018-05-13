import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../actions/postsActions';
import * as commentsActions from '../actions/commentsActions';
import Photo from './Photo';

class Single extends Component {
  constructor(props, context) {
    super(props, context);
    const postIndex = this.props.posts.findIndex(
      post => post.code === this.props.post.code
    );
    this.state = {
      post: Object.assign({}, this.props.post),
      postIndex: postIndex
    };
  }
  incrementLikes = index => {
    this.props.actions.incrementLikes(index);
  };
  render() {
    return (
      <div className="single">
        <Photo
          post={this.state.post}
          index={this.state.postIndex}
          incrementLikes={this.incrementLikes}
          {...this.props}
        />
      </div>
    );
  }
}

function getPostById(posts, id) {
  const post = posts.filter(post => post.code === id);

  if (post) {
    return post[0];
  } else {
    return null;
  }
}

// redux
function mapStateToProps(state, ownProps) {
  const postId = ownProps.match.params.postId;

  let post;

  if (postId && state.posts.length > 0) {
    post = getPostById(state.posts, postId);
  }

  return {
    post: post,
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, commentsActions, postsActions),
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);
