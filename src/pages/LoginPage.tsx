import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser, signupUser } from "../services/authService";
import "../styles/loginPage.css";

type FormState = {
  username: string;
  password: string;
  email?: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState<FormState>({ username: "", password: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = isLogin
        ? await loginUser(form.username, form.password)
        : await signupUser(form.username, form.password, form.email);

      if (result.error) {
        alert(result.error);
        return;
      }

      console.log(`${isLogin ? "Login" : "Signup"} successful:`, result);

      if (isLogin) {
        navigate(result.role === "admin" ? "/admin" : "/user");
      } else {
        alert("Registration successful! Please login.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  return (
    <div className="login-page">
            <Link to="/home">home</Link>

      <div>
        <button onClick={() => setIsLogin(true)}>Sign in</button>
        <button onClick={() => setIsLogin(false)}>sign up</button>
      </div>

      <form className="user-information" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
          className="input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        )}
        <input
        className="input"
          type="text"
          name="username"
          placeholder="Enter your name"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
        className="input"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
