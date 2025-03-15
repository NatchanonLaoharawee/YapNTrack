  // "use client";

  // import Image from "next/image";
  // import React from "react";
  // import Navigation from "../components/Navigation";
  // import Login from "../components/Login";
  // // import { Geist, Geist_Mono } from "next/font/google";
  // // import { useState, createContext, useContext } from "react";
  // import { useState } from "react";
  // import { Box, Button, Flex, Input, Text, VStack } from '@chakra-ui/react';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return (
//     <div
//       className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
//     >
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/pages/index.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// export default function Home() {

//     // const sayHello = (name: string) => {
//   //   alert(`Hello, ${name}!`);
//   // };

//   function sayHello(name: string) {
//     alert(`Hello, ${name}!`);
//   }

//   return (
//     <div className="App">
//       {/* <button onClick={() => {sayHello("Serial woofer");}}> */}
//       <button onClick={() => {sayHello("Serial woofer")}}>
//          Click me!!
//       </button>
//     </div>
//   );
// }


// export default function Home() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <p>Count: {count}</p>
//       <button onClick={function() {setCount(count + 1)}}>
//         Click me!!
//       </button>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div>Hello World</div>
//   );
// }

/**
 * Lets define what the structure of a TV Show is.
 * A TV Show has a title, a list of actors and a year.
 */
// interface TVShow {
//   title: string;
//   actors: string[] /* Because we have a list, we use an array */;
//   year: number;
// }

// /**
//  * Let's define our list of TV Shows.
//  * We can use the interface we defined above to make sure we have the correct structure.
//  */
// const tvShows: TVShow[] = [
//   {
//     title: "Breaking Bad",
//     actors: ["Bryan Cranston", "Aaron Paul"],
//     year: 2008,
//   },
//   {
//     title: "Game of Thrones",
//     actors: ["Emilia Clarke", "Kit Harington"],
//     year: 2011,
//   },
//   {
//     title: "Stranger Things",
//     actors: ["Millie Bobby Brown", "Finn Wolfhard"],
//     year: 2016,
//   },
//   {
//     title: "The Mandalorian",
//     actors: ["Pedro Pascal", "Gina Carano"],
//     year: 2019,
//   },
//   {
//     title: "The Witcher",
//     actors: ["Henry Cavill", "Anya Chalotra"],
//     year: 2019,
//   },
// ];

/**
 * We can define a function to format the title and year of a TV Show.
 * Notice how we can make sure that we pass in a TV Show object into this function,
 * by typing the parameter as TVShow.
 *
 * We can also type the return value of the function, in this case a string.
 *
 * If we were to pass in a string or a number into this function, TypeScript would throw an error.
 * If we were to rteturn a number or an object, TypeScript would also throw an error.
 *
 * Why? Because we defined the parameter and return value of the function to be of type TVShow and string.
 *
 * Anything else would be invalid. Try it yourself, try changing this function to return a number or an object.
 */
// function formatTitleAndYear(show: TVShow): string {
//   return `${show.title} (${show.year})`;
//   // return 1;
// }

// export default function Home() {
//   return (
//     <div>
//       <h1>Example TV Shows</h1>
//       <ul>
//         {/* The first argument to map is the element itself, the second is the index */}
//         {tvShows.map((show, index) => (
//           <li key={index}>
//             {/**
//              * What is this key thing?
//              *
//              * React needs a way to identify each element in a list, so it can keep track
//              * of which elements have changed, been added or removed. Keys have to be unique
//              * and stable, meaning they should not change between renders.
//              *
//              * In this case, we are using the index of the element in the array as the key.
//              * This is not ideal, because if the array changes, the index of each element will change,
//              * however, it is fine for this example as we have a static array which will not change.
//              *
//              * We can use the function we defined above to format the title and year */}
//             <strong>{formatTitleAndYear(show)}</strong>
//             <ul>
//               {/* Lets list the actors of the TV Show */}
//               {show.actors.map((actor, actorIndex) => (
//                 <li key={actorIndex}>{actor}</li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

/**
 * React components are just functions, we can define them as such.
 * And we can use them in other components, a bit like how you can
 * use functions in other functions.
 */
// export function Shows() {
//   return (
//     <ul>
//       {tvShows.map((show) => (
//         <li key={show.title}>
//           <h2>{show.title}</h2>
//           <p>Actors: {show.actors.join(", ")}</p>
//           <p>Year: {show.year}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

// /**
//  * Lets make another component, a search bar.
//  * This component will be used to search for TV Shows.
//  *
//  * We won't make it work yet, but let's just play with multiple
//  * components.
//  */
// export function Search() {
//   return (
//     <div>
//       <input type="text" placeholder="Search..." />
//     </div>
//   );
// }

// /**
//  * We can use these components in our main component.
//  * This is a good way to split up our code into smaller, more manageable parts.
//  *
//  * In this case we want to show a search bar and a list of TV Shows.
//  *
//  * Try duplicating the Shows component and see what happens. Will it display more than once?
//  */
// export default function Home() {
//   return (
//     <div>
//       <Search />
//       <Shows />
//     </div>
//   );
// }


/* This is the main component of our page */
// export default function Home() {
//   /* This function will be called when the button is clicked */
//   const handleClick = () => {
//     /* Display an alert with a message */
//     alert("Button was clicked!");
//   };

//   // function handleClick() {
//   //   alert("Button was clicked!");
//   // }

//   /* The return statement defines what will be rendered on the screen */
//   return (
//     <div>
//       {/* This is a button element. When it is clicked, the handleClick function will be called */}
//       <button onClick={handleClick}>Click Me</button>
//       {/* <button onClick={() => {handleClick()}}>Click Me</button> */}
//     </div>
//   );
// }

// const func = (count: number) : number => count + 1;

// export default function Home() {
//   /**
//    * This is a state hook, we can use it to keep track of the count
//    *
//    * count is the current value of the state
//    * setCount is a function that we can use to update the state
//    *
//    * useState is a generic function, we can pass in the type of the state
//    * in this case, we are using a number so we can tell React that the state
//    * will always be a number
//    *
//    * This way if we do something silly like setCount("hello"), TypeScript will
//    * throw an error and tell us we are wrong!
//    *
//    * */
//   const [count, setCount] = useState<number>(0);

//   // const myFunction = (count: number) : number => {return count+1;}
//   // function myFunc(count: number) : number {return count+1;}

//   return (
//     <div>
//       {/* React will automatically re-render the component when the state changes */}
//       <p>Counter: {count}</p>
//       <Button colorPalette="blue" onClick={() => {setCount((count) => count + 1)}}>Increment</Button>
//       <br /><br />
//       <Button colorPalette="blue" onClick={() => {setCount((count) => count - 1)}}>Decrement</Button>
//       {/* <button onClick={() => {setCount(count + 1)}}>Increment</button> */}
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
//       <Navigation />  
//       <Login />
//     </div>
//   );
// };

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