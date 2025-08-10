import { ReactNode } from 'react';
import Nav from '../components/Admin/Nav';

export const metadata = {
    title: 'Admin Section',
  description: 'Admin pages only',
  }
  
  interface adminLayoutProps {
    children: ReactNode;
  }
  export default function AdminLayout({ children }:adminLayoutProps) {
    return (
     
        < >
      <Nav/>
          {children}
          </>
      
    )
  }