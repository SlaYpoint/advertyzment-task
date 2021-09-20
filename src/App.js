import React, { useState, useEffect } from "react";
import "./styles.css";
import { Navbar, UserCard } from "./components";
import { getUsers } from "./utils";

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <UserCard />
    </div>
  );
}
