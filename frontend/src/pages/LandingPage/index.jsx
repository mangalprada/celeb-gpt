import paul from 'assets/illustrations/paul.jpeg';
import { useNavigate } from 'react-router-dom';
import 'src/index.css';
import Header from '../Header';
import Button from 'src/components/Button';
import EmailModal from 'src/components/EmailModal';
import './styles.css';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'src/helpers/cookies';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showEmailErr, setShowEmailErr] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const userEmail = getCookie({ cookieName: 'email' });

      if (!userEmail) {
        setShowEmailModal(true);
      }
    }, 1000);
  }, []);

  const validateEmail = (emailId) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailId || emailId.length === 0) {
      return '* Email is required';
    }

    if (!regex.test(emailId)) {
      return 'Invalid email format';
    }

    return null;
  };

  const handleEmailInput = () => {
    const emailErr = validateEmail(email);

    if (emailErr) {
      setShowEmailErr(emailErr);
    } else {
      setCookie({ cookieName: 'email', cookieValue: email });
      setShowEmailModal(false);
    }
  };

  const handleClick = () => {
    navigate('/paulGPT');
  };

  return (
    <div className='flex flex-col w-full h-full  mesh-test-animate'>
      <Header />

      <div className='h-full w-full flex flex-col md:flex-row items-center gap-10 justify-center duration-300'>
        <img
          src={paul}
          width={500}
          className='mb-10 rounded-3xl'
          loading='lazy'
        />

        <div className='flex items-center flex-col p-4'>
          <div className='headline'>
            <h2 className='backup-headline text-primaryText font-extrabold text-large md:text-extraLarge leading-[120px] md:leading-none'>
              Paul
            </h2>
            <h2 className='main-headline text-primaryText font-extrabold text-large md:text-extraLarge leading-none'>
              Graham
            </h2>
          </div>

          <span className='text-lg max-w-[250px] text-primaryText flex flex-wrap text-center'>
            Startup kingmaker, Lisp lover, and essayist extraordinaire
          </span>

          <Button
            handleClick={handleClick}
            buttonText='Talk to him'
            styles='mt-10 font-bold'
            primaryBtnStyles='mix-blend-overlay hover:mix-blend-normal'
          />
        </div>
      </div>

      <EmailModal
        showEmailModal={showEmailModal}
        setShowEmailModal={setShowEmailModal}
        handleEmailInput={handleEmailInput}
        showEmailErr={showEmailErr}
        setShowEmailErr={setShowEmailErr}
        email={email}
        setEmail={setEmail}
      />
    </div>
  );
};

export default LandingPage;
