export  default  function CreateRiddle(){
    return(<>
    <div className="create-riddle-page">
        <h2></h2>
        <form action="">
            <input type="text" placeholder="please enter a name"/>
            <input type="text" placeholder="please enter a taskDescription"/>
            <input type="text" placeholder="please enter correctAnswer"/>
            <input type="text" placeholder="please enter difficulty"/>
            <button>send</button>
        </form>
    </div>
    </>)
}