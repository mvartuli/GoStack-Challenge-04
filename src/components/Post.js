import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import av1 from '../assets/av-1.jpg';
import av2 from '../assets/av-2.jpg';
import av3 from '../assets/av-3.jpg';
import av4 from '../assets/av-4.jpg';

function Post({ post }) {
  const { name, avatar } = post.author;
  let immage = av1;
  switch (avatar) {
    case '1':
      immage = av1;
      break;
    case '2':
      immage = av2;
      break;
    case '3':
      immage = av3;
      break;
    case '4':
      immage = av4;
      break;
  }
  return (
    <div className="post">
      <div className="postheader">
        <img className="avatar" src={immage} alt="img" />
        <div className="details">
          <span>{name}</span>
          <span>{post.date}</span>
        </div>
      </div>

      <div className="postcontent">
        <span>{post.content}</span>
        <br />
      </div>
      <div className="postcomments">
        <div className="divider" />
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

Post.defaultProps = {
  post: 'Oculto',
};

Post.propTypes = {
  post: PropTypes.string.isRequired,
};

export default Post;
