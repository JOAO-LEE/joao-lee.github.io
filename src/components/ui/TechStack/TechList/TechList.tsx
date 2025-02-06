import { ReactNode } from "react";
import "./TechList.css";

export function TechList({ children, itemsDirection }: { children: ReactNode, itemsDirection: "vertical" | "horizontal" }) {
  
  return (
    <ul  
    className={`flex ${itemsDirection === "horizontal" ? "items-center justify-between lg:justify-normal lg:gap-4" : "flex-col gap-10 lg:flex-row"}`}
    >
      {children}
    </ul>
  )
}
