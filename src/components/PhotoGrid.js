import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../actions/postsActions';
import * as commentsActions from '../actions/commentsActions';
// import CourseForm from './CourseForm';
import PropTypes from 'prop-types';
import Photo from './Photo';

class PhotoGrid extends Component {
  incrementLikes = index => {
    this.props.actions.incrementLikes(index);
  };
  render() {
    const photos = this.props.posts.map((post, i) => {
      return (
        <Photo
          key={i}
          post={post}
          index={i}
          incrementLikes={this.incrementLikes}
          {...this.props}
        />
      );
    });
    return (
      <div>
        <h1>PhotoGrid</h1>
        <div className="photo-grid-container">{photos}</div>
      </div>
    );
  }
}

// redux
function mapStateToProps(state, ownProps) {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
