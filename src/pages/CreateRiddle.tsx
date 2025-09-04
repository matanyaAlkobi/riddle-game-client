export  default  function CreateRiddle(){
    return(<>
    <div className="create-riddle-page">
        <h2></h2>
        <form action="">
            <input type="text" placeholder="please enter a name" required/>
            <input type="text" placeholder="please enter a taskDescription" required/>
            <input type="text" placeholder="please enter correctAnswer" required/>
            <input type="text" placeholder="please enter difficulty"required/>
            <button>send</button>
        </form>
    </div>
    </>)
}