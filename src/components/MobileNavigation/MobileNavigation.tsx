import { X } from "@phosphor-icons/react";
import { useContext } from "react";
import { MobileNavigationContext } from "../../context/MobileNavigation/MobileNavigationContext";

export function MobileNavigation() {
  const { handleMobileNavigation, isMobileNavigationOpen } = useContext(MobileNavigationContext);
  
  return (
    <div 
    className={`menu ${isMobileNavigationOpen ? "open" : "close"} h-full bg-blue-400 text-white`}
    >
      <X
      className={`size-10 ${isMobileNavigationOpen ? "x-open" : "x-close"}`} 
      onClick={handleMobileNavigation} 
      />
      <nav 
      className="menu-navigation uppercase">
        <li 
        className={`nav-item ${isMobileNavigationOpen ? "nav-item-fade" : ""}`}
        >
          GitHub
        </li>
        <li 
        className={`nav-item ${isMobileNavigationOpen ? "nav-item-fade" : ""}`}
        >
          Linkedin
        </li>
      </nav>
    </div>
  )
}
