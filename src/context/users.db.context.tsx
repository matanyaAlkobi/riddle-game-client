import { createContext, useState } from "react";
import type { ReactNode } from "react";


interface User {
  id: number;
  name: string;
  email: string
  bestTime: number;
  password: string;
  role: string;
}

interface UsersContextType {
  allUsers: User[];
  setAllUsers: (obj:User[])=>void;
}



export const usersDB = createContext<UsersContextType>({allUsers:[],setAllUsers([]){}});

export default function UsersDBProvider({ children }: { children: ReactNode }) {
  const [allUsers, setAllUsers] = useState<User[]>([
  { id:1,name: "David", email: "david@gmail.com", password: "1234", role: "admin" ,bestTime:1.2},
  { id:2,name: "Sara", email: "sara@yahoo.com", password: "abcd", role: "user", bestTime:1.5},
  { id:3,name: "Dana", email: "dana@gmail.com", password: "pass", role: "user", bestTime:1.6}
  ]);

  return (
    <usersDB.Provider value={{ allUsers, setAllUsers }}>
      {children}
    </usersDB.Provider>
  );
}
