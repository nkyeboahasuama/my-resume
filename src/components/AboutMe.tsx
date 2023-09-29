import React from "react";

const AboutMe = () => {
  return (
    <div className="h-screen w-full bg-gray-300 flex justify-center items-center">
      <div className="w-4/5 h-full flex items-center">
        <div
          id="left"
          className="w-1/2 h-1/2  bg-green-500 border-3 border-black"
        >
          <div id="img">
            <div>
              <h1>Nana Kwame Yeboah-Asuama</h1>
              <h4>Software developer</h4>
            </div>
          </div>
        </div>
        <div
          id="right"
          className="w-1/2 h-1/2  mx-20 flex flex-col justify-center items-center"
        >
          {/* <div className=" border-gray-700 border-b-2">
            <h1 className=" text-5xl font-bold text-green-700">
              Nana Kwame Yeboah
            </h1>
            <h3 className=" text-2xl">Frontend developer</h3>
          </div> */}
          {/* <div className=""> */}
          <div className=" h-1/3">
            <p className="font-semibold text-2xl">
              Want to know who I am? I am definately that guy who brings the
              idea to life!
            </p>
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className=" text-center">
              <h1 className="text-2xl text-green-800 font-bold">+03</h1>
              <h3 className="text-green-700">Years experience</h3>
            </div>
            <div>
              <h1 className="text-2xl text-green-800 font-bold">+10</h1>
              <h3 className="text-green-700">Projects</h3>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
