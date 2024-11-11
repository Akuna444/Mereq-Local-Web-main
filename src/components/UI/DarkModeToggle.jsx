"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Sun, Moon } from "lucide-react";
const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div
          id="dark-mode-toggle"
          class="fixed right-0 top-24 z-10 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-900 p-2 text-3xl text-zinc-200 dark:bg-zinc-200 dark:text-zinc-900"
        >
          {resolvedTheme === "dark" && (
            <Sun onClick={() => setTheme("light")} />
          )}
          {resolvedTheme === "light" && (
            <Moon onClick={() => setTheme("dark")} />
          )}
        </div>
      )}
    </>
  );
};

export default DarkModeToggle;
