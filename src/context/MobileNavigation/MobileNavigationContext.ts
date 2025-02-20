import { createContext } from "react";
import type { IMobileNavigationContext } from "../../types/context/IMobileNavigationContext";

export const MobileNavigationContext = createContext<IMobileNavigationContext>(
  {} as IMobileNavigationContext
);
