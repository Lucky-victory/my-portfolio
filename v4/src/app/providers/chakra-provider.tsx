"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider as Provider } from "@chakra-ui/react";
import {
  extendTheme,
  withDefaultColorScheme,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: true,
};
const customTheme = extendTheme({
  config,
});
export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <Provider theme={customTheme}>{children}</Provider>
    </CacheProvider>
  );
}
