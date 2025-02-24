import React from "react";
import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.profilePic} alt={post.username} className="profile-pic" />
      <div className="post-content">
        <h3>{post.username}</h3>
        <p>{post.content}</p>
        <LikeButton />
      </div>
    </div>
  );
};

export default PostCard;
