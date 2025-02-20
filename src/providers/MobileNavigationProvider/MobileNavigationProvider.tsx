import { type ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { MobileNavigationContext } from "../../context/MobileNavigation/MobileNavigationContext";

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] =
    useState<boolean>(false);
  const { pathname } = useLocation();

  console.log(pathname);

  useEffect(() => {
    setIsMobileNavigationOpen(false);
  }, [pathname]);

  const handleMobileNavigation = () =>
    setIsMobileNavigationOpen(!isMobileNavigationOpen);

  return (
    <MobileNavigationContext.Provider
      value={{ isMobileNavigationOpen, handleMobileNavigation }}
    >
      {children}
    </MobileNavigationContext.Provider>
  );
}
