import React from "react";
import Terminal from "@/components/Terminal";

const page = () => {
  return (
    <>
      <p className="text-center text-sm text-gray-400">
        Hey! This is a mock terminal. Type 'Help' to find a list of commands
      </p>
      <Terminal />{" "}
    </>
  );
};

export default page;
