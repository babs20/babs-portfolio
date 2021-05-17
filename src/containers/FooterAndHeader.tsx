import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const FooterAndHeader = ({ children }: Props): JSX.Element => {
  return (
    <main className='h-full'>
      <TopNav />
      {children}
      <Footer />
    </main>
  );
};
