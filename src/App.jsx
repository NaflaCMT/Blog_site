import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Single from "./components/Single";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          {<Route path="/:id" element={<Single />} />}
        </Route>
      </Routes>
    </>
  );
};

export default App;
