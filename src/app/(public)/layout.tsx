import { ReactNode } from 'react';
import Nav from '../components/Front/Nav';
import Footer from '../components/Front/Footer';

export const metadata = {
    title: 'drive direcet',
  description: 'drive direcet pages only',
  }
  
  interface DriveDirectLayoutProps {
    children: ReactNode;
  }
  export default function AdminLayout({ children }:DriveDirectLayoutProps) {
    return (

        < >
        <Nav/>
          {children}
        <Footer/>
          </>
      
    )
  }