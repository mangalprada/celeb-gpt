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

      <div className='flex flex-col w-full h-full mb-10 items-center'>
        <span className='text-h2 text-primaryText font-bold'>DEVELOPERS</span>

        <div className='flex w-full mt-10 gap-20 flex-wrap justify-center items-center '>
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
