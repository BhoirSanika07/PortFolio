import React from 'react';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactIcons = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <FaGithub
        onClick={() => openLink('https://github.com/BhoirSanika07')}
        size={32}
        style={{ cursor: 'pointer' }}
      />
      <FaEnvelope
        onClick={() => (window.location.href = 'mailto:bhoirsanika1234@gmail.com.com')}
        size={32}
        style={{ cursor: 'pointer' }}
      />
      <FaPhone
        onClick={() => (window.location.href = 'tel:+9172968086')}
        size={32}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ContactIcons;
