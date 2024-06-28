import PropTypes from 'prop-types';
import Button from '../Button';
import { twMerge } from 'tailwind-merge';

const EmailModal = (props) => {
  const {
    showEmailModal,
    // setShowEmailModal,
    handleEmailInput,
    showEmailErr,
    setShowEmailErr,
    setEmail,
  } = props;

  // const handleCloseModal = () => {
  //   setShowEmailModal(!showEmailModal);
  // };

  return (
    <div
      className={`
        fixed inset-0 flex z-20 justify-center items-center transition-colors duration-500
        ${showEmailModal ? 'visible bg-black/20' : 'invisible'}
      `}
    >
      <div
        className={`
          bg-white w-[400px] h-auto p-6 m-4 rounded-3xl shadow transition-all duration-500 flex flex-col
          ${showEmailModal ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
        `}
      >
        <div className='w-full flex justify-end '>
          {/* 
          // closing the modal
          <span
            onClick={handleCloseModal}
            className='hover:text-orange hover:cursor-pointer'
          >
            x
          </span> */}
        </div>
        <h1 className='text-h2 font-bold mb-8'>
          Enter your email to be first in line for our future apps!
        </h1>

        <input
          type='text'
          placeholder='Enter your email'
          className={twMerge(
            'appearance-none p-2 border  border-gray-200 rounded-md font-normal focus:outline-none',
            showEmailErr && 'border-red-700'
          )}
          onChange={(event) => {
            event.stopPropagation();

            if (showEmailErr) {
              setShowEmailErr(null);
            }

            setEmail(event.target.value);
          }}
        />
        {showEmailErr && (
          <span className='text-xs mt-1 pl-2 text-red-700'>{showEmailErr}</span>
        )}
        <Button
          handleClick={handleEmailInput}
          buttonText='Now lets get started!'
          styles='mt-5 text-sm'
          primaryBtnStyles='hover:bg-orange hover:text-whiteSmoke text-orange'
        />
      </div>
    </div>
  );
};

EmailModal.propTypes = {
  showEmailModal: PropTypes.bool,
  // setShowEmailModal: PropTypes.func,
  handleEmailInput: PropTypes.func,
  showEmailErr: PropTypes.string,
  setShowEmailErr: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
};

export default EmailModal;
