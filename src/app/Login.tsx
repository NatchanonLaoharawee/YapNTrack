import React from "react";
import { useState } from "react";

export default function Login() {
    
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
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
    );
};