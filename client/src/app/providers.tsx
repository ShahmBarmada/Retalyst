"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push} className="h-screen text-foreground bg-background">
      <NextThemeProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}
