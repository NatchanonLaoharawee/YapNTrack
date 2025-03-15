"use client";

import React from "react";
// import LoginNavigation from "./LoginNavigation";
// import Login from "./Login";
import { useState } from "react";
import Link from "next/link";


export default function Home() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
      <nav className="flex justify-around w-full p-4 fixed top-0 left-0 z-10 bg-pink-200">
        <Link href="/routing/write">
          <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2 ">WRITE</button>
        </Link>
        <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">PAST ENTRIES</button>
        <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">CALENDAR</button>
        <button className="bg-purple-300 rounded-full px-4 py-2">LOGIN</button>
      </nav>

      <div className="flex flex-col items-center bg-pink-300 p-8 rounded-lg border-2 border-black mt-8">
            <h1 className="text-2xl mb-4 font-bold">Welcome!</h1>
            <span className="text-center mb-6">
                Welcome to your personalized notebook. 
                <br />
                Feel free to explore and customize it!
            </span>
            <input
                type="text"
                placeholder="USERNAME"
                className="w-85 p-2 mb-4 rounded-3xl border-2 text-center border-black bg-green-200 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-2"
                value={userName}
                onChange={(e) => {setUserName(userName => e.target.value)}}
            />
            <input
                type="password"
                placeholder="PASSWORD"
                className="w-85 p-2 mb-4 rounded-3xl border-2 text-center border-black bg-green-200 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-2"
                value={password}
                onChange={(e) => {setPassword(password => e.target.value)}}
            />
            <div className="w-full flex justify-center">
                <button className="bg-yellow-200 hover:bg-yellow-300 rounded-2xl border-2 px-4 py-1 flex justify-end">sign up</button>
            </div>
        </div> 
    </div>
  );
};