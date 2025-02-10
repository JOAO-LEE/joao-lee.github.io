import { Envelope, HouseLine, LinkedinLogo, ReadCvLogo, TelegramLogo, Warehouse, WhatsappLogo, XLogo } from "@phosphor-icons/react";
import { Link } from "react-router";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import "./Footer.css";

export default function Footer() {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.5});

  return (
    <footer ref={ref} className="bg-blu-200 font-tipography">
      <div className="inner-content-footer">
        <div className="main-content-footer">
          <nav 
          aria-label="Main navigation" 
          className="space-y-1">
            <span
            data-title="Navigate" 
            className={`font-styled-bold ${isVisible ? "list-title-shadow" : ""}`}
            >
              Navigate  
            </span>
            <ul className="footer-link-list-container">
              <li>
                <Link 
                to="/" 
                className="footer-link-list-item">
                  <HouseLine size="1.5rem"  className="text-yel-100"/> Home
                </Link>
              </li>
              <li>
                <Link 
                to="/projects" 
                className="footer-link-list-item">
                  <Warehouse size="1.5rem"  className="text-yel-100"/> Projects
                </Link>
              </li>
              <li>
                <Link 
                to="/resume" 
                className="footer-link-list-item">
                  <ReadCvLogo size="1.5rem" weight="bold"  className="text-yel-100"/> Resume
                </Link>
              </li>
            </ul>
            </nav>
          <address className="not-italic space-y-1">
            <span 
            data-title="Get in touch" 
            className={`font-styled-bold ${isVisible ? "list-title-shadow" : ""}`}
            >
              Get in touch
            </span>
            <ul className="footer-link-list-container">
              <li>
                <Link 
                to="mailto:joaovitor_mdk@hotmail.com" className="footer-link-list-item">
                  <Envelope size={"1.5rem"} className=" text-yel-100"/>
                    joaovitor_mdk@hotmail.com
                </Link>
              </li>
              <li>
                <Link 
                to="https://t.me/joaumlee" className="footer-link-list-item">
                  <TelegramLogo size={"1.5rem"} className=" text-yel-100"/>
                  https://t.me/joaumlee
                </Link>
              </li>
              <li>
                <Link 
                to="https://wa.me/5581996742972" className="footer-link-list-item">
                  <WhatsappLogo size={"1.5rem"} className=" text-yel-100"/>
                  +5581996742972
                </Link>
              </li>
            </ul>
          </address>
          <div className="mb-14 space-y-1">
            <span 
            className={`font-styled-bold ${isVisible ? "list-title-shadow" : ""}`}
            data-title="Socials"
            >
              Socials
            </span>
            <ul className="footer-link-list-container">
              <li>
                <Link
                to="https://linkedin.com/in/joao-lee-lima"
                className="footer-link-list-item">
                <LinkedinLogo size={"1.5rem"} className=" text-yel-100" />
                Let's connect
                </Link>
              </li>
              <li>
              <Link
              to="https://x.com/joaumlee" 
              className="footer-link-list-item">
                <XLogo size={"1.5rem"} className=" text-yel-100" />
                Follow me
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-[3em] border-t border-t-yel-100 footer-link-list-item">
          <span>&copy;</span>
          <p>João Lima { new Date().getFullYear() }</p>
        </div>
      </div>
    </footer>
  )
}

