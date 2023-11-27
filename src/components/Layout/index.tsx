import Header from "../Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
    </>
  );
};

export default Layout;
