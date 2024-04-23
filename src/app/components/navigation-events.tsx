"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname();

  useEffect(() => {
    const url = `${pathname}`;
    console.log(url);
  }, [pathname]);

  return null;
}
