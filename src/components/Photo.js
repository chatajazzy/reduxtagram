import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Photo extends Component {
  render() {
    const { code, caption, display_src, likes } = this.props.post;
    const { comments, index } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${code}`}>
            <img src={display_src} alt={caption} className="grid-photo" />
          </Link>
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <span key={likes} className="likes-heart">
              {likes}
            </span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>{caption}</p>
          <div className="control-buttons">
            <button
              className="likes"
              onClick={() => this.props.incrementLikes(index)}
            >
              &hearts; {likes}
            </button>
            <Link to={`/view/${code}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble" />
                {comments[code] ? comments[code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}
