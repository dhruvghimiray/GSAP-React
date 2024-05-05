import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const App = () => {
  useGSAP(() => {
    gsap.from("#Hello", {
      opacity: 0,
      duration: 1,
      y: 50,
    });
  });

  return <div id="Hello">Hello from React</div>;
};

export default App;
