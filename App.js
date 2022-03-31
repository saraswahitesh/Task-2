import React, { useState } from "react";
import "./app.css";

export default function App() {
  const [ourUsers, setourUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setourUsers(jsonResponse.data);
  };
  return (
    <div className="App">
      <div id="super-cont">
        <h3 id="header">Web Application ( Click on Get Users To Get Data )</h3>
        <button onClick={loadUsers}>Get Users</button>
      </div>
      <div id="map-cont">
        {ourUsers.map((data,index) => (
          <div id="main-cont" key={index}>
            <img src={data.avatar} alt="Avatar" />
            <h3 id="my_style">
              {" "}
              {data.first_name} {data.last_name}{" "}
            </h3>
            <p>{data.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
