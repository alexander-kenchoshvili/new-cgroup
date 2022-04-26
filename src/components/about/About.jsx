import {useEffect} from 'react';
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {

    useEffect(() =>{
        Aos.init({duration: 2000});
        }, []);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className='about-section'>
        <div className='inner-container'>
            <div className='about-items'>
                <div className='row'>
                    <div className='col-xl-12'>
                        <div className='about-title' data-aos="fade-in-down" >ABOUT</div>
                    </div>
                </div>
                <div className='about-box'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='about-img-frame' data-aos="zoom-in-right">
                                <img src="/images/illustration 1.svg" alt="about" />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='about-text-frame' data-aos="zoom-in-left" >
                                <h2>We are your reliable partner</h2>
                                <div className='about-text'>
                                    <p>C Group is a web development company made up of young, creative, and motivated people.</p>
                                    <p>We are ready to implement your ideas and transform them into the best, most functional, and unique digital products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-box'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='about-text-frame' data-aos="zoom-in-right" >
                                <h2>FROM COOL STUDIO TO C GROUP</h2>
                                <div className='about-text'>
                                    <p>Our story begins in 2009 with the name of Cool Studio, which wanted to create something "cool", different, innovative, and useful.</p>
                                    <p>At the expense of tireless work and overcoming difficulties for 11 years, we have accumulated knowledge, acquired the necessary skills, and gained experience.</p>
                                    <p>Today, C Croup already unites a group of professional and talented people. The main goal of the company to create innovative products for success and development is still unchanged.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='about-img-frame' data-aos="zoom-in-left" >
                                <img src="/images/illustration 2.svg" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-box'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='about-img-frame' data-aos="zoom-in-right" >
                                <img src="/images/illustration 3.svg" alt="about" />
                            </div>
                        </div>
                        <div className='col-xl-6'>
                            <div className='about-text-frame' data-aos="zoom-in-left" >
                                <h2>Do you need a website? - Let's do it together</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )

}

export default About