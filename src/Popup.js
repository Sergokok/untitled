import React from 'react';
 const Popup = ({ post, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
 export default Popup;
