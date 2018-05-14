import React from 'react';

const Comment = props => {
  const { text, user } = props.comment;
  return (
    <div className="comment">
      <strong>{user}</strong>
      {text}
      <button
        className="remove-comment"
        onClick={() => props.handleRemove(props.index)}
      >
        &times;
      </button>
    </div>
  );
};

export default Comment;
