import React from 'react'
import imgOne from '../images/image-about-dark.jpg';
import imgTwo from '../images/image-about-light.jpg';

function Main() {

  return (
    <main>
        <img src={imgOne} alt='img1' className='img2'/>
        <div className='main-content'>
            <h1>
                About our furniture
            </h1>
            <p>
                Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
            </p>
        </div>
        <img src={imgTwo} alt='img2' className='img2' />
    </main>
  )
}

export default Main