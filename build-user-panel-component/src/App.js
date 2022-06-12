import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);
  const onAddUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { username: uName, age: uAge, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
