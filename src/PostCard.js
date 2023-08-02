import React from 'react';
 const PostCard = ({ post, onClick }) => {
  return (
    <div className="post-card" onClick={onClick}>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <img src={post.img} srcSet={`${post.img} 1x, ${post.img_2x} 2x`} alt={post.title} />
      <p>Tags: {post.tags}</p>
      <p>Author: {post.autor}</p>
      <p>Date: {post.date}</p>
      <p>Views: {post.views}</p>
    </div>
  );
};
 export default PostCard;
