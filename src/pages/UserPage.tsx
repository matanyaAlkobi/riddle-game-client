import { useState } from "react";
import { useNavigate } from "react-router";
export default function UserPage() {
  const [feedback, setFeedback] = useState("");
  let navigate = useNavigate();

  const chooseOption = (choice: number) => {
    switch (choice) {
      case 1:
        setFeedback("You chose: Play Riddles");
        break;
      case 2:
        setFeedback("You chose: Create a Riddle");
        break;
      case 3:
        navigate("/all-riddles");
        break;
      default:
        setFeedback("Invalid choice!");
    }
  };
  return (
    <>
      <div className="admin-page">
        <div className="menu">
          <h2>Riddle Game Menu</h2>
          <button onClick={() => chooseOption(1)}>1. Play Riddles</button>
          <button onClick={() => chooseOption(2)}>2. Create a Riddle</button>
          <button onClick={() => chooseOption(3)}>3. View All Riddles</button>
          <button onClick={() => navigate("/home")}>6. Exit</button>
          <p id="feedback">{feedback}</p>
        </div>
      </div>
    </>
  );
}
