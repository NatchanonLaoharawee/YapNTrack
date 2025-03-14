import React from "react";

export default function LoginNavigation(){
  return (
    <nav className="flex justify-around w-full p-4 fixed top-0 left-0 z-10 bg-pink-200">
      <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2 ">WRITE</button>
      <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">PAST ENTRIES</button>
      <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">CALENDAR</button>
      <button className="bg-purple-300 rounded-full px-4 py-2">LOGIN</button>
    </nav>
  );
};