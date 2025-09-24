import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const MediaIcon: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 text-white">
      <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
      <a href="#" aria-label="Youtube"><FaYoutube size={24} /></a>
      <a href="#" aria-label="Twitter"><FaTwitter size={24} /></a>
      <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
    </div>
  );
};

export default MediaIcon;
