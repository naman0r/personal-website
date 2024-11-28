import React from "react";

const Terminal = () => {

    return (
    
      <div>
            <div
                className ="bg-black p-5 rounded-md mx-10 my-10 max-h-[1vh]  text-gray-100 shadow-lg transform translate-y-[80px]"
            > 0 0 0</div>

            <div className="bg-gray-800 p-6 rounded-md mx-10 my-10 max-h-[60vh] overflow-y-scroll shadow-lg text-gray-100 font-mono">
            <div className="text-green-400 mb-4"> Naman.currentLocation</div>
            <div className="text-gray-100 mb-4">"Boston, MA"</div>

            <div className="text-green-400 mb-4"> Naman.contactInfo</div>
            <div className="text-gray-100 mb-4">
            ["naman@example.com", "LinkedIn", "GitHub"]
            </div>

            <div className="text-green-400 mb-4"> Naman.resume</div>
            <div className="text-gray-100 mb-4">"naman.pdf"</div>

            <div className="text-green-400 mb-4"> Naman.interests</div>
            <div className="text-gray-100 mb-4">
            ["coding", "ice hockey", "neuroscience", "entrepreneurship"]
            </div>

            <div className="text-green-400 mb-4"> Naman.education</div>
            <div className="text-gray-100 mb-4">
            "B.Sc. Computer Science and Business Administration - Northeastern University"
            </div>

            <div className="text-green-400 mb-4"> Naman.skills</div>
            <div className="text-gray-100">
            ["JavaScript", "React", "Tailwind", "Python", "Swift", "Git", "Racket"]
            </div>
         </div>
    </div>
  );
};


export default Terminal;
