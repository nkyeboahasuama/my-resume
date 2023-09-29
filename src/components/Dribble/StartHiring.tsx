import React from "react";

const StartHiring = () => {
  return (
    <div className="mx-10 h-screen flex flex-col justify-between">
      <div className="flex justify-between items-center bg-green-400 h-16">
        <div className="flex">
          <p>-</p>
          <h1 className="font-semibold italic">Dribble</h1>
        </div>
        <div>
          <button className="bg-black text-white rounded-full py-2 px-4">
            Sign up
          </button>
        </div>
      </div>

      <div className="h-4/5 bg-red-500">
        <div className="bg-green-100 rounded-full text-center px-4 py-1 font-bold text-gray-600">
          Over 3 million ready-to-work creatives in our community!
        </div>
        <div>
          <h1 className="text-5xl text-center p-5">
            Hire the world's top creative talent.
          </h1>
        </div>
        <div>
          <p>
            Connect with a community of millions of top-rated designers &
            agencies around the world
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartHiring;
