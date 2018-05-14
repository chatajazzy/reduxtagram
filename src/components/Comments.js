import React, { Component } from 'react';
import Comment from './Comment';

export default class Comments extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const postId = this.props.match.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.actions.addComment(postId, author, comment);

    this.refs.commentForm.reset();
  };
  handleRemove = index => {
    const postId = this.props.match.params.postId;
    this.props.actions.removeComment(postId, index);
  };
  render() {
    const comments = this.props.comments.map((comment, i) => {
      return (
        <Comment
          key={i}
          index={i}
          comment={comment}
          handleRemove={this.handleRemove}
          {...this.props}
        />
      );
    });
    return (
      <div className="comments">
        {comments}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
