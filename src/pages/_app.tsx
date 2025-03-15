// import "@/styles/globals.css";
// import { ChakraProvider } from "@chakra-ui/react";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Component {...pageProps} />
//   );
// }


import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={system}>
      <Component {...pageProps} />
    </ChakraProvider>
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