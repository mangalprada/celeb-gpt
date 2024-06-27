import DeveloperCard from 'src/components/DeveloperCard';
import backIcon from 'assets/icons/arrow_back.svg';
import { developers } from 'src/constants/developers';
import 'src/index.css';

const HireUs = () => {
  const handleNavigation = () => {
    window.history.back();
  };

  return (
    <div className='px-10 py-10 overflow-y-auto h-full w-full flex flex-col items-center justify-between bg-whiteSmoke hire-us'>
      <div className='w-full flex mb-20 md:mb-0' onClick={handleNavigation}>
        <img src={backIcon} alt='back' className='cursor-pointer' />
      </div>

      <div className='flex relative flex-col w-full h-full mb-10 mt-20 md:mt-[110px] items-center'>
        <h2 className='text-primaryText font-extrabold text-[2rem] md:text-extraLarge leading-none developers'>
          DEVELOPERS
        </h2>
        <div className='flex z-10 w-full gap-20 flex-wrap justify-center items-center '>
          {developers.map((developer) => {
            const { name } = developer;
            return <DeveloperCard key={name} developer={developer} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HireUs;
