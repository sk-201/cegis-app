import "./App.css";
import React, { useEffect, useContext } from "react";
import ItemForm from "./components/ItemForm";
import LoginForm from "./components/LoginForm";
import { UserContext } from "./context/UserContext";

function App() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      console.log("hello");
    } else {
      console.log("no");
    }
  }, [user]);

  return <div>{!user ? <LoginForm /> : <ItemForm />}</div>;
}

export default App;
