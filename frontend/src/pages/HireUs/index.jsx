import DeveloperCard from 'src/components/DeveloperCard';
import backIcon from 'assets/icons/arrow_back.svg';
import { developers } from 'src/constants/developers';

const HireUs = () => {
  const handleNavigation = () => {
    window.history.back();
  };

  return (
    <div className='p-10 overflow-auto h-full w-full flex flex-col justify-between bg-whiteSmoke mesh-test'>
      <div className='w-full flex mb-20 md:mb-0' onClick={handleNavigation}>
        <img src={backIcon} alt='back' className='cursor-pointer' />
      </div>
      <div className='flex w-full h-full gap-20 flex-wrap justify-center items-center '>
        {developers.map((developer) => {
          const { name } = developer;
          return <DeveloperCard key={name} developer={developer} />;
        })}
      </div>
    </div>
  );
};

export default HireUs;
