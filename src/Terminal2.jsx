import React, { useState } from "react";

const Terminal2 = () => {
  const [output, setOutput] = useState([]);
  const [command, setCommand] = useState("");

  const handleCommand = (e) => {
    e.preventDefault();

    const newOutput = [...output];

    switch (command.toLowerCase()) {
      case "about":
        newOutput.push(
          "> about",
          "Hi! I'm Naman, a software enthusiast who loves building creative projects."
        );
        break;

      case "projects":
        newOutput.push(
          "> projects",
          "1. Portfolio Website",
          "2. Interactive Game",
          "3. Weather App"
        );
        break;

      case "skills":
        newOutput.push(
          "> skills",
          "JavaScript, React, Tailwind, Python, Swift, Git, Racket"
        );
        break;

      case "education":
        newOutput.push(
          "> education",
          "Northeastern University - B.Sc. in Computer Science (2020 - 2024)"
        );
        break;
      case "resume":
        newOutput.push("> resume", "Download link: [Naman_Resume.pdf]");
        break;
      case "funfact":
        newOutput.push(
          "> funfact",
          "Naman once coded a game in under 24 hours!"
        );
        break;

      case "contact":
        newOutput.push(
          <div>
            <a href="#">GitHub</a>
            <a href="#">Linkedin</a>
            <a href="">Email</a>
          </div>
        );
        break;
      case "set prompt":
        newOutput.push(
          "> set prompt",
          "Custom prompt set! (Not actually implemented yet!)"
        );
        break;

      case "clear":
        setOutput([]);
        setCommand("");
        return;
      default:
        newOutput.push(
          `> ${command}`,
          "Command not found. Try: about, projects, skills, education, resume, funfact, or clear."
        );
    }

    setOutput(newOutput);
    setCommand("");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-md mx-10 my-10 max-h-[60vh] overflow-y-scroll shadow-lg text-gray-100 font-mono">
      <div className="text-green-400 mb-4">Welcome to Naman's Terminal</div>
      <div className="text-gray-400">
        Type a command (e.g., `about`, `projects`, `skills`, `education`,
        `resume`, `funfact`, `clear`):
      </div>

      {/* Terminal Output */}
      <div className="mt-4">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      {/* Command Input */}
      <form onSubmit={handleCommand} className="mt-4">
        <div className="flex items-center">
          <span className="text-green-400 mr-2">guest@portfolio:</span>
          <input
            type="text"
            className="bg-transparent outline-none text-gray-100 flex-grow"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            autoFocus
          />
        </div>
      </form>
    </div>
  );
};

export default Terminal2;
