import PropTypes from 'prop-types';
import IconButton from '../IconButton';

const DeveloperCard = (props) => {
  const { developer } = props;
  const {
    name = '',
    role = 'Developer',
    links = [],
    photoSrc,
    bio = '',
    exp = '',
  } = developer;

  return (
    <div className='flex flex-col gap-4 w-[320px] bg-white shadow-xl rounded-lg p-6 justify-between duration-500'>
      <div className='flex items-center justify-between flex-col'>
        <img src={photoSrc} className='rounded-[10px] bg-orange h-40 w-fit' />

        <div className='flex flex-col w-full gap-4'>
          <span className='text-h4 text-primayText'>{name}</span>

          <div className='flex flex-col'>
            <div className='flex justify-between w-full'>
              <span className='text-sm text-orange'>{role}</span>
              <span className='text-sm text-orange'>{exp}</span>
            </div>

            <span className=''>{bio}</span>
          </div>
        </div>
      </div>

      <div className='flex items-center'>
        {links.map((link) => {
          return (
            <IconButton
              key={link.alt}
              iconLink={link.iconLink}
              icon={link.icon}
              alt={link.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

DeveloperCard.propTypes = {
  developer: PropTypes.object,
};

export default DeveloperCard;
