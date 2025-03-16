// "use client";

// import React from "react";
// import { useRouter } from 'next/router';
// import { useState } from "react";
// import Link from "next/link";

// export default function RoutingWrite() {
//     const router = useRouter();
//     const { userName } = router.query;


//     const [currentPage, setCurrentPage] = useState(1);
//     // const [pages, setPages] = useState([""]);
//     // const maxCharsPerPage = 390; // Example character limit per page

//     const handlePrevious = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage => currentPage - 1);
//         }
//     };

//     const handleNext = () => {
//         setCurrentPage(currentPage => currentPage + 1);
//     };


//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
//         <nav className="flex justify-around w-full p-4 fixed top-0 left-0 z-10 bg-pink-200">
//             <button className="bg-purple-300 rounded-full px-4 py-2 ">WRITE</button>
//             <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">PAST ENTRIES</button>
//             <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">CALENDAR</button>
//             <Link href="/">
//                 <button className="bg-red-300 hover:bg-pink-400 rounded-full px-4 py-2">LOGIN</button>
//             </Link>
//         </nav>

//         <div className="flex flex-col items-center justify-center min-h-screen pt-24 bg-pink-200">
//             <div className="text-center mb-4">
//                 <h1 className="text-2xl font-bold">Hello {userName}!</h1>
//                 <h1 className="text-lg">Welcome Back :)</h1>
//             </div>

//             <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg mb-4">Mood Calculator</button>

//             <textarea 
//                 className="bg-yellow-100 border-2 border-gray-300 rounded-lg p-6 w-80 h-96 mb-4 break-words" 
//                 placeholder="Write here..."
//             ></textarea>

//             <div className="flex justify-between w-32">
//                 <button 
//                     className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
//                     onClick={handlePrevious}
//                     disabled={currentPage === 1}
//                     >&lt;
//                 </button>

//                 <span>{currentPage}</span>

//                 <button 
//                     className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
//                     onClick={handleNext}
//                     >&gt;
//                 </button>
//             </div>

//         </div>
//     </div>
//   );
// };

// // export async function getServerSideProps(context: any) {
// //     const { userName } = context.query;

// //     return {
// //       props: userName, // will be passed to the page component as props
// //     }
// //   }

"use client";

import React, { useState } from "react";
import { Box, Button, Container, Heading, Textarea, VStack, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

const RoutingWrite: React.FC = () => {

    const router = useRouter();
    const { userName } = router.query;

    const [pages, setPages] = useState<string[]>([""]); // Stores pages
    const [currentPage, setCurrentPage] = useState(0); // Current page index

    const handlePageChange = (direction: "prev" | "next") => {
        setPages((prevPages) => {
            let updatedPages = [...prevPages];

            if (direction === "next") {
                if (currentPage === prevPages.length - 1) {
                    updatedPages.push(""); // Add new blank page only when on the last page
                }
                setCurrentPage((prev) => prev + 1);
            } else if (direction === "prev" && currentPage > 0) {
                setCurrentPage((prev) => prev - 1);
            }

            return updatedPages;
        });
    };

    return (
        <Container maxW="3xl" py={8} bg="#FFD6E0" minH="100vh" centerContent>
            {/* 🔹 Navbar */}
            <nav
                style={{
                    padding: "15px",
                    backgroundColor: "#FFD6E0",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    flexWrap: "wrap",
                    borderRadius: "20px",
                    width: "95%",
                    maxWidth: "600px",
                }}
            >
                {[
                    { text: "WRITE", href: "/routing/write", bgColor: "#e6d3e6" },
                    { text: "PAST ENTRIES", href: "/routing/past", bgColor: "#f48c8c" },
                    { text: "CALENDAR", href: "/routing/calendar", bgColor: "#f48c8c" },
                    { text: "LOGIN", href: "/", bgColor: "#f48c8c" },
                ].map((item) => (
                    <Link href={item.href}>
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
                        >
                            {item.text}
                        </Button>
                    </Link>
                ))}
            </nav>

            {/* 🔹 Greeting Section */}
            <Box alignSelf="start" mt={5} mb={3}>
                <Heading fontSize="lg" fontWeight="bold">Hello {userName}!</Heading>
                <Text fontSize="lg">Welcome Back :)</Text>
            </Box>

            {/* 🔹 Mood Calculator Button */}
            <Button
                bg="#B2D39B"
                color="black"
                border="3px solid black"
                borderRadius="12px"
                fontWeight="bold"
                px={6}
                py={2}
                mt={2}
                fontSize="14px"
                _hover={{ bg: "#A4C77F" }}
            >
                Mood Calculator
            </Button>

            {/* 🔹 Editable Notepad */}
            <Box
                mt={10}
                bg="#FFE5B4"
                border="3px solid black"
                borderRadius="20px"
                p={4}
                width="100%"
                maxW="500px"
                minH="400px"
                position="relative"
                display="flex"
                flexDirection="column"
                overflow="hidden"
            >
                {/* Editable Textarea */}
                <Textarea
                    value={pages[currentPage]} // Current page content
                    onChange={(e) => {
                        setPages((prevPages) => {
                            const newPages = [...prevPages];
                            newPages[currentPage] = e.target.value; // Update specific page
                            return newPages;
                        });
                    }}
                    placeholder="Write your journal entry here..."
                    fontSize="18px"
                    border="none"
                    background="transparent"
                    height="100%"
                    resize="none"
                    borderColor="transparent"
                    lineHeight="40px"
                    padding="10px"
                    position="relative"
                    zIndex="1"
                />
            </Box>

            {/* 🔹 Navigation Arrows */}
            <HStack mt={6} >
                {/* Left Button */}
                <Button
                    w="50px"
                    h="50px"
                    bg="#C0C5CF"
                    border="3px solid black"
                    borderRadius="0"
                    _hover={{ bg: "#A8B0B9" }}
                    p={0}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    onClick={() => handlePageChange("prev")}
                    disabled={currentPage === 0} // Disable if on first page
                >
                    <Box
                        w="0"
                        h="0"
                        borderTop="15px solid transparent"
                        borderBottom="15px solid transparent"
                        borderRight="20px solid black"
                    />
                </Button>

                {/* Right Button */}
                <Button
                    w="50px"
                    h="50px"
                    bg="#C0C5CF"
                    border="3px solid black"
                    borderRadius="0"
                    _hover={{ bg: "#A8B0B9" }}
                    p={0}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    onClick={() => handlePageChange("next")}
                >
                    <Box
                        w="0"
                        h="0"
                        borderTop="15px solid transparent"
                        borderBottom="15px solid transparent"
                        borderLeft="20px solid black"
                    />
                </Button>
            </HStack>

            {/* Page Indicator */}
            <Text fontSize="lg" mt={3}>
                Page {currentPage + 1} of {pages.length}
            </Text>
        </Container>
    );
};

export default RoutingWrite;
