import React, { useState } from "react";
import { Box, Button, Container, Heading, Textarea, VStack, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const IndexPage: React.FC = () => {

    const router = useRouter();
    const { userName } = router.query;

    const [pages, setPages] = useState<string[]>([""]); // Stores pages
    const [currentPage, setCurrentPage] = useState(0); // Current page index

    const handlePageChange = (direction: "prev" | "next") => {
        if (direction === "next") {
            if (currentPage === pages.length - 1) {
                setPages([...pages, ""]); // Add a new blank page
            }
            setCurrentPage(currentPage + 1); // Move forward
        } else if (direction === "prev" && currentPage > 0) {
            setCurrentPage(currentPage - 1); // Move back
        }
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
                    { text: "WRITE", href: "/routing/write" },
                    { text: "PAST ENTRIES", href: "/routing/past" },
                    { text: "CALENDAR", href: "/routing/calendar" },
                    { text: "LOGIN", href: "/" },
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
                <Heading fontSize="lg">Hello {userName}!</Heading>
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
                mood calculator
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
                {/* Notepad Lines */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    pointerEvents="none"

                />

                {/* Editable Textarea */}
                <Textarea
                    value={pages[currentPage]} // Current page content
                    onChange={(e) => {
                        const newPages = [...pages];
                        newPages[currentPage] = e.target.value; // Update specific page
                        setPages(newPages);
                    }}
                    placeholder="Write your journal entry here..."
                    fontSize="18px"
                    border="none"
                    background="transparent"
                    height="100%"
                    resize="none"
                    lineHeight="40px" /* Aligns text with lines */
                    padding="10px"
                    position="relative"
                    zIndex="1" /* Ensures text is above lines */
                />
            </Box>

            {/* 🔹 Navigation Arrows */}
            <HStack mt={6} style={{ gap: "20px" }}>
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
                        borderRight="20px solid black" /* Triangle pointing left */
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
                        borderLeft="20px solid black" /* Triangle pointing right */
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
