import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}


// import { ChakraProvider } from "@chakra-ui/react"
// import { system } from "@chakra-ui/react/preset"
// // import { ThemeProvider } from "next-themes"
// import { AppProps } from "next/app"

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <ChakraProvider value={system}>
//       {/* <ThemeProvider attribute="class" disableTransitionOnChange> */}
//         <Component {...pageProps} />
//       {/* </ThemeProvider> */}
//     </ChakraProvider>
//   )
// }