import { Header } from '../components/Header/Header'
import { Outlet } from 'react-router'
import { MobileNavigationContext } from "../context/MobileNavigation/MobileNavigationContext";
import "./Layout.css";
import { useContext } from 'react';

export function Layout() {
  const {isMobileNavigationOpen} = useContext(MobileNavigationContext);
  return (
    <>
      <Header />
      <main className={`main-content p-2 ${isMobileNavigationOpen ? "no-scrollbar" : ""}`}>
        <Outlet />
      </main>
    </>
  )
}
