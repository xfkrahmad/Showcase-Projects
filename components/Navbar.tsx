import { NavLinks } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import AuthProviders from './AuthProviders';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  const session = true;
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href={'/'}>
          <Image src={'/logo.svg'} width={115} height={43} alt='Flexibble' />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        {session ? (
          <>
            User Photo
            <Link href={'/create-project'}>Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
