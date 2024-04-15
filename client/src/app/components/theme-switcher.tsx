"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export function ThemeSwitcher({ props }: { props: ButtonProps }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === "light" ? (
        <Button onClick={() => setTheme("dark")} {...props}>
          <FontAwesomeIcon icon={faMoon} size="2xl" />
        </Button>
      ) : (
        <Button onClick={() => setTheme("light")} {...props}>
          <FontAwesomeIcon icon={faSun} size="2xl" />
        </Button>
      )}
    </>
  );
}
