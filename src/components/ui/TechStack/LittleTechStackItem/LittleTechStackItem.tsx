import { TechStackItem } from "@/model/TechStackItem";

export function LittleTechStackItem({ iconClass, name }: TechStackItem) {
  return (
    <li 
    className="flex items-center gap-1 bg-yel-100 text-blu-100 p-1"
    >
      <i className={iconClass}></i>
      <span className="bg-yel-100">{name}</span>
    </li>
  )
}
