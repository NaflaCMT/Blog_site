import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const [single, setSingle] = useState([]);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://cyra-auth.onrender.com/api/users/${id}`)
      .then((res) => res.json())
      .then((result) => setSingle(result.data));
  }, []);

  return (
    <div>
      {single.map((post) => (
        <div>
          <h2>{post.category}</h2>
          <h4>{post.title}</h4>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
