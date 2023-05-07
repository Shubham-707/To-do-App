import "./App.css";
import Signup from "./components/signup/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import React from "react";
import PostPage from "./components/postPage/postPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
