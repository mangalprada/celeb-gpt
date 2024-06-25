import 'src/index.css';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/developers');
  };

  return (
    <Button
      handleClick={handleClick}
      buttonText='Hire Us!'
      secondary
      magicalButton
      styles='w-full flex justify-end px-10 pt-5'
    />
  );
};

export default Header;
