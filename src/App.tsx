import React from "react";

import "./App.css";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import { Fade } from "react-awesome-reveal";
import NavBar from "./components/Dribble/StartHiring/NavBar";
import StartHiring from "./components/Dribble/StartHiring";

function App() {
  return (
    <div className=" h-full w-full">
      <Introduction />
      <Fade>
        <AboutMe />
      </Fade>
      {/* <NavBar />{" "} */}
      {/* <StartHiring /> */}
    </div>
  );
}

export default App;
