import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import LoginPage from "./pages/LoginPage";
import LeaderBoardPage from "./pages/leaderboard";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import LevelPage from "./pages/LevelPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import PlayGame from "./pages/PlayGame.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="/level" element={<LevelPage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/game" element={<PlayGame />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
