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
    <div className="main-layout">
    <header>
      <div className="head_top">
          <div className="header">
            <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                      <div className="full">
                        <div className="center-desk">
                            <div className="logo">
                              <a href="index.html"><img src="../src/assets/img/logo.png" alt="#" /></a>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                      <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                            <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                                  <a className="nav-link" href="#"> Home </a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#contact">About</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Contact</a>
                              </li>
                            </ul>
                        </div>
                      </nav>
                    </div>
                </div>
            </div>
          </div>
          <section className="banner_main">
            <div className="container">
                <div className="row d_flex">
                  <div className=" col-xl-8 col-lg-8 col-md-8 col-12-9">
                      <div className="text-bg">
                        <h1><span className="white1">Facial Recognition</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a aliquam, hic ipsum id totam facere. Rem explicabo unde voluptas dolorem! A repellendus quae quis maxime iusto ab neque enim.</p>
                        <a onClick={handleSignIn} href="#">Get Started</a>
                      </div>
                  </div>
                </div>
            </div>
          </section>
      </div>
    </header>
    </div>
  )
}

export default App;
