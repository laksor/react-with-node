import { useEffect, useState, useSyncExternalStore } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div className="App">
      <h1>My own data : {users.length}</h1>
      <ul>
      {
        users.map(user => <li key={user.id}>id: {user.id} name : {user.name} email: {user.email}</li>)
      }
      </ul>
    </div>
  );
}

export default App;
