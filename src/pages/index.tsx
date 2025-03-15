// "use client";

// import React from "react";
// // import LoginNavigation from "./LoginNavigation";
// // import Login from "./Login";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from 'next/router';

// export default function Home() {
//   const [userName, setUserName] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   const router = useRouter();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
//       <nav className="flex justify-around w-full p-4 fixed top-0 left-0 z-10 bg-pink-200">
//         <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2 ">WRITE</button>
//         <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">PAST ENTRIES</button>
//         <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">CALENDAR</button>
//         <button className="bg-purple-300 rounded-full px-4 py-2">LOGIN</button>
//       </nav>

//       <div className="flex flex-col items-center bg-pink-300 p-8 rounded-lg border-2 border-black mt-8">
//             <h1 className="text-2xl mb-4 font-bold">Welcome!</h1>
//             <span className="text-center mb-6">
//                 Welcome to your personalized notebook. 
//                 <br />
//                 Feel free to explore and customize it!
//             </span>
//             <input
//                 type="text"
//                 placeholder="USERNAME"
//                 className="w-85 p-2 mb-4 rounded-3xl border-2 text-center border-black bg-green-200 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-2"
//                 value={userName}
//                 onChange={(e) => {setUserName(userName => e.target.value)}}
//             />
//             <input
//                 type="password"
//                 placeholder="PASSWORD"
//                 className="w-85 p-2 mb-4 rounded-3xl border-2 text-center border-black bg-green-200 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-2"
//                 value={password}
//                 onChange={(e) => {setPassword(password => e.target.value)}}
//             />
//             <div className="w-full flex justify-center">
//               <button 
//                 className="bg-yellow-200 hover:bg-yellow-300 rounded-2xl border-2 px-4 py-1 flex justify-end"
//                 onClick={() => {router.push({
//                   pathname: "/routing/write",
//                   query: {userName}
//                 })}}
//               >sign up</button>
//             </div>
//         </div> 
//     </div>

    
//   );
// };

"use client";

import React from "react";
import {
    Box,
    Button,
    Container,
    Heading,
    Input,
    VStack,
    HStack,
    Text,
    IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function Home() {

    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const router = useRouter();

    return (
        <Container maxW="2xl" py={8} bg="#FFD6E0" minH="100vh" centerContent>

            {/* 🔹 Navbar */}
            <nav
                style={{
                    padding: "10px",
                    backgroundColor: "#f8d7da",
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                }}
            >
                {[
                    { text: "WRITE", href: "/routing/write", bgColor: "#f48c8c" },
                    { text: "PAST ENTRIES", href: "/routing/past", bgColor: "#f48c8c" },
                    { text: "CALENDAR", href: "/routing/calendar", bgColor: "#f48c8c" },
                    { text: "LOGIN", href: "/", bgColor: "#e6d3e6" },
                ].map((item) => (
                    <Button
                        key={item.text}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: item.bgColor,
                            color: "black",
                            border: "3px solid black",
                            borderRadius: "25px",
                            fontWeight: "bold",
                            fontSize: "16px",
                            textAlign: "center",
                            minWidth: "120px",
                        }}

                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e75480")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = item.bgColor)}
                    >
                        {item.text}
                    </Button>
                ))}
            </nav>

            {/* 🔹 Login Form */}
            <VStack py={40}>
                <Box
                    bg="#FFB6C1"
                    border="3px solid black"
                    borderRadius="3xl"
                    p={10}
                    w="100%"
                    maxW="700px"
                    textAlign="center"
                    boxShadow="lg"
                >
                    <Heading fontSize="2xl" mb={6} color="black">
                        Welcome!
                    </Heading>

                    <VStack>
                        <Input
                            placeholder="USERNAME"
                            size="lg"
                            textAlign="center"
                            bg="#B2D39B"
                            border="3px solid black"
                            fontWeight="bold"
                            borderRadius="full"
                            _focus={{ outline: "none" }}
                            value={userName}
                            onChange={(e) => {setUserName(userName => e.target.value)}}
                        />
                        <Input
                            placeholder="PASSWORD"
                            type="password"
                            size="lg"
                            textAlign="center"
                            bg="#B2D39B"
                            border="3px solid black"
                            fontWeight="bold"
                            borderRadius="full"
                            _focus={{ outline: "none" }}
                            value={password}
                            onChange={(e) => {setPassword(password => e.target.value)}}
                        />
                        <Button //non responsive 
                            bg="#FEE89E"
                            color="black"
                            border="3px solid black"
                            borderRadius="full"
                            fontWeight="bold"
                            px={6}
                            py={2}
                            mt={4}
                            fontSize="14px"
                            _hover={{ bg: "#FDDD83" }}
                            onClick={() => {
                              if (userName != "") {
                              router.push({
                                pathname: "/routing/write",
                                query: {userName}
                            })}}}
                        >
                            sign up
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
}
