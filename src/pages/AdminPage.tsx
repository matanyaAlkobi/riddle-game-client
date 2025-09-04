import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../styles/adminPage.css";
export default function AdminPage() {
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
        setFeedback("You chose: View All Riddles");
        navigate("/all-riddles");
        break;
      case 4:
        setFeedback("You chose: Update a Riddle");
        break;
      case 5:
        setFeedback("You chose: Delete a Riddle");
        break;

      default:
        setFeedback("Invalid choice!");
    }
  };
  return (
    <>
      <div className="admin-page">
        <h2>Riddle Game Menu</h2>
        <div className="button-group">
          <button className="menu-btn" onClick={() => chooseOption(1)}>1. Play Riddles</button>
          <button className="menu-btn" onClick={() => chooseOption(2)}>2. Create a Riddle</button>
          <button className="menu-btn" onClick={() => chooseOption(3)}>3. View All Riddles</button>
          <button className="menu-btn"  onClick={() => chooseOption(4)}>4. Update a Riddle</button>
          <button className="menu-btn" onClick={() => chooseOption(5)}>5. Delete a Riddle</button>
          <button className="menu-btn" onClick={() => navigate("/home")}>6. Back home</button>
        </div>
        <p className="feedback">{feedback}</p>
      </div>
    </>
  );
}
