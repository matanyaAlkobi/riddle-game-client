import { Link } from "react-router";

export default function PlayGame(){
    return(<>
    <Link to="/home">home</Link>
    <div className="play-game">
        <p>description</p>
        <form action="">
            <input type="text" placeholder="type your answer here..."/>
            <button>submit answer</button>
        </form>
    </div>
    </>)
}