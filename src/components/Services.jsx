import React from 'react';
import '../styles/Services.css';
import {AiOutlineCheck} from 'react-icons/ai'

function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>I use HTML5, CSS3, and React Javascript for frontend</p>
            </li><li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>I use Java Springboot for backed and APIs</p>
            </li>
            <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Tools include vscode, postman, github etc</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Android Development</h3>
          </div>
          <ul className='service__list'>
            <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>XML and Kotlin for frontend and application logic</p>
            </li><li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Sqlite, APIs with springboot for backed</p>
            </li>
            <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Tools include android studio, github etc</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>DApps Development</h3>
          </div>
          <ul className='service__list'>
            <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>I use HTML5, CSS3,React Javascript and web3 for frontend</p>
            </li><li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>I use solidity for smart contracts and backed</p>
            </li>
            <li>
               <AiOutlineCheck className='service__list-icon'/>
               <p>Tools to use include vscode, hardhat, moralis, infura, metamask etc</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services