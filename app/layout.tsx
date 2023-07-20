import Navbar from '@/components/Navbar';
import './global.css';
import Footer from '@/components/layouts/Footer/Footer';

export const metadata = {
  title: 'Showcase Projects',
  description: 'Showcases and discover developer projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
