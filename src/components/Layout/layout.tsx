import Meta from '../meta';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { preview?: JSX.Element, children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Meta />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
