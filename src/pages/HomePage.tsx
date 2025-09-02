import { useNavigate } from "react-router";

import "../styles/homePage.css";
export default function HomePage() {
  let navigate = useNavigate();
  return (
    <>
      <div className="home-page">
        <h1>Riddle game</h1>
        <div className="navigation-buttons">
          <button onClick={()=>navigate("/level")}>play</button>
          <button onClick={()=>navigate("/login")}>login</button>
          <button onClick={()=>navigate("/leaderboard") }>leader board</button>       
        </div>
      </div>
    </>
  );
}
