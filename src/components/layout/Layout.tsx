import { Header } from "@/components/ui/Header/Header"
import { Outlet } from 'react-router'
import { MobileNavigationContext } from "@/context/MobileNavigation/MobileNavigationContext";
import { useContext } from 'react';
import "./Layout.css";

export function Layout() {
  const { isMobileNavigationOpen } = useContext(MobileNavigationContext);

  return (
    <>
      <div className='scroll-watcher'></div>
      <Header />
      <main className={`main-content ${!!isMobileNavigationOpen && "no-scrollbar"}`}>
        <Outlet />
      </main>
    </>
  )
}
