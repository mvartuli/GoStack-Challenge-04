import React from 'react';
import PropTypes from 'prop-types';
import av1 from '../assets/av-1.jpg';
import av2 from '../assets/av-2.jpg';
import av3 from '../assets/av-3.jpg';
import av4 from '../assets/av-4.jpg';

function Comment({ comment }) {
  const { name, avatar } = comment.author;
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
    <div className="comment">
      <img className="avatar" src={immage} alt="img" />
      <p>
        <span>{name}</span>
        {comment.content}
      </p>
    </div>
  );
}

Comment.defaultProps = {
  comment: 'Oculto',
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
};

export default Comment;
