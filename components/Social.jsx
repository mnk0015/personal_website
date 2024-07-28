import React from 'react'

import {FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const socials = [
    {icon: <FaGithub/>, path: "https://github.com/mnk0015"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/mohammed-nazib-hossain-khan/"},
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
        return (
            <Link 
            key={index} 
            href={item.path} 
            className={iconStyles}
            >
            {item.icon}
            </Link>
         );
        })}
    </div>
  );
}

export default Social;