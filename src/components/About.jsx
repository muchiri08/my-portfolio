import React from 'react';
import '../styles/About.css';
import Me from '../assets/me.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className = 'about__me'>
          <div className='about__me-image'>
            <img src = {Me} alt = "Image"/>
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>several</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>several</small>
            </article>
          </div>
          <p>
            Full stack Software engineer with a passion for developing innovative programs that
            expedite the efficiency and effectiveness of organizational success. Well-versed in
            technology and writing code to create systems that are reliable and user-friendly.
            Confident communicator, strategic thinker, and innovative creator to develop software
            that is customized to meet a company’s organizational needs, highlight their core
            competencies, and further their success.
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About