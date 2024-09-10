import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const json = await response.json();
        setUsers(json);
      } else {
        console.error("ERROR: ", response.status);
      }
    }
    fetchUsers().catch((e) => console.error("ERROR: ", e));
  }, []);
  return (
    <>
      <p className="read-the-docs">USERS LIST:</p>
      {users?.map((el) => (
        <div key={el.id}>{el?.name}</div>
      ))}
    </>
  );
}

export default App;
