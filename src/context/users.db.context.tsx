import { createContext, useState } from "react";
import type { ReactNode } from "react";


interface User {
  id: number;
  name: string;
  bestTime: number;
  password: number;
}

interface UsersContextType {
  allUsers: User[];
  setAllUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const usersDB = createContext<UsersContextType | undefined>(undefined);

export default function UsersDBProvider({ children }: { children: ReactNode }) {
  const [allUsers, setAllUsers] = useState<User[]>([
    { id: 1, name: "piano", bestTime: 1.3, password: 1234 },
    { id: 2, name: "a", bestTime: 2.4, password: 1234 }
  ]);

  return (
    <usersDB.Provider value={{ allUsers, setAllUsers }}>
      {children}
    </usersDB.Provider>
  );
}
