"use client";

import { ThemeProvider } from "next-themes";

export const ThemeProviders = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};
