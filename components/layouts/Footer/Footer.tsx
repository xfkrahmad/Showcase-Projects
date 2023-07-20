import { footerLinks } from '@/data';
import { IFooterColumnLinkProps } from '@/data-types/data-types';
import Image from 'next/image';
import HeaderFooter from './content/HeaderFooter';
import MainFooter from './content/MainFooter';
import BottomFooter from './content/BottomFooter';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <HeaderFooter />
        <MainFooter />
      </div>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
