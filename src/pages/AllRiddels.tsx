import { useEffect, useState } from "react";
import { viewRiddlesHandler } from "../controllers/riddle.controller.ts";
import "../styles/allRiddelsPage.css"
interface Riddle {
  _id: number;
  name: string;
  taskDescription: string;
  correctAnswer: string;
  difficulty: string;
}

export default function ViewAllRiddels() {
  const [allRiddels, setAllRiddels] = useState<Riddle[]>([]);

  useEffect(() => {
    const fetchRiddles = async () => {
      const data = await viewRiddlesHandler();
      setAllRiddels(data);
    };
    fetchRiddles();
  }, []);

  return (
    <div className="all-riddles-page">
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>taskDescription</th>
            <th>correctAnswer</th>
            <th>difficulty</th>
          </tr>
        </thead>
        <tbody>
          {allRiddels.length > 0 ? (
            allRiddels.map((riddle: Riddle) => (
              <tr key={riddle._id}>
                <td>{riddle._id}</td>
                <td>{riddle.name}</td>
                <td>{riddle.taskDescription}</td>
                <td>{riddle.correctAnswer}</td>
                <td>{riddle.difficulty}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No riddles found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
