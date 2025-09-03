import "./App.css";
import UsersDBProvider from "./context/users.db.context";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <UsersDBProvider>
        <HomePage/>
      </UsersDBProvider>
    </>
  );
}

export default App;
