import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import {FiInstagram} from 'react-icons/fi';


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/kennedy-mbogo-5357871bb/' target='_blank'><BsLinkedin/></a>
        <a href="https://www.instagram.com/muchiri08/"> <FiInstagram /></a>
        <a href='https://twitter.com/Muchiri08' target='_blank'><BsTwitter/></a>
        <a href='https://github.com/muchiri08' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials