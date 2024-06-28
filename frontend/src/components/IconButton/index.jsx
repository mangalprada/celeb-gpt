import PropTypes from 'prop-types';

const IconButton = (props) => {
  const {
    iconLink = '',
    icon = '',
    alt = '',
    linkButton = false,
    handleClick = () => {},
  } = props;

  if (linkButton)
    return (
      <a
        id='linkedin-link'
        href={iconLink}
        target='_blank'
        rel='noreferrer'
        className='pr-2'
      >
        <img src={icon} alt={alt} className='hover:scale-125 duration-200' />
      </a>
    );

  return (
    <div className='pr-2' onClick={handleClick}>
      <img src={icon} alt={alt} className='hover:scale-125 duration-200' />
    </div>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string,
  iconLink: PropTypes.string,
  alt: PropTypes.string,
  linkButton: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default IconButton;
