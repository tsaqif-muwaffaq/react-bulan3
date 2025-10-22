// src/components/ModeToggle.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/theme/ThemeProvider";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}
