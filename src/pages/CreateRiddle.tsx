import { useRef, useState } from "react"

type Riddle={
    name:string,
    taskDescription:string,
    correctAnswer:string,
    difficulty:string,
}

export  default  function CreateRiddle(){
    const nameRef = useRef<HTMLInputElement>(null);
    const taskDescriptionRef = useRef<HTMLInputElement>(null);
    const correctAnswerRef = useRef<HTMLInputElement>(null);
    const difficultyRef = useRef<HTMLInputElement>(null);

    return(
    <>
    <div className="create-riddle-page">
        <h2></h2>
        <form action="">

            <input className="create-input" type="text" placeholder="please enter a name" ref={nameRef} required/>
            <input className="create-input" type="text" placeholder="please enter a taskDescription" ref={taskDescriptionRef} required/>
            <input className="create-input" type="text" placeholder="please enter correctAnswer" ref={correctAnswerRef} required/>
            <input className="create-input" type="text" placeholder="please enter difficulty" ref={difficultyRef} required/>
            <button className="create-btn" type="submit">create an riddle</button>
        </form>
    </div>
    </>)
}