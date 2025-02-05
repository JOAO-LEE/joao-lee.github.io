import { X } from "@phosphor-icons/react";
import { useContext } from "react";
import { MobileNavigationContext } from "../../../context/MobileNavigation/MobileNavigationContext";
import { Link } from "react-router";
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
      className="menu-navigation uppercase font-styled-bold tracking-widest">
        <li
        data-title="Home"
        className={`nav-item ${isMobileNavigationOpen ? "nav-item-fade-in link-title" : "nav-item-fade-out"}`}
        >
          <Link to="/">
            Home
          </Link>
        </li>
        <li
        data-title="Github" 
        className={`nav-item ${isMobileNavigationOpen ? "nav-item-fade-in link-title" : "nav-item-fade-out"}`}
        >
          <a href="https://github.com/JOAO-LEE">
           Github
          </a>
        </li>
        <li
        data-title="LinkedIn" 
        className={`nav-item  ${isMobileNavigationOpen ? "nav-item-fade-in link-title" : "nav-item-fade-out"}`}
        >
          <a href="https://www.linkedin.com/in/joao-lee-lima/">
            LinkedIn
          </a>
        </li>
      </nav>
    </div>
  )
}
