import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ContactUs = (props) => {
  const setCookie = (email) => {
    const expDate = new Date();
    expDate.setDate(expDate.getDate() + 7);
    document.cookie(`email=${email};expires=${expDate.toUTCString()};path=/`);
  };

  useEffect(() => {}, []);

  return (
    <div className='absolute flex items-center justify-center w-full h-full contact-us'>
      <div className='w-[520px] h-[500px] rounded-[30px] bg-pink-200'></div>
    </div>
  );
};

ContactUs.propTypes = {};

export default ContactUs;
