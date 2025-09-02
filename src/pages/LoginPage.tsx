import { useState } from "react";
import "../styles/loginPage.css"
import { Link } from "react-router";
export default function LoginPage() {
  const [loginBtn, setLoginBtn] = useState<boolean>(true);
  return (
    <>
      <div className="login-page">
        <Link to="/home">Home</Link>
        <div>
          <button onClick={()=>setLoginBtn(true)}>Login</button>
          <button onClick={()=>setLoginBtn(false)}>Register</button>
        </div>

        <form className="user-information" action="">
            {!loginBtn &&  <input className="input" type="email" placeholder="enter your email"/>}
          <input className="input" type="text" placeholder="enter your name" />
          <input className="input" type="text" placeholder="enter your password" />
          <button>sign in</button>
        </form>
      </div>
    </>
  );
}
