"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

const lenisOptions = {
  anchors: true,
  autoRaf: true,
} as const;

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
