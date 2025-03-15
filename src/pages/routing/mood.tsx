"use client";

import React, { useState } from "react";
import { Box, Button, Container, Heading, HStack, Text, Stack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import Link from "next/link";

const moodColors: Record<string, string> = {
    happy: "#FFD700",
    sad: "#4682B4",
    neutral: "#D3D3D3",
    anger: "#FF4500",
    disgust: "#228B22",
    fear: "#8A2BE2",
    surprise: "#FF6347",
};

const RoutingMood: React.FC = () => {
    const [selectedMood, setSelectedMood] = useState<string>("happy"); // Default mood
    const [loading, setLoading] = useState<boolean>(false); // Set false since no fetch

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

                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e75480")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = item.bgColor)}
                        >
                            {item.text}
                        </Button>
                    </Link>
                ))}
            </nav>

            {/* 🔹 Mood Date Title */}
            <Box mt={6} textAlign="center">
                <Heading fontSize="20px" fontWeight="bold" p={2} display="inline-block">
                    Today on {new Date().toLocaleDateString("en-GB")},<br /> your overall mood is:
                </Heading>
            </Box>

            {/* 🔹 Mood Circle */}
            <Box
                mt={6}
                w="200px"
                h="200px"
                borderRadius="full"
                border="3px solid black"
                bg={moodColors[selectedMood]}
            />

            {/* 🔹 Mood Selector */}
            <RadioGroup onChange={(value) => setSelectedMood(value)} value={selectedMood} mt={6}>
                <Stack >
                    <HStack>
                        <Radio value="happy">
                            <Box w="10px" h="10px" bg="#FFD700" display="inline-block" borderRadius="full" mr={2} />
                            happy
                        </Radio>
                        <Radio value="sad">
                            <Box w="10px" h="10px" bg="#4682B4" display="inline-block" borderRadius="full" mr={2} />
                            sad
                        </Radio>
                        <Radio value="neutral">
                            <Box w="10px" h="10px" bg="#D3D3D3" display="inline-block" borderRadius="full" mr={2} />
                            neutral
                        </Radio>
                    </HStack>
                    <HStack>
                        <Radio value="anger">
                            <Box w="10px" h="10px" bg="#FF4500" display="inline-block" borderRadius="full" mr={2} />
                            anger
                        </Radio>
                        <Radio value="disgust">
                            <Box w="10px" h="10px" bg="#228B22" display="inline-block" borderRadius="full" mr={2} />
                            disgust
                        </Radio>
                    </HStack>
                    <HStack>
                        <Radio value="fear">
                            <Box w="10px" h="10px" bg="#8A2BE2" display="inline-block" borderRadius="full" mr={2} />
                            fear
                        </Radio>
                        <Radio value="surprise">
                            <Box w="10px" h="10px" bg="#FF6347" display="inline-block" borderRadius="full" mr={2} />
                            surprise
                        </Radio>
                    </HStack>
                </Stack>
            </RadioGroup>

            {/* Words of affirmation (only if loading is true) */}
            {loading && (
                <Text mt={4} fontSize="20px">
                    "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel - TUPAC SHAKUR"
                </Text>
            )}
        </Container>
    );
};

export default RoutingMood;
