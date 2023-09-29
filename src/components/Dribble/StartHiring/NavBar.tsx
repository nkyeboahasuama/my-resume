import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center mx-10  bg-green-400">
      <div className="flex">
        <p>-</p>
        <h1 className="font-semibold italic">Dribble</h1>
      </div>
      <div>
        <button className="bg-black text-white rounded-md p-2">Sign up</button>
      </div>
    </div>
  );
};

export default NavBar;
