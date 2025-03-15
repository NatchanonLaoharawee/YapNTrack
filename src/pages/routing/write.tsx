"use client";

import React from "react";
import { useRouter } from 'next/router';

export default function FeatureWrite() {
    const router = useRouter();
    const { userName } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
        <nav className="flex justify-around w-full p-4 fixed top-0 left-0 z-10 bg-pink-200">
            <button className="bg-purple-300 rounded-full px-4 py-2 ">WRITE</button>
            <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">PAST ENTRIES</button>
            <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">CALENDAR</button>
            <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">LOGIN</button>
        </nav>

        <div className="flex flex-col items-center justify-center min-h-screen pt-24 bg-pink-200">
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold">Hello {userName}!</h1>
                <h1 className="text-lg">Welcome Back :)</h1>
            </div>

            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg mb-4">Mood Calculator</button>
            
            <div className="bg-yellow-100 border-2 border-gray-300 rounded-lg p-6 w-80 h-96 mb-4">
                <div className="border-b-2 border-gray-300 mb-2"></div>
            </div>

            <div className="flex justify-between w-32">
            <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg">&lt;</button>
            <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg">&gt;</button>
            </div>

        </div>
    </div>
  );
};
