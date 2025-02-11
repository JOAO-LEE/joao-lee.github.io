import { ReactNode, useLayoutEffect } from "react";
import {useLocation} from "react-router"

export function ScrollWrapper({ children }: { children: ReactNode }) {
  const location = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children
}
