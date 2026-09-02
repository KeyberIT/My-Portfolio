"use client";

import { useState, useEffect, ReactNode } from "react";
import AnimatedLogo from "./AnimatedLogo";

export default function SplashScreen({ children }: { children: ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = "hidden";

    // Wait 2s for animation to finish, plus 0.5s pause = 2.5s total before fade out
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    // Completely remove splash screen after fade out transition (0.5s duration)
    const hideTimer = setTimeout(() => {
      setShowSplash(false);
      // Re-enable scroll
      document.body.style.overflow = "";
    }, 3000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0a192f] transition-opacity duration-500 ${
          isFadingOut ? "opacity-0" : "opacity-100"
        } ${showSplash ? "" : "hidden"}`}
      >
        <AnimatedLogo />
      </div>
      {children}
    </>
  );
}
