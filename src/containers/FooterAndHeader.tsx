import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const FooterAndHeader = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
