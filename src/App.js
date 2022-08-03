import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import NavBar from "./routes/NavBar";
import SignIn from "./routes/SignIn";
import SignOut from "./routes/SignOut";

function App() {
  return (
    <>
      <h2>hi</h2>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
