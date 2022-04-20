import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

PostList.propTypes = {
  posts: PropTypes.array,
};
PostList.defaultProps = {
  posts: [],
};
const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fecthPostList() {
      const requestURL = "https://rickandmortyapi.com/api/character/140";
      const response = await fetch(requestURL);
      const responseJSON = await response.json();
      console.log({ responseJSON });
    }
    fecthPostList();
  });

  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostList;
