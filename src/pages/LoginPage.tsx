import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser, signupUser } from "../services/authService";
import "../styles/loginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const email = emailRef.current?.value || "";

    try {
      const result = isLogin
        ? await loginUser(username, password)
        : await signupUser(username, password, email);

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
        <button type="button" onClick={() => setIsLogin(true)}>Sign in</button>
        <button type="button" onClick={() => setIsLogin(false)}>Sign up</button>
      </div>

      <form className="user-information" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            ref={emailRef}
            className="login-input"
            type="email"
            placeholder="Enter your email"
            required
          />
        )}
        <input
          ref={usernameRef}
          className="login-input"
          type="text"
          placeholder="Enter your name"
          required
        />
        <input
          ref={passwordRef}
          className="login-input"
          type="password"
          placeholder="Enter your password"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
