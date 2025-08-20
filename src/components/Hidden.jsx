"use client";
import React, { useState, useEffect } from "react";

const Hidden = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openWindows, setOpenWindows] = useState(["terminal"]);
  const [activeWindow, setActiveWindow] = useState("terminal");
  const [terminalText, setTerminalText] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [zIndex, setZIndex] = useState(100);
  const [matrixRain, setMatrixRain] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Add your photos here - they should be in the public/gallery/ folder
  const photos = [
    "/gallery/hk.jpeg",
    "/gallery/sid.jpeg",
    "/gallery/sid2.jpeg",
    "/gallery/dab.jpeg",
    "/gallery/csv.jpeg",
    "/gallery/migos.jpeg",
    "/gallery/mom.jpeg",
    "/gallery/maldives.jpeg",
    "/gallery/sas.jpeg",
    "/gallery/layla.jpeg",
  ];

  const readmenotes = [
    { date: "2025-07-30", note: "this is a readme file" },
    {
      date: "2025-01-01",
      note: "Start of a brand new year. I hope to live up to my dreams, and make the most of the wonderful opportunities I have been given",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Terminal typing effect
    const fullText = "naman@personal-site:~$ ";
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= fullText.length) {
        setTerminalText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    // Update time
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Subtle matrix effect (reduced frequency)
    const matrixInterval = setInterval(() => {
      setMatrixRain((prev) => {
        const newRain = [...prev];
        if (Math.random() > 0.95 && newRain.length < 5) {
          newRain.push({
            id: Date.now(),
            x: Math.random() * 100,
            speed: Math.random() * 3 + 2,
          });
        }
        return newRain.filter((drop) => drop.y === undefined || drop.y < 100);
      });
    }, 200);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(typeInterval);
      clearInterval(timeInterval);
      clearInterval(matrixInterval);
    };
  }, []);

  const windowConfigs = {
    about: {
      title: "about.txt",
      x: 150,
      y: 100,
      width: 420,
      height: 320,
      content: (
        <div className="bg-white p-4 font-mono text-sm text-black h-full overflow-auto">
          <div className="mb-4">
            <h2 className="font-bold text-lg mb-2">Hi there! 👋</h2>
            <p className="mb-2">little easter egg part of my website....</p>
            <p className="mb-2">LOOK AROUND</p>
          </div>
          <div className="text-xs text-gray-600">
            <div>Last updated: {new Date().toLocaleDateString()}</div>
            <div>Version: 2025.1</div>
          </div>
          <div className="animate-pulse inline-block mt-2">|</div>
        </div>
      ),
    },
    gallery: {
      title: "Photo Gallery",
      x: 500,
      y: 100,
      width: 400,
      height: 350,
      content: (
        <div className="bg-gray-100 p-4 h-full flex flex-col">
          <div className="flex-1 bg-white border-2 border-gray-300 mb-4 flex items-center justify-center overflow-hidden">
            {photos.length > 0 ? (
              <img
                src={photos[currentPhoto]}
                alt={`Gallery ${currentPhoto + 1}`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.src = "/gallery/placeholder.svg";
                }}
              />
            ) : (
              <div className="text-gray-500 text-center">
                <div className="text-4xl mb-2">📷</div>
                <div>Add photos to /public/gallery/</div>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() =>
                setCurrentPhoto(
                  (prev) => (prev - 1 + photos.length) % photos.length
                )
              }
              className="bg-gray-300 hover:bg-gray-400 px-3 py-1 text-sm border border-gray-600"
              disabled={photos.length <= 1}
            >
              ← Prev
            </button>
            <span className="text-sm text-gray-600">
              {photos.length > 0
                ? `${currentPhoto + 1} / ${photos.length}`
                : "0 / 0"}
            </span>
            <button
              onClick={() =>
                setCurrentPhoto((prev) => (prev + 1) % photos.length)
              }
              className="bg-gray-300 hover:bg-gray-400 px-3 py-1 text-sm border border-gray-600"
              disabled={photos.length <= 1}
            >
              Next →
            </button>
          </div>
        </div>
      ),
    },
    projects: {
      title: "Projects",
      x: 100,
      y: 200,
      width: 450,
      height: 300,
      content: (
        <div className="bg-white p-4 h-full overflow-auto text-sm glitch">
          <a href="/projects">go to the dedicated projects page 🙏 📽️</a>
        </div>
      ),
    },
    notes: {
      title: "Quick Notes",
      x: 300,
      y: 250,
      width: 350,
      height: 280,
      content: (
        <div className="bg-yellow-50 p-4 h-full">
          <div className="h-full flex flex-col">
            <textarea
              className="flex-1 bg-transparent resize-none outline-none text-sm"
              placeholder="Jot down thoughts, ideas, or reminders..."
              defaultValue={`Ideas for website updates:
- Add more interactive elements
- Create a blog section
- Improve photo gallery
- Add contact form

Random thoughts:
- Try that new coffee place
- Finish reading that book
- Plan weekend project`}
            />
            <div className="text-xs text-gray-500 mt-2">
              Last saved: {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </div>
      ),
    },

    readme: {
      title: "README.md",

      x: 169,
      y: 69,
      width: 450,
      height: 250,

      content: (
        <div className="bg-black text-gray-300 p-3 font-mono text-sm h-full overflow-auto">
          {JSON.stringify(readmenotes)}
        </div>
      ),
    },

    stats: {
      title: "System Monitor",
      x: 400,
      y: 100,
      width: 380,
      height: 250,
      content: (
        <div className="bg-black text-green-400 p-3 font-mono text-xs h-full">
          <div className="mb-3 text-yellow-400">SYSTEM STATUS</div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Uptime:</span>
              <span>
                {" "}
                {Math.ceil(
                  (new Date("2025-07-30") - new Date()) / (1000 * 60 * 60 * 24)
                )}{" "}
                days
              </span>
            </div>
            <div className="flex justify-between">
              <span>Creativity Level:</span>
              <span className="text-green-300">85%</span>
            </div>
            <div className="flex justify-between">
              <span>Coffee Status:</span>
              <span className="text-orange-400">Needed</span>
            </div>
            <div className="flex justify-between">
              <span>Project Ideas:</span>
              <span className="text-blue-400">∞</span>
            </div>
            <div className="flex justify-between">
              <span>Motivation:</span>
              <span className="text-green-300">High</span>
            </div>
          </div>
          <div className="mt-4 text-gray-500 text-xs">
            Made with ☕️ by Naman Rusia
          </div>
        </div>
      ),
    },
    terminal: {
      title: "Terminal",
      x: 550,
      y: 350,
      width: 450,
      height: 250,
      content: (
        <div className="bg-black text-gray-300 p-3 font-mono text-sm h-full overflow-auto">
          <div className="text-green-400">
            {terminalText}
            <span className="animate-pulse">█</span>
          </div>
          <div className="mt-3 text-xs space-y-1">
            <div className="text-gray-500">
              Last login: {new Date().toLocaleDateString()} on ttys000
            </div>

            <div>this does not really work on a phone</div>
          </div>
        </div>
      ),
    },
  };

  const desktopIcons = [
    { id: "about", icon: "📄", label: "about.txt", x: 50, y: 50 },
    { id: "gallery", icon: "🖼️", label: "gallery", x: 50, y: 150 },
    { id: "projects", icon: "⚙️", label: "projects", x: 50, y: 250 },
    { id: "notes", icon: "📝", label: "notes", x: 50, y: 350 },
    { id: "stats", icon: "📊", label: "monitor", x: 50, y: 450 },
    { id: "readme", icon: "📜", label: "README.md", x: 1000, y: 50 },
  ];

  const openWindow = (windowId) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId]);
    }
    setActiveWindow(windowId);
    setZIndex(zIndex + 1);
  };

  const closeWindow = (windowId) => {
    setOpenWindows(openWindows.filter((id) => id !== windowId));
    if (activeWindow === windowId && openWindows.length > 1) {
      setActiveWindow(openWindows[openWindows.length - 2]);
    }
  };

  const Window = ({ windowId, config, isActive }) => {
    const [position, setPosition] = useState({ x: config.x, y: config.y });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
      if (e.target.closest(".title-bar") && !e.target.closest(".close-btn")) {
        setIsDragging(true);
        setDragStart({
          x: e.clientX - position.x,
          y: e.clientY - position.y,
        });
        setActiveWindow(windowId);
        setZIndex(zIndex + 1);
      }
    };

    useEffect(() => {
      const handleMouseMove = (e) => {
        if (isDragging) {
          setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
          });
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      if (isDragging) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      }

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isDragging, dragStart]);

    return (
      <div
        className={`absolute ${isActive ? "z-50" : "z-30"}`}
        style={{
          left: position.x,
          top: position.y,
          width: config.width,
          height: config.height,
          zIndex: isActive ? zIndex : "auto",
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="bg-gray-300 border-2 border-t-white border-l-white border-r-gray-800 border-b-gray-800 shadow-xl">
          <div className="title-bar bg-gradient-to-r from-gray-800 to-gray-700 px-2 py-1 flex justify-between items-center cursor-move">
            <span className="text-white text-sm select-none">
              {config.title}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(windowId);
              }}
              className="close-btn bg-gray-300 border border-black w-4 h-4 text-xs flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>
          <div className="border-2 border-t-gray-800 border-l-gray-800 border-r-white border-b-white">
            {config.content}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden select-none">
      {/* Retro gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Perspective grid floor */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 right-0 h-96"
          style={{
            background: `
              linear-gradient(90deg, transparent 49%, #ff00ff 50%, transparent 51%),
              linear-gradient(0deg, transparent 49%, #00ffff 50%, transparent 51%)
            `,
            backgroundSize: "50px 50px",
            transform: "perspective(200px) rotateX(85deg)",
            transformOrigin: "bottom",
            opacity: 0.3,
          }}
        />
      </div>

      {/* Neon grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 255, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 255, 0.8) 1px, transparent 1px),
              linear-gradient(rgba(0, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
          }}
        />
      </div>

      {/* Retro scan lines */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div
          className="h-full w-full"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)",
            animation: "scan 2s linear infinite",
          }}
        />
      </div>

      {/* Mouse glow effect */}
      <div
        className="fixed inset-0 pointer-events-none opacity-15"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4), transparent 70%)`,
        }}
      />

      {/* Desktop */}
      <div className="relative z-10 h-screen">
        {/* Desktop icons */}
        {desktopIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute cursor-pointer hover:bg-white/20 p-3 rounded-lg transition-all duration-200 group"
            style={{ left: icon.x, top: icon.y }}
            onDoubleClick={() => openWindow(icon.id)}
          >
            <div className="text-4xl text-center mb-1 select-none drop-shadow-lg group-hover:scale-110 transition-transform">
              {icon.icon}
            </div>
            <div className="text-white text-xs text-center bg-black/60 px-2 py-1 rounded select-none backdrop-blur-sm">
              {icon.label}
            </div>
          </div>
        ))}

        {/* Trash */}
        <div className="absolute bottom-20 left-10 cursor-pointer hover:bg-white/20 p-3 rounded-lg transition-all duration-200 group">
          <div className="text-4xl text-center mb-1 select-none opacity-70 group-hover:scale-110 transition-all">
            🗑️
          </div>
          <div className="text-gray-300 text-xs text-center bg-black/60 px-2 py-1 rounded select-none backdrop-blur-sm">
            trash
          </div>
        </div>

        {/* Windows */}
        {openWindows.map(
          (windowId) =>
            windowConfigs[windowId] && (
              <Window
                key={windowId}
                windowId={windowId}
                config={windowConfigs[windowId]}
                isActive={activeWindow === windowId}
              />
            )
        )}

        {/* Taskbar */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm border-t border-gray-600 h-12 flex items-center px-3 z-50">
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 text-sm text-white border border-gray-900 flex items-center rounded transition-colors">
            <span className="mr-2 text-lg">◈</span> Menu
          </button>
          <div className="border-l border-gray-600 h-8 mx-3"></div>
          <div className="flex-1 flex items-center space-x-2">
            {openWindows.map((windowId) => (
              <button
                key={windowId}
                onClick={() => setActiveWindow(windowId)}
                className={`${
                  activeWindow === windowId
                    ? "bg-gray-900 border-b-2 border-blue-400"
                    : "bg-gray-700"
                } hover:bg-gray-600 px-3 py-2 text-xs text-white border border-gray-900 transition-all rounded-sm`}
              >
                {windowConfigs[windowId]?.title || windowId}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4 text-white text-xs">
            <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
              🔊
            </span>
            <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">
              📶
            </span>
            <div className="bg-gray-900 px-3 py-1 border border-gray-700 rounded">
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>

        {/* Easter egg */}
        <div className="fixed top-4 right-4 text-gray-700 text-xs opacity-0 hover:opacity-70 transition-all duration-500 cursor-default">
          // built with curiosity
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
          clip: rect(0, 0, 0, 0);
        }
        .glitch::before {
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        .glitch::after {
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 {
          0% {
            clip: rect(64px, 9999px, 66px, 0);
            transform: skew(0.5deg);
          }
          5% {
            clip: rect(30px, 9999px, 36px, 0);
            transform: skew(0.1deg);
          }
          10% {
            clip: rect(70px, 9999px, 71px, 0);
            transform: skew(0.8deg);
          }
          15.0% {
            clip: rect(10px, 9999px, 12px, 0);
            transform: skew(0.2deg);
          }
          20% {
            clip: rect(40px, 9999px, 43px, 0);
            transform: skew(0.6deg);
          }
          25% {
            clip: rect(25px, 9999px, 30px, 0);
            transform: skew(0.3deg);
          }
          30% {
            clip: rect(65px, 9999px, 70px, 0);
            transform: skew(0.7deg);
          }
          35% {
            clip: rect(15px, 9999px, 20px, 0);
            transform: skew(0.4deg);
          }
          40% {
            clip: rect(50px, 9999px, 55px, 0);
            transform: skew(0.9deg);
          }
          45% {
            clip: rect(35px, 9999px, 40px, 0);
            transform: skew(0.1deg);
          }
          50% {
            clip: rect(20px, 9999px, 25px, 0);
            transform: skew(0.5deg);
          }
          55% {
            clip: rect(60px, 9999px, 65px, 0);
            transform: skew(0.2deg);
          }
          60% {
            clip: rect(5px, 9999px, 10px, 0);
            transform: skew(0.8deg);
          }
          65% {
            clip: rect(45px, 9999px, 50px, 0);
            transform: skew(0.3deg);
          }
          70% {
            clip: rect(75px, 9999px, 80px, 0);
            transform: skew(0.6deg);
          }
          75% {
            clip: rect(55px, 9999px, 60px, 0);
            transform: skew(0.7deg);
          }
          80% {
            clip: rect(80px, 9999px, 85px, 0);
            transform: skew(0.4deg);
          }
          85% {
            clip: rect(85px, 9999px, 90px, 0);
            transform: skew(0.9deg);
          }
          90% {
            clip: rect(90px, 9999px, 95px, 0);
            transform: skew(0.1deg);
          }
          95% {
            clip: rect(95px, 9999px, 100px, 0);
            transform: skew(0.5deg);
          }
          100% {
            clip: rect(100px, 9999px, 105px, 0);
            transform: skew(0.2deg);
          }
        }
        @keyframes glitch-anim-2 {
          0% {
            clip: rect(65px, 9999px, 100px, 0);
            transform: skew(0.7deg);
          }
          5% {
            clip: rect(25px, 9999px, 30px, 0);
            transform: skew(0.1deg);
          }
          10% {
            clip: rect(75px, 9999px, 80px, 0);
            transform: skew(0.9deg);
          }
          15% {
            clip: rect(15px, 9999px, 20px, 0);
            transform: skew(0.3deg);
          }
          20% {
            clip: rect(45px, 9999px, 50px, 0);
            transform: skew(0.5deg);
          }
          25% {
            clip: rect(30px, 9999px, 35px, 0);
            transform: skew(0.2deg);
          }
          30% {
            clip: rect(70px, 9999px, 75px, 0);
            transform: skew(0.8deg);
          }
          35% {
            clip: rect(20px, 9999px, 25px, 0);
            transform: skew(0.4deg);
          }
          40% {
            clip: rect(55px, 9999px, 60px, 0);
            transform: skew(0.6deg);
          }
          45% {
            clip: rect(40px, 9999px, 45px, 0);
            transform: skew(0.1deg);
          }
          50% {
            clip: rect(25px, 9999px, 30px, 0);
            transform: skew(0.7deg);
          }
          55% {
            clip: rect(65px, 9999px, 70px, 0);
            transform: skew(0.3deg);
          }
          60% {
            clip: rect(10px, 9999px, 15px, 0);
            transform: skew(0.9deg);
          }
          65% {
            clip: rect(50px, 9999px, 55px, 0);
            transform: skew(0.2deg);
          }
          70% {
            clip: rect(80px, 9999px, 85px, 0);
            transform: skew(0.5deg);
          }
          75% {
            clip: rect(60px, 9999px, 65px, 0);
            transform: skew(0.8deg);
          }
          80% {
            clip: rect(85px, 9999px, 90px, 0);
            transform: skew(0.4deg);
          }
          85% {
            clip: rect(90px, 9999px, 95px, 0);
            transform: skew(0.6deg);
          }
          90% {
            clip: rect(95px, 9999px, 100px, 0);
            transform: skew(0.1deg);
          }
          95% {
            clip: rect(100px, 9999px, 105px, 0);
            transform: skew(0.7deg);
          }
          100% {
            clip: rect(105px, 9999px, 110px, 0);
            transform: skew(0.3deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Hidden;
