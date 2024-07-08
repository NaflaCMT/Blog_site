import React, { useState } from "react";
import "./create.css";
const Create = () => {
  const [cat, setCat] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://cyra-auth.onrender.com/api/users/", {
      method: "POST",
      body: JSON.stringify({
        category: cat,
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="border">
      <div className="bor_box">
        <form onSubmit={handleSubmit}>
          <h2 className="h2">Create your Blog</h2>
          <br />
          <br />
          <div>
            <label className="cate">Select your Category</label>
            <br />
            <select className="cat" onChange={(e) => setCat(e.target.value)}>
              <option value="News">News</option>
              <option value="Fashion">Fashion</option>
              <option value="Travel">Travel</option>
              <option value="LifeStyle">LifeStyle</option>
              <option value="Health&Fitness">Health&Fitness</option>
              <option value="Sports">Sports</option>
              <option value="Politics">Politics</option>
              <option value="Film">Film</option>
              <option value="Music">Music</option>
            </select>

            <br />
            <br />
          </div>
          <div>
            <input
              className="input"
              placeholder="Title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <textarea
              className="desc"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <input className="sub" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
