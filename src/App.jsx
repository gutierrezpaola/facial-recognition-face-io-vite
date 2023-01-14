import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

import logoImg from  '../src/assets/img/logo.png';

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

      setUserInfo({
        facialId: response.facialId,
        timestamp: response.timestamp,
        gender: response.gender,
        age: response.details.age
      });

      setIsLoggedIn(true);

    // alert(` Unique Facial ID: ${response.facialId}
    // Enrollment Date: ${response.timestamp}
    // Gender: ${response.details.gender}
    // Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleLogIn = async () => {
  //   try {
  //     let response = await faceio.authenticate({
  //       locale: "auto",
  //     });

  //     console.log(` Unique Facial ID: ${response.facialId}
  //   PayLoad: ${response.payload}
  //   `);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  return (
    <>
    <div className="main-container">
    <header>
      <section>
        <img src={logoImg} alt="logo" />
      </section>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
    </header>
    <main>
          <div className="container">
              <div className="row d_grid">
                  <div className="col-xl-8 col-lg-8 col-md-8 col-12-9">
                    <div>
                        <h1>Facial Recognition</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a aliquam, hic ipsum id
                          totam facere. Rem explicabo unde voluptas dolorem! A repellendus quae quis maxime iusto ab
                          neque enim.</p>
                        <button onClick={handleSignIn}>Get Started</button>
                    </div>
                  </div>
              </div>

              {isLoggedIn && (
              <div class="alert alert-info" role="alert">
                <span>ID: {userInfo.facialId}</span>
                <span>TimeStamp:{userInfo.facialId}</span>
                <span>Gender: {userInfo.facialId}</span>
                <span>Age: {userInfo.facialId}</span>
              </div>
            )}
            </div>

    </main>
    </div>
    </>
  )
}

export default App;

