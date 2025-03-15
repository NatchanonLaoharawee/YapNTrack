import React, { useState } from "react";
import { Box, Button, Container, Heading, Textarea, VStack, HStack, Text } from "@chakra-ui/react";

const IndexPage: React.FC = () => {
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
        <Container maxW="xl" py={8} bg="#FFD6E0" minH="100vh" centerContent>
            {/* 🔹 Navbar */}
            <nav
                style={{
                    padding: "15px",
                    backgroundColor: "#FFD6E0",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    flexWrap: "wrap",
                    border: "3px solid black",
                    borderRadius: "20px",
                    width: "95%",
                    maxWidth: "600px",
                }}
            >
                {[
                    { text: "WRITE", href: "/write" },
                    { text: "PAST ENTRIES", href: "/past" },
                    { text: "CALENDAR", href: "/calendar" },
                    { text: "LOGIN", href: "/login" },
                ].map((item) => (
                    <Button
                        key={item.text}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: item.text === "WRITE" ? "#F48C8C" : "#E6D3E6",
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
                ))}
            </nav>

            {/* 🔹 Greeting Section */}
            <Box alignSelf="start" mt={5} mb={3}>
                <Heading fontSize="lg">Hello Mala!</Heading>
                <Text fontSize="lg">Welcome Back :)</Text>
            </Box>

            {/* 🔹 Mood Calculator Button */}
            <Button
                bg="#B2D39B"
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

export default IndexPage;
