import React from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
  let faceio;
  useEffect(() => {
    faceio = new faceIO("fioa737a");
  }, []);

  const handleSignIn = async () => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
    Enrollment Date: ${response.timestamp}
    Gender: ${response.details.gender}
    Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
    PayLoad: ${response.payload}
    `);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contenedor">
    
    <div className="log-in-container">
    <div className="img-container">
        <img
          src="../public/Daco_2327111.png"
          alt="faceio-logo"
        />
      </div>
      <div className="background-color"></div>
      <h2>Face Authentication by FaceIO</h2>

      <button onClick={handleSignIn}>Get Started</button>
      <button onClick={handleLogIn}>Log-in</button>
    </div>
 
  </div>

  ) }

export default App;
