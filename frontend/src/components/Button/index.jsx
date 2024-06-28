import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Button = (props) => {
  const {
    handleClick,
    buttonText,
    primary = true,
    secondary = false,
    styles = '',
    magicalButton = false,
  } = props;

  if (magicalButton) {
    return (
      <div onClick={handleClick} className={`${styles} cursor-pointer`}>
        <button
          type='button'
          className='transtion group flex h-10 w-32 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30'
        >
          <div className='flex h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out'>
            {buttonText}
          </div>
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className={`${styles} cursor-pointer hover:font-bold`}
    >
      <span
        className={twMerge(
          'text-primaryText px-4 py-2  rounded-[50px]',
          primary &&
            'bg-whiteSmoke duration-200 mix-blend-overlay hover:mix-blend-normal hover:shadow-xl shadow-silver-200 ',
          secondary &&
            'border-2 border-whiteSmoke text-whiteSmoke bg-transparent'
        )}
      >
        {buttonText}
      </span>
    </div>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  buttonText: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  styles: PropTypes.string,
  magicalButton: PropTypes.bool,
};

export default Button;
