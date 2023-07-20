interface BottomFooterProps {}

const BottomFooter = ({}: BottomFooterProps) => {
  return (
    <div className='flexBetween footer_copyright'>
      <p>@ 2023 Flexibble. All rights reserved</p>
      <p className='text-gray'>
        <span className='text-black font-semibold'>10,214</span> projects
        submitted
      </p>
    </div>
  );
};

export default BottomFooter;
