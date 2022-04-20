import React, { useState, useEffect } from "react";

const Useeffect = () => {
  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then((action) => {
        setAction(action);
      });
  },[]);
  return (
    <div className="p-10">
      <ul>
        {action.map(post => (
          <li className="p-2" key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Useeffect;
