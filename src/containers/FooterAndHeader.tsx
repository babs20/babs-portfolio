import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const FooterAndHeader = ({ children }: Props): JSX.Element => {
  return (
    <div className='relative min-h-full pb-72'>
      <TopNav />
      <main className='w-full px-8 md:px-16 xl:px-32'>{children}</main>
      <Footer />
    </div>
  );
};
