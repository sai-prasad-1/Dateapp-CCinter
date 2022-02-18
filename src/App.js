import React from "react";
import { Routes,Route ,useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";

const App = () => {
  return (
      <Routes>
          <Route path="/*" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
  )
};

export default App;
