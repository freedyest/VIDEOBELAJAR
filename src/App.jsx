import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";
function App() {
  return (
    <Routes>
      {/* Default /home */}
      <Route path="/" element={<Navigate to="/Home" replace />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/AllProduct" element={<AllProduct />} />
    </Routes>
  );
}

export default App;
