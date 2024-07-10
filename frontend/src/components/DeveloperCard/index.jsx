import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import Tooltip from '../Tooltip';
import { twMerge } from 'tailwind-merge';

const DeveloperCard = (props) => {
  const { developer } = props;
  const {
    name = '',
    role = 'Developer',
    links = [],
    photoSrc,
    bio = '',
    email = {},
  } = developer;

  const copyToClipboard = (emailId) => {
    navigator.clipboard.writeText(emailId);
  };

  return (
    <div className='flex rounded-2xl max-w-[450px] min-h-[220px] shadow-2xl items-center justify-between p-4 bg-whiteSmoke flex-wrap md:flex-nowrap'>
      <img
        src={photoSrc}
        className='rounded-[10px] z-10 h-40 w-fit flex md:hidden'
      />

      <div className='flex flex-col gap-2 text-sm text-orange'>
        <span className='text-h3 text-primaryText'>
          <strong>{name}</strong>
        </span>
        <span>{role}</span>
        <span className='text-primaryText text-sm flex items-end'>{bio}</span>

        <div className='flex flex-col mt-4 gap-2'>
          <div className='flex items-center hover:cursor-pointer'>
            <Tooltip tooltip='Copy to Clipboard!' position='bottom'>
              <IconButton
                icon={email.icon}
                alt='email'
                handleClick={() => copyToClipboard(email.id)}
              />
            </Tooltip>
            {links.map((link) => {
              return (
                <Tooltip key={link.alt} tooltip={link.alt} position='bottom'>
                  <IconButton
                    key={link.alt}
                    iconLink={link.iconLink}
                    icon={link.icon}
                    alt={link.alt}
                    linkButton
                  />
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>

      <img
        src={photoSrc}
        className={twMerge(
          'rounded-[10px] z-10 h-40 w-fit hidden md:flex',
          name === 'Mangalprada Malay' && 'scale-150'
        )}
      />
    </div>
  );
};

DeveloperCard.propTypes = {
  developer: PropTypes.object,
};

export default DeveloperCard;
