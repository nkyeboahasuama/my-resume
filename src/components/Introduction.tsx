import React from "react";

const Introduction = () => {
  return (
    <div className=" w-full h-screen bg-gray-300">
      <div
        id="navigations"
        className="flex justify-center items-center bg-gray-300 border-b-2 border-gray-400 "
      >
        <div className="flex justify-between w-3/4 items-center h-16">
          <div className=" font-bold">@Enkay</div>
          <div className="cursor-pointer flex w-2/5 justify-between list-none">
            <li className="font-semibold">Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Contact</li>
          </div>
        </div>
      </div>
      <div id="body" className="flex justify-center items-center h-3/4 ">
        <div className="w-2/4 h-full flex">
          <div className=" w-1/2 flex items-start justify-center flex-col text-left">
            <div className="mb-5">
              <h1 className="text-green-700 text-5xl font-bold">
                Hello, I am Nana
              </h1>
              <h4 className="text-green-600 text-xl font-semibold">
                Frontend Developer
              </h4>
            </div>
            <p className="text-gray-600 font-thin">
              A software developer with frontend skills. Knowledgable in
              software concepts, development and design.
            </p>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <div className="bg-yellow-500 border-4 border-green-500 w-[20rem] h-[20rem]  rounded-full">
              {/* Circle */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
