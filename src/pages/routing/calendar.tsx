"use client";

import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    Heading,
    Table,
    VStack,
    HStack,
    IconButton,
    Center,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import Link from "next/link";

// 🔹 Weekday headers
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// 🔹 Mood color mapping (Dummy data for March 1-5)
const moodColors: { [key: number]: string } = {
    1: "#FFD700", // Happy (Yellow)
    2: "#FFB6C1", // Sad (Pink)
    3: "#228B22", // Disgust (Green)
    4: "#4682B4", // Surprise (Blue)
    5: "#FF6347", // Angry (Red)
};

const Calendar: React.FC = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    // Function to get number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Function to get the starting day of the month (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust so Monday is the first day

    // Function to change the month
    const changeMonth = (direction: "prev" | "next") => {
        if (direction === "prev") {
            setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
            if (currentMonth === 0) setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
            if (currentMonth === 11) setCurrentYear(currentYear + 1);
        }
    };

    // Generate calendar grid
    const generateCalendar = () => {
        const daysArray = [];
        let dayCounter = 1;
        const totalCells = Math.ceil((adjustedFirstDay + daysInMonth) / 7) * 7; // Ensure full weeks

        for (let i = 0; i < totalCells; i++) {
            if (i >= adjustedFirstDay && dayCounter <= daysInMonth) {
                const isToday = dayCounter === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
                const dayColor = currentMonth === 2 && moodColors[dayCounter] ? moodColors[dayCounter] : "transparent"; // Apply colors only for March

                daysArray.push(
                    <Table.Cell key={i} textAlign="center" border="2px solid black" p={3}>
                        <Center
                            w="35px"
                            h="35px"
                            borderRadius="full"
                            bg={isToday ? "#FFD700" : dayColor} // Highlight today or apply mood color
                            fontWeight="bold"
                            border="2px solid black"
                        >
                            {dayCounter}
                        </Center>
                    </Table.Cell>
                );
                dayCounter++;
            } else {
                daysArray.push(<Table.Cell key={i} />);
            }
        }

        // Divide into weeks (rows)
        const rows = [];
        for (let i = 0; i < daysArray.length; i += 7) {
            rows.push(<Table.Row key={i}>{daysArray.slice(i, i + 7)}</Table.Row>);
        }

        return rows;
    };

    return (
        <Container maxW="3xl" py={8} bg="#FFD6E0" minH="500vh" centerContent>
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
                    { text: "CALENDAR", href: "/routing/calendar", bgColor: "#e6d3e6" },
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

            {/* 🔹 Title */}
            <VStack spacing={4} textAlign="center">
                <Heading fontSize={24} fontWeight="bold" mt={10} mb={10}>
                    {"JOURNAL ENTRIES FOR THE MONTH"}

                </Heading>
                <Heading fontSize="24px" fontWeight="bold">
                    {new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" })} {currentYear}
                </Heading>

                {/* 🔹 Navigation Buttons */}
                <HStack>
                    <IconButton aria-label="Previous Month" onClick={() => changeMonth("prev")}><ArrowLeftIcon /></IconButton>
                    <IconButton aria-label="Next Month" onClick={() => changeMonth("next")}><ArrowRightIcon /></IconButton>
                </HStack>

                {/* 🔹 Calendar Grid */}
                <Box mt={4} border="3px solid black" borderRadius="20px" overflow="hidden" bg="#F48C8C" p={4}>
                    <Table.Root variant="unstyled">
                        <Table.Header>
                            <Table.Row>
                                {daysOfWeek.map((day) => (
                                    <Table.Cell key={day} textAlign="center" border="2px solid black" fontSize="16px" fontWeight="bold" bg="#F48C8C">
                                        {day}
                                    </Table.Cell>
                                ))}
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>{generateCalendar()}</Table.Body>
                    </Table.Root>
                </Box>
            </VStack>
        </Container>
    );
};

export default Calendar;
