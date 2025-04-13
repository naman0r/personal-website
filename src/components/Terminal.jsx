import React, { useState, useEffect, useRef } from "react";
import {
  FaTerminal,
  FaTimes,
  FaMinus,
  FaExpand,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaGamepad,
  FaLaptopCode,
  FaCoffee,
  FaStar,
} from "react-icons/fa";

const Terminal = () => {
  const [output, setOutput] = useState([
    { type: "system", content: "Website Terminal v1.0.0" },
    { type: "system", content: "Type 'help' to see available commands" },
  ]);
  const [command, setCommand] = useState("");
  const [guest, setGuest] = useState("guest");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  const [gameState, setGameState] = useState(null);

  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  // Available commands for autocomplete
  const availableCommands = [
    "about",
    "projects",
    "skills",
    "education",
    "resume",
    "funfact",
    "clear",
    "help",
    "social",
    "contact",
    "date",
    "time",
    "weather",
    "echo",
    "change name",
    "ascii",
    "joke",
    "quote",
    "matrix",
    "game",
    "github",
    "spotify",
    "coffee",
    "neofetch",
    "banner",
    "ls",
    "exit",
  ];

  // Auto-scroll to bottom when output changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  // Focus input when terminal clicked
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle keyboard navigation through command history
  const handleKeyDown = (e) => {
    // Up arrow key
    if (e.key === "ArrowUp" && commandHistory.length > 0) {
      e.preventDefault();
      const newIndex =
        historyIndex < commandHistory.length - 1
          ? historyIndex + 1
          : historyIndex;
      setHistoryIndex(newIndex);
      setCommand(commandHistory[commandHistory.length - 1 - newIndex] || "");
    }
    // Down arrow key
    else if (e.key === "ArrowDown" && historyIndex >= 0) {
      e.preventDefault();
      const newIndex = historyIndex > 0 ? historyIndex - 1 : -1;
      setHistoryIndex(newIndex);
      setCommand(
        newIndex === -1
          ? ""
          : commandHistory[commandHistory.length - 1 - newIndex] || ""
      );
    }
    // Tab key for autocompletion
    else if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion();
    }
    // Escape key to hide suggestions
    else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  // Handle tab completion
  const handleTabCompletion = () => {
    if (command.trim() === "") return;

    const matchingCommands = availableCommands.filter((cmd) =>
      cmd.startsWith(command.toLowerCase())
    );

    if (matchingCommands.length === 1) {
      // If there's only one match, autocomplete it
      setCommand(matchingCommands[0]);
      setShowSuggestions(false);
    } else if (matchingCommands.length > 1) {
      // Show suggestions
      setSuggestions(matchingCommands);
      setShowSuggestions(true);
    }
  };

  // Select a suggestion
  const selectSuggestion = (suggestion) => {
    setCommand(suggestion);
    setShowSuggestions(false);
    inputRef.current.focus();
  };

  // Handle number guessing game
  const handleGameCommand = (input) => {
    if (!gameState) {
      // Initialize game
      const targetNumber = Math.floor(Math.random() * 100) + 1;
      setGameState({
        targetNumber,
        guesses: 0,
        won: false,
      });
      return [
        { type: "section", content: "🎮 Number Guessing Game" },
        {
          type: "output",
          content: "I'm thinking of a number between 1 and 100.",
        },
        {
          type: "output",
          content: "Type a number to guess, or 'exit game' to quit.",
        },
      ];
    }

    if (input.toLowerCase() === "exit game") {
      setGameActive(false);
      setGameState(null);
      return [{ type: "output", content: "Game over. Thanks for playing!" }];
    }

    const guess = parseInt(input, 10);
    if (isNaN(guess)) {
      return [
        {
          type: "error",
          content: "Please enter a valid number or 'exit game' to quit.",
        },
      ];
    }

    const newGameState = {
      ...gameState,
      guesses: gameState.guesses + 1,
    };

    if (guess === gameState.targetNumber) {
      newGameState.won = true;
      setGameState(newGameState);
      setGameActive(false);
      return [
        {
          type: "success",
          content: `🎉 Congratulations! You guessed the number ${gameState.targetNumber} in ${newGameState.guesses} guesses!`,
        },
        { type: "output", content: "Game over. Type 'game' to play again." },
      ];
    } else if (guess < gameState.targetNumber) {
      setGameState(newGameState);
      return [
        { type: "output", content: "Too low! Try a higher number." },
        { type: "output", content: `Guesses so far: ${newGameState.guesses}` },
      ];
    } else {
      setGameState(newGameState);
      return [
        { type: "output", content: "Too high! Try a lower number." },
        { type: "output", content: `Guesses so far: ${newGameState.guesses}` },
      ];
    }
  };

  // Get ASCII art banner
  const getASCIIArt = (type) => {
    switch (type) {
      case "name":
        return [
          {
            type: "ascii",
            content: [
              "  _   _                               _____           _       ",
              " | \\ | |                             |  __ \\         (_)      ",
              " |  \\| | __ _ _ __ ___   __ _ _ __   | |__) |   _ ___ _  __ _ ",
              " | . ` |/ _` | '_ ` _ \\ / _` | '_ \\  |  _  / | | / __| |/ _` |",
              " | |\\  | (_| | | | | | | (_| | | | | | | \\ \\ |_| \\__ \\ | (_| |",
              " |_| \\_|\\__,_|_| |_| |_|\\__,_|_| |_| |_|  \\_\\__,_|___/_|\\__,_|",
              "                                                              ",
            ],
          },
        ];
      case "coffee":
        return [
          {
            type: "ascii",
            content: [
              "      ( (    ",
              "       ) )   ",
              "    .______.  ",
              "    |      |] ",
              "    \\      /  ",
              "     `----'   ",
            ],
          },
        ];
      case "computer":
        return [
          {
            type: "ascii",
            content: [
              "     .---.         ",
              "     |   |         ",
              "     |   |         ",
              "     |   |         ",
              "     |   |.--.     ",
              "     |   |   :     ",
              "     |   |   |     ",
              "     |   |   |     ",
              "     |   |   |     ",
              "     |   |   |     ",
              "     |   |   |     ",
              " ____|   |   |     ",
              "|    |   |   |     ",
              "|    |   |   |     ",
              "|____|   |___|     ",
              "     '---'         ",
            ],
          },
        ];
      default:
        return [{ type: "error", content: "ASCII art not found" }];
    }
  };

  // Get jokes
  const getRandomJoke = () => {
    const jokes = [
      "Why don't programmers like nature? It has too many bugs.",
      "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'",
      "What's a programmer's favorite hangout place? The Foo Bar.",
      "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
      "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
      "Why do programmers always confuse Halloween and Christmas? Because 31 OCT = 25 DEC.",
      "A programmer's wife tells him to go to the store and 'get a gallon of milk, and if they have eggs, get a dozen.' He returns with 13 gallons of milk.",
      "What do you call 8 hobbits? A hobbyte.",
      "What's the object-oriented way to become wealthy? Inheritance.",
      "Why did the functions stop calling each other? They had too many arguments.",
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  };

  // Get quotes
  const getRandomQuote = () => {
    const quotes = [
      {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
      },
      {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House",
      },
      {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
      },
      {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
      },
      {
        text: "Experience is the name everyone gives to their mistakes.",
        author: "Oscar Wilde",
      },
      {
        text: "Programming isn't about what you know; it's about what you can figure out.",
        author: "Chris Pine",
      },
      {
        text: "The most disastrous thing that you can ever learn is your first programming language.",
        author: "Alan Kay",
      },
      {
        text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
        author: "Dan Salomon",
      },
      {
        text: "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
        author: "Larry Niven",
      },
      {
        text: "Walking on water and developing software from a specification are easy if both are frozen.",
        author: "Edward V. Berard",
      },
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  // Command handler
  const handleCommand = (e) => {
    e.preventDefault();

    if (!command.trim()) return;

    // Add command to history
    setCommandHistory([...commandHistory, command]);
    setHistoryIndex(-1);

    // Check if we're in a game
    if (gameActive) {
      const gameOutput = handleGameCommand(command);
      setOutput([
        ...output,
        { type: "command", content: command },
        ...gameOutput,
      ]);
      setCommand("");
      return;
    }

    const newOutput = [...output, { type: "command", content: command }];
    setShowSuggestions(false);

    // Parse command (handle multi-word commands)
    const args = command.trim().split(" ");
    const mainCommand = args[0].toLowerCase();

    // Check for commands
    if (command.toLowerCase().startsWith("change name")) {
      const newName = args[2]; // Extract the new name
      if (newName) {
        setGuest(newName);
        newOutput.push({
          type: "success",
          content: `Name successfully changed to "${newName}"`,
        });
      } else {
        newOutput.push({
          type: "error",
          content: "Error: Please provide a name after 'change name'.",
        });
      }
    } else if (command.toLowerCase().startsWith("echo")) {
      const message = command.substring(5);
      if (message.trim()) {
        newOutput.push({ type: "output", content: message.trim() });
      } else {
        newOutput.push({
          type: "error",
          content: "Error: Echo requires a message.",
        });
      }
    } else {
      // Handle other commands
      switch (mainCommand) {
        case "about":
          newOutput.push(
            {
              type: "output",
              content:
                "Hi! I'm Naman, a software enthusiast who loves building creative Products.",
            },
            {
              type: "output",
              content:
                "I'm currently studying Computer Science and Business Administration at Northeastern University.",
            },
            {
              type: "output",
              content:
                "I have a passion for solving problems with code and creating useful applications.",
            }
          );
          break;
        case "projects":
          newOutput.push(
            {
              type: "output",
              content:
                "I love the process of bringing my Ideas to life. Check out the 'Projects' page for a detailed look at some of my Projects.",
            },
            {
              type: "link",
              content: "Click here to go to my projects page!",
              url: "./projects",
            }
          );
          break;
        case "skills":
          newOutput.push(
            { type: "section", content: "Programming Languages:" },
            {
              type: "list",
              content: ["JavaScript", "Python", "Java", "TypeScript"],
            },
            { type: "section", content: "Frontend:" },
            {
              type: "list",
              content: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
            },
            { type: "section", content: "Backend:" },
            {
              type: "list",
              content: ["Node.js", "Flask", "FastAPI", "MongoDB", "Supabase"],
            }
          );
          break;
        case "education":
          newOutput.push(
            { type: "section", content: "Education:" },
            {
              type: "output",
              content: "B.S in Computer Science and Business Administration",
            },
            { type: "output", content: "Minor in Mathematics (undeclared)" },
            { type: "output", content: "Northeastern University [Boston]" },
            { type: "output", content: "Deans List" },
            {
              type: "output",
              content: "Singapore American School High School Class of 2024",
            }
          );
          break;
        case "resume":
          newOutput.push(
            {
              type: "output",
              content: "My professional resume is available at:",
            },
            { type: "link", content: "View my resume", url: "/resume" }
          );
          break;
        case "funfact":
          const funFacts = [
            "I can crack my neck really loud",
            "I've visited 20+ countries around the world",
            "I built my first website when I was 12 years old",
            "I'm a coffee enthusiast (try the 'coffee' command)",
            "I can solve a Rubik's cube in under 2 minutes",
            "My favorite programming language is Python",
            "I'm a night owl and do my best coding after midnight",
          ];
          newOutput.push({
            type: "output",
            content: funFacts[Math.floor(Math.random() * funFacts.length)],
          });
          break;
        case "social":
          newOutput.push(
            { type: "section", content: "Find me on:" },
            {
              type: "link",
              content: "GitHub",
              url: "https://github.com/naman0r",
              icon: "github",
            },
            {
              type: "link",
              content: "LinkedIn",
              url: "https://linkedin.com/in/namanrusia",
              icon: "linkedin",
            }
          );
          break;
        case "contact":
          newOutput.push(
            { type: "output", content: "Feel free to reach out to me at:" },
            {
              type: "link",
              content: "your.email@example.com",
              url: "mailto:your.email@example.com",
            }
          );
          break;
        case "date":
          newOutput.push({
            type: "output",
            content: new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          });
          break;
        case "time":
          newOutput.push({
            type: "output",
            content: new Date().toLocaleTimeString("en-US"),
          });
          break;
        case "weather":
          newOutput.push(
            { type: "section", content: "Current Weather:" },
            { type: "output", content: "Boston, MA: 72°F, Partly Cloudy" },
            {
              type: "output",
              content: "For real-time weather, check your local forecast.",
            }
          );
          break;
        case "game":
          setGameActive(true);
          newOutput.push(
            { type: "section", content: "🎮 Number Guessing Game" },
            {
              type: "output",
              content: "I'm thinking of a number between 1 and 100.",
            },
            {
              type: "output",
              content: "Type a number to guess, or 'exit game' to quit.",
            }
          );
          // Initialize game
          const targetNumber = Math.floor(Math.random() * 100) + 1;
          setGameState({
            targetNumber,
            guesses: 0,
            won: false,
          });
          break;
        case "ascii":
          if (args.length > 1) {
            newOutput.push(...getASCIIArt(args[1]));
          } else {
            newOutput.push(...getASCIIArt("name"));
          }
          break;
        case "joke":
          newOutput.push(
            { type: "section", content: "Here's a programming joke:" },
            { type: "output", content: getRandomJoke() }
          );
          break;
        case "quote":
          const quote = getRandomQuote();
          newOutput.push(
            { type: "section", content: "Inspirational Quote:" },
            { type: "output", content: `"${quote.text}"` },
            { type: "output", content: `- ${quote.author}` }
          );
          break;
        case "github":
          newOutput.push(
            { type: "section", content: "GitHub Stats:" },
            { type: "output", content: "Username: naman0r" },
            { type: "output", content: "Repositories: 15+" },
            {
              type: "output",
              content: "Most used languages: JavaScript, Python, Java",
            },
            {
              type: "link",
              content: "View GitHub Profile",
              url: "https://github.com/naman0r",
              icon: "github",
            }
          );
          break;
        case "spotify":
          newOutput.push(
            { type: "section", content: "🎵 Currently Vibing To:" },
            { type: "output", content: "Levitating - Dua Lipa" },
            { type: "output", content: "Album: Future Nostalgia" },
            { type: "output", content: "Playlist: Coding Focus" }
          );
          break;
        case "coffee":
          newOutput.push(
            { type: "section", content: "☕ Coffee Break!" },
            ...getASCIIArt("coffee"),
            {
              type: "output",
              content: "Brewing a fresh cup of coffee for you...",
            },
            {
              type: "output",
              content: "Favorite brew: Ethiopian pour-over, black.",
            }
          );
          break;
        case "neofetch":
          newOutput.push(
            { type: "section", content: "System Information:" },
            ...getASCIIArt("computer"),
            { type: "output", content: "OS: macOS Sonoma" },
            { type: "output", content: "Host: Naman's MacBook Pro" },
            { type: "output", content: "Kernel: Darwin" },
            { type: "output", content: "Shell: zsh" },
            { type: "output", content: "Editor: VS Code" },
            { type: "output", content: "Terminal: iTerm2" },
            { type: "output", content: "Uptime: Always coding" }
          );
          break;
        case "banner":
          newOutput.push(
            ...getASCIIArt("name"),
            { type: "output", content: "Welcome to my interactive terminal!" },
            {
              type: "output",
              content: "Type 'help' to see what commands are available.",
            }
          );
          break;
        case "ls":
          newOutput.push(
            { type: "section", content: "Directory Contents:" },
            {
              type: "table",
              content: [
                { command: "about.txt", description: "Personal information" },
                { command: "projects/", description: "My coding projects" },
                { command: "skills.json", description: "Technical skills" },
                { command: "resume.pdf", description: "My resume" },
                { command: "contact.md", description: "Contact information" },
                { command: "games/", description: "Terminal games" },
                { command: "config.js", description: "Terminal configuration" },
              ],
            }
          );
          break;
        case "help":
          newOutput.push(
            { type: "section", content: "Available Commands:" },
            {
              type: "table",
              content: [
                { command: "about", description: "Learn about me" },
                { command: "projects", description: "View my projects" },
                { command: "skills", description: "See my technical skills" },
                {
                  command: "education",
                  description: "View my educational background",
                },
                {
                  command: "resume",
                  description: "View my professional resume",
                },
                {
                  command: "funfact",
                  description: "Read a random fun fact about me",
                },
                {
                  command: "social",
                  description: "Get links to my social profiles",
                },
                {
                  command: "contact",
                  description: "Get my contact information",
                },
                { command: "date", description: "Display the current date" },
                { command: "time", description: "Display the current time" },
                { command: "weather", description: "Check the weather" },
                { command: "echo [message]", description: "Display a message" },
                {
                  command: "change name [name]",
                  description: "Change your guest name",
                },
                { command: "ascii [type]", description: "Show ASCII art" },
                { command: "joke", description: "Tell a programming joke" },
                {
                  command: "quote",
                  description: "Show an inspirational quote",
                },
                { command: "game", description: "Play a number guessing game" },
                { command: "github", description: "View my GitHub stats" },
                {
                  command: "spotify",
                  description: "See what I'm listening to",
                },
                { command: "coffee", description: "Take a coffee break" },
                { command: "neofetch", description: "Display system info" },
                { command: "banner", description: "Show welcome banner" },
                { command: "ls", description: "List directory contents" },
                { command: "clear", description: "Clear the terminal" },
                { command: "exit", description: "Close the terminal" },
              ],
            }
          );
          break;
        case "clear":
          setOutput([{ type: "system", content: "Terminal cleared" }]);
          setCommand("");
          return;
        case "exit":
          newOutput.push({ type: "system", content: "Closing terminal..." });
          setTimeout(() => {
            setMinimized(true);
          }, 1000);
          break;
        default:
          if (mainCommand.startsWith("sudo")) {
            newOutput.push({
              type: "error",
              content:
                "Nice try! You don't have sudo privileges on this system.",
            });
          } else if (mainCommand === "rm" && args.includes("-rf")) {
            newOutput.push({
              type: "error",
              content:
                "Whoa there! Let's not delete everything. This terminal is read-only.",
            });
          } else if (
            mainCommand === "42" ||
            command === "what is the meaning of life"
          ) {
            newOutput.push({
              type: "output",
              content: "42. Ah, I see you're a person of culture as well!",
            });
          } else if (
            command.toLowerCase().includes("hello") ||
            command.toLowerCase().includes("hi")
          ) {
            newOutput.push({
              type: "output",
              content: `Hello there, ${guest}! Type 'help' to see available commands.`,
            });
          } else {
            newOutput.push({
              type: "error",
              content: `Command not found: ${command}. Type 'help' to see available commands.`,
            });
          }
      }
    }

    setOutput(newOutput);
    setCommand("");
  };

  // Render specific output based on type
  const renderOutput = (item, index) => {
    switch (item.type) {
      case "command":
        return (
          <div key={index} className="flex mb-2">
            <span className="text-green-400 font-bold mr-2">
              {guest}@portfolio:~$
            </span>
            <span className="text-gray-100">{item.content}</span>
          </div>
        );
      case "error":
        return (
          <div key={index} className="text-red-400 ml-4 mb-2">
            {item.content}
          </div>
        );
      case "success":
        return (
          <div key={index} className="text-green-400 ml-4 mb-2">
            {item.content}
          </div>
        );
      case "system":
        return (
          <div key={index} className="text-purple-400 mb-2">
            {item.content}
          </div>
        );
      case "link":
        return (
          <div key={index} className="ml-4 mb-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-yellow-400 hover:text-yellow-200 hover:underline transition-colors"
            >
              {item.icon === "github" && <FaGithub className="mr-2" />}
              {item.icon === "linkedin" && <FaLinkedin className="mr-2" />}
              {item.content}
            </a>
          </div>
        );
      case "section":
        return (
          <div key={index} className="text-cyan-400 font-bold my-1">
            {item.content}
          </div>
        );
      case "list":
        return (
          <ul key={index} className="list-disc ml-8 mb-2 text-gray-100">
            {item.content.map((listItem, listIndex) => (
              <li key={listIndex} className="mb-1">
                {listItem}
              </li>
            ))}
          </ul>
        );
      case "table":
        return (
          <div key={index} className="ml-4 my-2">
            {item.content.map((row, rowIndex) => (
              <div key={rowIndex} className="flex mb-1">
                <span className="text-yellow-400 w-48 mr-4">{row.command}</span>
                <span className="text-gray-100">{row.description}</span>
              </div>
            ))}
          </div>
        );
      case "ascii":
        return (
          <div
            key={index}
            className="font-mono text-green-300 text-xs my-2 whitespace-pre overflow-x-auto"
          >
            {item.content.map((line, lineIndex) => (
              <div key={lineIndex}>{line}</div>
            ))}
          </div>
        );
      default:
        return (
          <div key={index} className="text-gray-100 ml-4 mb-1">
            {item.content}
          </div>
        );
    }
  };

  if (minimized) {
    return (
      <div
        className="fixed bottom-8 right-8 bg-gray-800 text-green-400 w-12 h-12 rounded-full flex items-center justify-center text-xl cursor-pointer shadow-lg hover:scale-110 transition-transform z-50"
        onClick={() => setMinimized(false)}
        title="Open Terminal"
      >
        <FaTerminal />
      </div>
    );
  }

  return (
    <div
      id="terminal"
      className={`bg-gray-900 rounded-lg shadow-2xl w-[85%] max-w-3xl mx-auto my-8 flex flex-col overflow-hidden border border-gray-700 transition-all duration-300 ${
        maximized ? "fixed inset-4 w-auto max-w-none h-auto z-50" : "h-[500px]"
      }`}
      ref={terminalRef}
      onClick={focusInput}
    >
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700 select-none">
        <div className="flex items-center text-gray-100 text-sm">
          <FaTerminal className="mr-3 text-green-400" />
          <span>{guest}@portfolio: ~</span>
        </div>
        <div className="flex gap-2">
          <button
            className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center text-[8px] text-gray-800 hover:opacity-80 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setMinimized(true);
            }}
            title="Minimize"
          >
            <FaMinus className="opacity-0 group-hover:opacity-100" />
          </button>
          <button
            className="w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-[8px] text-gray-800 hover:opacity-80 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setMaximized(!maximized);
            }}
            title={maximized ? "Restore" : "Maximize"}
          >
            <FaExpand className="opacity-0 group-hover:opacity-100" />
          </button>
          <button
            className="w-4 h-4 rounded-full bg-red-400 flex items-center justify-center text-[8px] text-gray-800 hover:opacity-80 focus:outline-none"
            onClick={(e) => {
              e.stopPropagation();
              setMinimized(true);
            }}
            title="Close"
          >
            <FaTimes className="opacity-0 group-hover:opacity-100" />
          </button>
        </div>
      </div>

      <div
        className="flex-grow overflow-y-auto p-4 text-gray-100 font-mono bg-gray-900 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800"
        ref={outputRef}
      >
        {output.map((item, index) => renderOutput(item, index))}
      </div>

      <form
        onSubmit={handleCommand}
        className="flex items-center px-4 py-3 bg-gray-900 border-t border-gray-700"
      >
        <span className="text-green-400 font-bold mr-2 whitespace-nowrap">
          {guest}@portfolio:~$
        </span>
        <input
          type="text"
          className="bg-transparent border-none text-gray-100 font-mono w-full focus:outline-none"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
          autoFocus
        />
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute bottom-[50px] left-4 bg-gray-800 border border-gray-700 rounded max-h-[200px] overflow-y-auto z-10 shadow-lg">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 text-gray-100 cursor-pointer hover:bg-gray-700"
              onClick={() => selectSuggestion(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Terminal;
