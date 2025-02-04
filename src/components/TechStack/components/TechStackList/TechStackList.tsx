import { ReactNode } from "react";
import "./TechStackList.css";

export default function TechStackList({children, itemsDirection}: {children: ReactNode, itemsDirection: "vertical" | "horizontal"}) {
  return (
    <ul  
    className={`flex ${itemsDirection === "horizontal" ? "items-center justify-between" : "flex-col gap-4"}`}
    >
      {children}
    </ul>
  )
}
