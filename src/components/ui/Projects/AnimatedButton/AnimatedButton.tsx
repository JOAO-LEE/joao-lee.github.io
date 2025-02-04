import { useState, useRef, ReactNode } from "react";

function AnimatedButton({ icon, title, link }: { icon: ReactNode, title: string, link?: string }) {
  const [hovered, setHovered] = useState<boolean>(false);
  const buttonRef = useRef<HTMLSpanElement>(null);
  
  return (
    <a
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)} 
    href={link}
    target="_blank" 
    className={`px-2 py-0.5 flex items-center text-blu-100 bg-yel-100 group ${!link ? "pointer-events-none" : ""}`}>
      <div className={`flex items-center gap-2 2xl:block text-3xl`}>
        {icon}
        <span className="text-xs xl:hidden">{title}</span>
      </div>
      <div
      style={{width: hovered ? buttonRef.current?.offsetWidth || 0 : 0}} 
      className="overflow-x-hidden transition-all duration-300 ease-out">
        <span 
        ref={buttonRef} 
        className="hidden text-nowrap xl:inline px-1.5">
          {title}
        </span>
      </div>
    </a> 
  )
}

export default AnimatedButton