import { List, Sun } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { MobileNavigationContext } from "../../context/MobileNavigation/MobileNavigationContext";
import "./Header.css";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export function Header() {
  const { handleMobileNavigation } = useContext(MobileNavigationContext);

  return (
    <>
      <MobileNavigation />      
      <header 
      className="flex justify-between items-center p-4 sticky-header w-full top-0 text-yel-200 z-10"
      > 
        <List 
        size={32} 
        className="lg:hidden" 
        onClick={handleMobileNavigation} 
        />
        <nav className="navigation-links">
          <li className="nav-item glow-item">Home</li>
          <li className="nav-item glow-item">GitHub</li>
          <li className="nav-item glow-item">Linkedin</li>
        </nav>
         
        {/* <HeadingTitle textContent="oi"/> */}
        <Sun 
        className="cursor-pointer hover:scale-110 duration-500 test-animation theme-switch" 
        size={32} 
        />
      </header>
    </>
  );
}
