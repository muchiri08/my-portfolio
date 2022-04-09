import React from 'react';
import '../styles/Portfolio.css';
import Image from '../assets/evergreenbakery.png';
import Image2 from '../assets/cloudhosting.png';
import Image3 from '../assets/onlinemobihub.png';
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={Image} alt="Image" />
          </div>
          <h3>Evergreen Bakery</h3>
          <a href="https://github.com/muchiri08/EvergreenBakery" className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={Image2} alt="Image" />
          </div>
          <h3>Fake CloudHosting Platform</h3>
          <a href="https://github.com/muchiri08/Cloud-Hosting-Website" className='btn' target='_blank'>Github</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={Image3} alt="Image" />
          </div>
          <h3>OnlineMobiHub</h3>
          <a href="https://github.com/muchiri08/OnlineMobiHub" className='btn' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio