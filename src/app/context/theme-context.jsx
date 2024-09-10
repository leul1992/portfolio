"use client";
import React, { createContext } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  return (
    <NextThemesProvider>
      <ThemeContext.Provider value={{}}>
        <div className="dark:text-white dark:bg-black">{children}</div>
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
};

export default ThemeProvider;
