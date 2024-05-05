import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const App = () => {
  useGSAP(() => {
    gsap.from("#text", {
      opacity: 0,
      duration: 1,
      y: 50,
    });
  });

  const mouseMove = (e) => {
    gsap.to("#main div", {
      duration: 0.1,
      width: e.clientX,
    });
  };

  return (
    <div
      onMouseMove={(e) => {
        mouseMove(e);
      }}
      className="relative overflow-hidden"
    >
      <div id="nav" className="bg-zinc-700 absolute top-0 z-10 h-20 w-screen"></div>
      <div
        id="text"
        className="text-white z-10 absolute top-[50%] left-[50%] -translate-x-1/2 text-nowrap text-3xl "
      >
        Tipsy Coders
      </div>
      <div id="main" className="bg-zinc-900 relative h-screen w-screen ">
        <div className="bg-zinc-800 absolute left-0 w-0 h-screen"></div>
      </div>
    </div>
  );
};

export default App;
