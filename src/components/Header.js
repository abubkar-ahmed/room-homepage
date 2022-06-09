import React from 'react'
import logo from '../images/logo.svg';
import ham from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';
import backword from '../images/icon-angle-left.svg';
import forword from '../images/icon-angle-right.svg';
import arrow from '../images/icon-arrow.svg';
import heroOne from '../images/mobile-image-hero-1.jpg';
import heroTwo from '../images/mobile-image-hero-2.jpg';
import herothree from '../images/mobile-image-hero-3.jpg';
import heroOneD from '../images/desktop-image-hero-1.jpg';
import heroTwoD from '../images/desktop-image-hero-2.jpg';
import herothreeD from '../images/desktop-image-hero-3.jpg';


function Header() {
    const navRef = React.useRef(null);
    function toggleNav(){
        navRef.current.classList.toggle('display-none');
    }

    const [windowCheck, setWindowScheck] =React.useState(false)

    React.useEffect(() => {
        if(window.innerWidth < 1200){
            setWindowScheck(true);
        }
    },[])

    React.useEffect(() => {
        window.addEventListener('resize',handler);
        return () => {
            // clean up
            window.removeEventListener('resize',handler);
        }

    })

    function handler(){
        if(window.innerWidth < 1200){
            setWindowScheck(true);
        }else{
            setWindowScheck(false)
        }
    }

    
    const data = [
        {
            id:1,
            img:windowCheck ? heroOne :heroOneD,
            heroHeader:'Discover innovative ways to decorate',
            heroPara:  " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            id:2,
            img:windowCheck ?  heroTwo : heroTwoD,
            heroHeader:'We are available all across the globe',
            heroPara:  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            id:3,
            img:windowCheck ? herothree : herothreeD,
            heroHeader:'Manufactured with the best materials',
            heroPara:  "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ]   


    const [indecator, setIndecator] = React.useState(0);

    function increment(){
        if(indecator < 2) {
            setIndecator(prevIndecator => {
                return prevIndecator + 1 ;
            })
        }
    }
    function decrement(){
        if(indecator > 0) {
            setIndecator(prevIndecator => {
                return prevIndecator - 1 ;
            })
        }
    }
    
  return (
    <header className='header' >
        <div className='first-div' style={{backgroundImage: `url(${data[indecator].img})`}}>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <nav>
                <img src={ham} alt='ham' onClick={toggleNav} className='ham'/>
                <div className='dropback ' ref={navRef}>
                    <ul>
                        <li onClick={toggleNav}><img src={close} alt='close' className='close'/></li>
                        <li>home</li>
                        <li>shop</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </div>
            </nav>
            <div className='control'>
                <div className='backword' onClick={decrement}><img src={backword} alt='backword' /></div>
                <div className='backword' onClick={increment}><img src={forword} alt='forword' /></div>
            </div>
        </div>
        <div className='seconed-div'>
            <h1>{data[indecator].heroHeader}</h1>
            <p>
                {data[indecator].heroPara}
            </p>
            <div className='shop-now'>
                <h2>SHOP NOW</h2>
                <img src={arrow} alt='arrow' />
            </div>
        </div>
    </header>
  )
}

export default Header