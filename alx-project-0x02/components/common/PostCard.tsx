import { type PostProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostProps> = ({ title, content, userId  }) => {
  return (
    <div className="card">
      <div className="pl-0.5 pr-0.5 pt-4 pb-4">
        <button>{userId}</button>
        <h4>
          <b>{title}</b>
        </h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
