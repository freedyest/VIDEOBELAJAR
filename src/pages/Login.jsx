import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import LoginCard from "../components/organisms/LoginCard";
import { fetchUsers } from "../slices/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) return alert("Email atau password salah!");

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    alert(`Login berhasil! Selamat datang ${foundUser.nama}`);
    navigate("/Home");
  };

  const handleRegister = () => navigate("/Register");

  return (
    <div className="bg-[#FFFDF3] min-h-screen">
      <Header />

      <section className="flex items-center justify-center py-20">
        <LoginCard
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loading={loading}
          onSubmit={handleLogin}
          onRegister={handleRegister}
        />
      </section>
    </div>
  );
}

export default Login;
