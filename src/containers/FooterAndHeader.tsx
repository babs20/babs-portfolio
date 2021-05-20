import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const FooterAndHeader = ({ children }: Props): JSX.Element => {
  return (
    <div className='flex flex-col h-full'>
      <TopNav />
      <main className='h-full'>{children}</main>
      <Footer />
    </div>
  );
};
