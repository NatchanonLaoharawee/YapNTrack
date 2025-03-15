"use client";

import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Container,
    Heading,
    VStack,
    HStack,
    Text,
    IconButton,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Link from "next/link";

const RoutingPastEntries: React.FC = () => {
    const [entries, setEntries] = useState<{ date: string; content: string }[]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    // Simulate fetching past entries (replace with API call)
    useEffect(() => {
        const fetchEntries = async () => {
            // Simulated past entries
            const fakeEntries = [
                { date: "14/03/2025", content: "Entry 1 content..." },
                { date: "13/03/2025", content: "Entry 2 content..." },
                { date: "12/03/2025", content: "Entry 3 content..." },
            ];
            setEntries(fakeEntries);
        };

        fetchEntries();
    }, []);

    const handlePageChange = (direction: "prev" | "next") => {
        if (direction === "next" && currentPage < entries.length - 1) {
            setCurrentPage(currentPage + 1);
        } else if (direction === "prev" && currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Container maxW="xl" py={8}>
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
                    { text: "WRITE", href: "/routing/write", bgColor: "#f48c8c" },
                    { text: "PAST ENTRIES", href: "/routing/past", bgColor: "#e6d3e6" },
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

                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e75480")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = item.bgColor)}
                        >
                            {item.text}
                        </Button>
                    </Link>
                ))}
            </nav>

            {/* 🔹 Past Entries Section */}
            <VStack spacing={6} align="stretch">
                {/* 🔹 Heading */}
                <Heading size="md">Past Entries</Heading>

                {/* 🔹 Entries List (Left Sidebar) */}
                <HStack align="start" spacing={6}>
                    <VStack spacing={2} align="stretch" bg="pink.200" p={4} borderRadius="md">
                        {entries.map((entry, index) => (
                            <Button
                                key={index}
                                w="100%"
                                colorScheme={index % 4 === 0 ? "yellow" : index % 4 === 1 ? "green" : index % 4 === 2 ? "blue" : "red"}
                                borderRadius="full"
                                onClick={() => setCurrentPage(index)}
                            >
                                {entry.date}
                            </Button>
                        ))}
                    </VStack>

                    {/* 🔹 Notepad Section */}
                    <Box
                        flex="1"
                        p={6}
                        bg="#FFE5B4" /* Beige background */
                        borderRadius="md"
                        boxShadow="md"
                        w="100%"
                        minH="300px"

                    >
                        {/* 🔹 Entry Date Header */}
                        <Text fontSize="lg" fontWeight="bold" mb={4} textAlign="center" borderBottom="2px solid black" pb={2}>
                            {entries[currentPage]?.date || "No Date Available"}
                        </Text>

                        {/* 🔹 Entry Content */}
                        <Text fontSize="18px">
                            {entries[currentPage]?.content || "No content available."}
                        </Text>
                    </Box>
                </HStack>

                {/* 🔹 Pagination Buttons */}
                <HStack justify="center">
                    <IconButton
                        aria-label="Previous Entry"
                        icon={<ArrowLeftIcon />}
                        onClick={() => handlePageChange("prev")}
                        isDisabled={currentPage === 0}
                    />
                    <IconButton
                        aria-label="Next Entry"
                        icon={<ArrowRightIcon />}
                        onClick={() => handlePageChange("next")}
                        isDisabled={currentPage === entries.length - 1}
                    />
                </HStack>
            </VStack>
        </Container>
    );
};

export default RoutingPastEntries;
