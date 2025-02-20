import { type ReactNode, useLayoutEffect } from "react";
import { useLocation } from "react-router";

export function ScrollWrapper({ children }: { children: ReactNode }) {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return children;
}
