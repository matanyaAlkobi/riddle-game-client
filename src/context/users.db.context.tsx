import { Children, createContext, useState } from "react";

export const usersDB = createContext();

export default function UsersDB({ children }) {
  const [allUsers, setAllUsers] = useState<object>([]);
  setAllUsers([{
    id:1,
    name:"piano",
    bestTime:1.3,
    password:1234
  },
{
    id:2,
    name:"a",
    bestTime:2.4,
    password:1234
  }])
  return (
    <usersDB.Provider value={{ allUsers, setAllUsers }}>
      {Children}
    </usersDB.Provider>
  );
}
