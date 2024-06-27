// import React from 'react';
// import paul from 'assets/illustrations/paul.png';
// import yCombinator from 'assets/illustrations/yCombinator.jpeg';
import { useNavigate } from 'react-router-dom';
import 'src/index.css';
import Header from '../Header';
import Button from 'src/components/Button';
import ContactUs from 'src/components/ContactUs';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/paulGPT');
  };

  return (
    <div className='flex flex-col w-full h-full  mesh-test-animate'>
      <Header />

      <div className='h-full w-full flex items-center justify-center'>
        {/* <img src={paul} className='w-[50%] h-[50%]' /> */}

        <div className='flex w-full items-center flex-col p-4'>
          <span className='md:text-[80px] text-[50px] font-bold text-black'>
            Paul Graham
          </span>

          <span className='text-lg text-primaryText text-center'>
            Startup kingmaker, Lisp lover, and essayist extraordinaire
          </span>

          <Button
            handleClick={handleClick}
            buttonText='Talk to him'
            styles='mt-10 font-bold'
          />
        </div>
      </div>

      {false && <ContactUs />}
    </div>
  );
};

export default LandingPage;
