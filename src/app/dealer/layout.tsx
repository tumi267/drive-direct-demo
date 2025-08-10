import { ReactNode } from 'react';
import Nav from '../components/Dealer/Nav';

export const metadata = {
  title: 'Dealer Section',
  description: 'Dealer pages only',
}

interface DealerLayoutProps {
  children: ReactNode;
}

export default function dealerLayout({ children }: DealerLayoutProps) {
  return (
    <>
    <Nav/>
      {children}
    </>
  );
}
