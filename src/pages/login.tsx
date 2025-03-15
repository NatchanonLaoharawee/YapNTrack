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

export default function Home() {
    return (
        <Container maxW="xl" py={8} bg="#FFD6E0" minH="100vh" centerContent>

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
                    { text: "WRITE", href: "#write", bgColor: "#f48c8c" },
                    { text: "PAST ENTRIES", href: "#past", bgColor: "#f48c8c" },
                    { text: "CALENDAR", href: "#calendar", bgColor: "#f48c8c" },
                    { text: "LOGIN", href: "#login", bgColor: "#f48c8c" },
                ].map((item) => (
                    <a
                        key={item.text}
                        href={item.href}
                        style={{
                            padding: "10px 20px",
                            backgroundColor: item.bgColor,
                            color: "black",
                            textDecoration: "none",
                            border: "2px solid black",
                            borderRadius: "25px",
                            fontWeight: "bold",
                            transition: "background-color 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e6d3e6")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = item.bgColor)}
                    >
                        {item.text}
                    </a>
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
                        />
                        <Button //non responsive 
                            bg="#FEE89E"
                            border="3px solid black"
                            borderRadius="full"
                            fontWeight="bold"
                            px={6}
                            py={2}
                            mt={4}
                            fontSize="14px"
                            _hover={{ bg: "#FDDD83" }}
                        >
                            sign up
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
}
