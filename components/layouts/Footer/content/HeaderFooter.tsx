import Image from 'next/image';

interface HeaderFooterProps {}

const HeaderFooter = ({}: HeaderFooterProps) => {
  return (
    <div className='flex items-start flex-col'>
      <Image src={'/logo-purple.svg'} width={115} height={38} alt='Flexibble' />
      <p className='text-start text-sm font-normal mt-5 max-w-xs'>
        Flexibble is the world's leading community for creatives to share, grow,
        and get hired.
      </p>
    </div>
  );
};

export default HeaderFooter;
