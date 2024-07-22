import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello I am second year student pursuing BTech in Biological Sciences and Bioengineering
          at IIT Kanpur. I cleared JEE advanced one of the toughest entrance exam in the world.
          I like playing chess, programming and listening to music. 
        </p>

        <br />

        <p className="text-xl">
        Currently I am exploring different
        domains to find my true interest. I hope one day I will find it.
          
        </p>
      </div>
    </div>
  );
};

export default About;
