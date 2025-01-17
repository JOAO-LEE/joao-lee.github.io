import { createContext } from "react";
import { IMobileNavigationContext } from "../../types/context/IMobileNavigationContext";

export const MobileNavigationContext = createContext<IMobileNavigationContext>({} as IMobileNavigationContext); 