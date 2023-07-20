import { footerLinks } from '@/data';
import { IFooterColumnLinkProps } from '@/data-types/data-types';

const FooterColumn = ({ title, links }: IFooterColumnLinkProps) => {
  return (
    <div className='footer_column'>
      <h4 className='font-semibold'>{title}</h4>
      <ul className='flex flex-col gap-2 font-normal'>
        {links.map((link, index) => (
          <li key={`footer_${index}`}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

interface MainFooterProps {}

const MainFooter = ({}: MainFooterProps) => {
  return (
    <div className='flex flex-wrap gap-12'>
      <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

      <div className='flex-1 flex flex-col gap-4'>
        <FooterColumn
          title={footerLinks[1].title}
          links={footerLinks[1].links}
        />
        <FooterColumn
          title={footerLinks[2].title}
          links={footerLinks[2].links}
        />
      </div>

      <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

      <div className='flex-1 flex flex-col gap-4'>
        <FooterColumn
          title={footerLinks[4].title}
          links={footerLinks[4].links}
        />
        <FooterColumn
          title={footerLinks[5].title}
          links={footerLinks[5].links}
        />
      </div>

      <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
    </div>
  );
};

export default MainFooter;
