import { X } from "@phosphor-icons/react";
import { useContext } from "react";
import { MobileNavigationContext } from "../../../context/MobileNavigation/MobileNavigationContext";
import "./MobileNavigation.css";

export function MobileNavigation() {
  const { handleMobileNavigation, isMobileNavigationOpen } = useContext(MobileNavigationContext);
  
  return (
    <div 
    className={`menu ${isMobileNavigationOpen ? "open" : "close"} h-full`}
    >
      <X
      className={`size-10 ${!!isMobileNavigationOpen && "x-open"}`} 
      onClick={handleMobileNavigation} 
      />
      <nav 
      className="menu-navigation uppercase font-styled">
        <li 
        className={`nav-item ${isMobileNavigationOpen ? "nav-item-fade-in" : "nav-item-fade-out"}`}
        >
          GitHub
        </li>
        <li 
        className={`nav-item ${isMobileNavigationOpen ? "nav-item-fade-in" : "nav-item-fade-out"}`}
        >
          Linkedin
        </li>
      </nav>
    </div>
  )
}
