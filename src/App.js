import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="z-0 relative ">
      <NavBar />
             
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sehcdule" element={<Schedule />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
