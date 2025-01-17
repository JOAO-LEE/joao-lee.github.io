export function MobileNavigation() {
  return (
    <div 
      // ref={menuRef} 
      // className={`menu ${open ? "open" : "close"} lg:hidden h-full backdrop-blur-lg text-white w-full sticky-header`}
      >
        <X 
        className={`size-10 ${open ? "x-open" : "x-close"}`} 
        // onClick={openCloseMenu} 
        />
        <nav 
        className="menu-navigation uppercase">
          <li 
          className={`nav-item ${open ? "nav-item-fade" : ""}`}
          >
            GitHub
          </li>
          <li 
          className={`nav-item ${open ? "nav-item-fade" : ""}`}
          >
            Linkedin
          </li>
        </nav>
    </div>
  )
}
