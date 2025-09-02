import { Link } from "react-router";

export default function LevelPage() {
  return (
    <>
      <Link to="/home">home</Link>
      <form action="">
        <input type="text" placeholder="select  a diffuclty level" />
        <button>submit level</button>
      </form>
    </>
  );
}
