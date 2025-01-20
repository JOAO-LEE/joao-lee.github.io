import { List, Sun } from "@phosphor-icons/react";
import { useContext } from "react";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { MobileNavigationContext } from "../../context/MobileNavigation/MobileNavigationContext";
import "./Header.css";

export function Header() {
  const { handleMobileNavigation } = useContext(MobileNavigationContext);

  return (
    <>
      <MobileNavigation />      
      <header 
      className="flex justify-between items-center p-4 sticky-header w-full top-0 text-grayish z-0"
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
        <Sun 
        className="cursor-pointer hover:scale-110 duration-500 test-animation theme-switch" 
        size={32} 
        />
      </header>
    </>
  );
}
