import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  const [blogs, setBlog] = useState([]);
  const [searchField, setSearchField] = useState("");
  console.log(searchField);
  useEffect(() => {
    fetch("https://cyra-auth.onrender.com/api/users/")
      .then((res) => res.json())
      .then((result) => setBlog(result.data));
  }, []);
  const onSearchChange = (event) => {
    const searchData = event.target.value.toLocaleLowerCase();
    setSearchField(searchData);
  };

  const filteredUser = blogs.filter((home) => {
    return home.category.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="image">
      <div className="body">
        <input
          type="search"
          className="searchBox"
          placeholder="search"
          onChange={onSearchChange}
        />
        <div className="container">
          {filteredUser.map((blog) => (
            <div className="blog">
              <div className="blogs">
                <h2>{blog.category}</h2>
                <br />

                <h3>
                  <Link to={blog._id}>{blog.title}</Link>
                </h3>
                <br />

                <p>{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
