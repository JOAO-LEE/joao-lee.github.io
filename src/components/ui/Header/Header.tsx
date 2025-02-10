import { List } from "@phosphor-icons/react";
import { useContext } from "react";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { MobileNavigationContext } from "../../../context/MobileNavigation/MobileNavigationContext";
import "./Header.css";
import { Link } from "react-router";

export function Header() {
  const { handleMobileNavigation } = useContext(MobileNavigationContext);

  return (
    <>
      <MobileNavigation />      
      <header 
      className="flex justify-between items-center p-4 sticky-header w-full top-0 text-yel-100 z-10"
      > 
        <List 
        size={32} 
        className="lg:hidden" 
        onClick={handleMobileNavigation} 
        />
        <nav className="grow">
          <ul className="navigation-links-container font-styled-bold lowercase tracking-wider">
            <li>
              <Link to="/" className="navigation-link" data-title="Home">
                Home
              </Link>
            </li>
            <li>
                <Link to="/projects" className="navigation-link" data-title="Projects">
                Projects
                </Link>
            </li>
            <li>
                <Link to="https://github.com/JOAO-LEE" className="navigation-link" data-title="Github">
                Github
                </Link>
              </li>
              <li>
                <Link to="https://linkedin.com/in/joao-lee-lima"className="navigation-link" data-title="LinkedIn">
                LinkedIn
                </Link>
              </li>
          </ul>
        </nav>
        {/* <Sun 
        className="cursor-pointer hover:scale-110 duration-500 test-animation theme-switch" 
        size={32} 
        /> */}
      </header>
    </>
  );
}
