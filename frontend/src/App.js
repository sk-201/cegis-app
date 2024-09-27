import "./App.css";
import React, { useEffect, useContext } from "react";
import ItemForm from "./components/ItemForm";
import LoginForm from "./components/LoginForm";
import { UserContext } from "./context/UserContext";
import { useNavigate } from "react-router-dom";

function App() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("TOKEN")) {
      let username = localStorage.getItem("TOKEN");
      if (username === process.env.REACT_APP_GOVT_ID) {
        navigate("/dashboard");
      }
      setUser({ username: username });
    }
  }, []);

  return <div>{!user ? <LoginForm /> : <ItemForm />}</div>;
}

export default App;
