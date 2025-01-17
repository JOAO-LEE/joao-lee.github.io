import { useLocation } from "react-router";
import { MobileNavigationContext  } from "../../context/MobileNavigation/MobileNavigationContext";
import  { ReactNode, useEffect, useState } from 'react';

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileNavigationOpen(false)
  }, [location]);

  const handleMobileNavigation = () => setIsMobileNavigationOpen(!isMobileNavigationOpen);

  return (
    <MobileNavigationContext.Provider 
    value={{isMobileNavigationOpen, handleMobileNavigation}}>
      {children}
    </MobileNavigationContext.Provider>
  )
}