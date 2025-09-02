import { Link, useNavigate } from "react-router";

export default function LevelPage() {
    const navigate = useNavigate()
  return (
    <>
      <Link to="/home">home</Link>
      <form action="">
        <input type="text" placeholder="select  a diffuclty level" />
        <button  onClick={()=>navigate("/game")}>submit level</button>
      </form>
    </>
  );
}
