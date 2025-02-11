import { X } from "@phosphor-icons/react";
import { useContext } from "react";
import { MobileNavigationContext } from "../../../context/MobileNavigation/MobileNavigationContext";
import { Link } from "react-router";
import "./MobileNavigation.css";

export function MobileNavigation() {
  const { handleMobileNavigation, isMobileNavigationOpen } = useContext(MobileNavigationContext);

  return (
    <div 
    className={`menu ${isMobileNavigationOpen ? "open" : "close"} h-full lg:hidden lg:invisible`}
    >
      <X
      className={`size-10 ${!!isMobileNavigationOpen && "x-open"}`} 
      onClick={handleMobileNavigation} 
      />
      <nav 
      className="menu-navigation uppercase font-styled-bold tracking-widest">
        <li
        >
          <Link 
          data-title="Home"
          className={`nav-item link-title ${isMobileNavigationOpen ? "nav-item-fade-in link-title-shadow" : "nav-item-fade-out"}`}
          to="/"
          >
            Home
          </Link>
        </li>
        <li
        >
          <Link 
          data-title="Github" 
          className={`nav-item link-title ${isMobileNavigationOpen ? "nav-item-fade-in link-title-shadow" : "nav-item-fade-out"}`}
          to="https://github.com/JOAO-LEE"
          >
           Github
          </Link>
        </li>
        <li
        >
          <Link 
          data-title="LinkedIn" 
          className={`nav-item link-title ${isMobileNavigationOpen ? "nav-item-fade-in link-title-shadow" : "nav-item-fade-out"}`}
          to="https://www.linkedin.com/in/joao-lee-lima/"
          >
            LinkedIn
          </Link>
        </li>
      </nav>
    </div>
  )
}
