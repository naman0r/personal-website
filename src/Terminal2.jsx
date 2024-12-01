import React, { useState } from "react";

const Terminal2 = () => {
  const [output, setOutput] = useState([]);
  const [command, setCommand] = useState("");
  const [guest, setGuest] = useState("guest"); // Replace let with useState for persistence

  const handleCommand = (e) => {
    e.preventDefault();

    const newOutput = [...output];

    // Check for the `change name` command
    if (command.toLowerCase().startsWith("change name")) {
      const newName = command.split(" ")[2]; // Extract the new name
      if (newName) {
        setGuest(newName); // Update the guest variable using React state
        newOutput.push(
          `> ${command}`,
          `Name successfully changed to "${newName}"`
        );
      } else {
        newOutput.push(
          `> ${command}`,
          "Error: Please provide a name after 'change name'."
        );
      }
    } else {
      // Handle other commands
      switch (command.toLowerCase()) {
        case "about":
          newOutput.push(
            "> about",
            "Hi! I'm Naman, a software enthusiast who loves building creative Products."
          );
          break;
        case "projects":
          newOutput.push(
            "> projects",
            "I love the process of bringing my Ideas to life. Check out the 'Projects' page through the top navigation pannelFor a detailed",
            "look at some of my Projects."
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
            "> education \n",
            "B.S in Computer Science and Fintech, Minor in Mechanical Engineering and Mathematics (undeclared) @ Northeastern University [Boston]",
            "Singapore American School High School Class of 2024"
          );
          break;
        case "resume":
          newOutput.push(
            "> resume",
            "Link:",
            <a href="./assets/temporaryResume.pdf" download>
              {" "}
              [Download here]
            </a>
          ); // link this ASAP.
          break;
        case "funfact":
          newOutput.push(
            "> funfact",
            "My Favorite language to work in is Java"
          );
          break;

        case "help":
          newOutput.push(
            "> help",
            "This is a mock Terminal which is interractive and made so that you can get to know me. Here are some of the commands you can run:",
            "about, projects, skills, education, resume, funfact, change name _____, clear, ..."
          );
          break;
        case "clear":
          setOutput([]);
          setCommand("");
          return;
        default:
          newOutput.push(
            `> ${command}`,
            "Command not found. Try: about, projects, skills, education, resume, funfact, change name <new_name>, or clear."
          );
      }
    }

    setOutput(newOutput);
    setCommand(""); // Clear the command in
  };

  return (
    <div
      id="terminal"
      className="bg-gray-800 p-6 rounded-md mx-10 my-10 max-h-[60vh] overflow-y-scroll shadow-lg text-gray-100 font-mono"
    >
      <div className="text-green-400 mb-4">
        Welcome to your Terminal, {guest}!
      </div>
      <div className="text-gray-400">
        Type a command (e.g., `about`, `projects`, `skills`, `education`,
        `resume`, `funfact`, `change name`, `clear`):
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
          <span className="text-green-400 mr-2">{guest}@device: </span>
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
