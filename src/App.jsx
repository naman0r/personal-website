import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./App.css";
import Terminal from "./Terminal";
import TopNav from "./TopNav";
import MyPicture from "./MyPicture";
import Terminal2 from "./Terminal2";

const App = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .to("#nav-pannel", {
          opacity: 1,
          duration: 1,
          delay: 0.5,
        });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        class="h-screen p-10 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 id="title-1" className="text-9xl">
          Student
        </h1>
        <h1 id="title-2" className="text-9xl">
          Software Enthusiast
        </h1>
        <h1 id="title-3" className="text-9xl">
          idk
        </h1>
      </div>
      <div
        className="h-screen flex bg-gray-950 justify-center place-items-center"
        id="main-screen-1"
      >
        <h1 className="text-9xl font-bold font-spaceGrotesk blinking-cursor">
          &gt;Hi, I'm Naman.
        </h1>
      </div>

      <div>
        <TopNav />
      </div>
      <div>
        <Terminal2 />
      </div>
      <div>
        <MyPicture />
      </div>
    </div>
  );
};

export default App;
