import backIcon from 'assets/icons/arrow_back.svg';

const PaulGPT = () => {
  const handleNavigation = () => {
    window.history.back();
  };

  return (
    <div className='px-10 py-10 overflow-y-auto h-full w-full flex flex-col items-center bg-whiteSmoke hire-us'>
      <div className='w-full flex mb-20 md:mb-0' onClick={handleNavigation}>
        <img src={backIcon} alt='back' className='cursor-pointer' />
      </div>
      <span className='h-full flex flex-grow justify-center items-center text-h2 text-primaryText'>
        This section is currently under developement. Stay tuned!
      </span>
    </div>
  );
};

export default PaulGPT;
