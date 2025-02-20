import type { ReactNode } from "react";
import "./TechList.css";

export function TechList({
  children,
  itemsDirection,
}: { children: ReactNode; itemsDirection: "vertical" | "horizontal" }) {
  return (
    <ul
      className={`flex ${itemsDirection === "horizontal" ? "items-center justify-between" : "flex-col gap-5 lg:flex-row lg:justify-center"}`}
    >
      {children}
    </ul>
  );
}
