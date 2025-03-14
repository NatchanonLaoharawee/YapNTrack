// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [name, setName] = useState("Friend");
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
//       {/* Navbar */}
//       <nav className="w-full bg-pink-500 text-white py-4 px-8 shadow-md fixed top-0 left-0 z-10">
//         <div className="flex justify-center items-center space-x-8 max-w-4xl mx-auto">
//           <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg">
//             Write
//           </button>
//           <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg">
//             Past Entries
//           </button>
//           <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg">
//             Calendar
//           </button>
//           <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg">
//             Login
//           </button>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center mt-24">
//         <div className="notebook border-2 border-gray-300 rounded-lg p-6">
//           <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
//           <p className="text-gray-600 mb-6">
//             Welcome to your personalized notebook. Feel free to explore and
//             customize it!
//           </p>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import React from "react";
import LoginNavigation from "./LoginNavigation";
import Login from "./Login";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
      <LoginNavigation />  
      <Login />
    </div>
  );
};