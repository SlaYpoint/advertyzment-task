import React, { useState } from "react";
import "./styles.css";
import { Navbar, UserCard } from "./components";
import { getUsers } from "./helper/net-requests";
import Loader from "react-loader-spinner";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);

  const buttonHandler = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUserData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar buttonHandler={buttonHandler} />
      <main>
        {loading ? (
          <Loader type="Oval" color="#000" height={100} width={100} />
        ) : userData.length === 0 ? (
          <div className="toast">Fetch Users To Display Profiles</div>
        ) : (
          <div className="grid-column-layout p-1">
            {userData.map((user) => {
              return <UserCard key={user.id} user={user} />;
            })}
          </div>
        )}
      </main>
    </div>
  );
}
