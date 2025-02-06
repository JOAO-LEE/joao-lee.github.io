import { Warning } from "@phosphor-icons/react";
import { useState, useRef, ReactNode } from "react";

function AnimatedButton({ icon, title, link }: { icon?: ReactNode, title: string, link: string }) {
  const [hovered, setHovered] = useState<boolean>(false);
  const buttonRef = useRef<HTMLSpanElement>(null);
  
  return (
    <>
      { 
        icon ? (
        <a
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} 
        href={link}
        target={link.includes("/#/projects") ? "" : "_blank"} 
        className={`px-2 py-0.5 flex items-center text-blu-100 bg-yel-100 group`}>
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
      :
      <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)} 
      className="px-2 py-0.5 flex items-center text-blu-100 bg-yel-100"
      >
         <div className={`flex items-center gap-2 2xl:block text-3xl`}>
          <Warning />
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
        
      </div>
    }
    </>
  )
}

export default AnimatedButton