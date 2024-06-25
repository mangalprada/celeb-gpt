import PropTypes from 'prop-types';

const IconButton = (props) => {
  const { iconLink = '', icon = '', alt = '' } = props;

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
};

IconButton.propTypes = {
  icon: PropTypes.string,
  iconLink: PropTypes.string,
  alt: PropTypes.string,
};

export default IconButton;
