import React from 'react';
import '../styles/Footer.css';
import {FaLinkedin} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Muchirike</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/kennedy-mbogo-5357871bb/"> <FaLinkedin /></a>
        <a href="https://twitter.com/Muchiri08"> <IoLogoTwitter /></a>
        <a href="https://www.instagram.com/muchiri08/"> <FiInstagram /></a>
        <a href='https://github.com/muchiri08' target='_blank'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2021. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer