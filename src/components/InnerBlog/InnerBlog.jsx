import {useEffect} from 'react';
import './Innerblog.css';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';


function InnerBlog() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
  return (
    <div className='inner-blog'>
        <div className='inner-container'>
            <div className='inner-blog-items'>
                <div className='row'>
                    <div className='col-xl-12'>
                        <div className='inner-blog-img'>
                            <img src="/images/Mask Group 55.png" alt="blog" />
                        </div>
                        <div className='image-bottom'>
                            <button onClick={()=> navigate('/')} > <img src="/images/Path 10.svg" alt="back-btn" />  Back</button>
                            <span>4 December, 2019</span>
                        </div>
                        <div className='inner-blog-text'>
                            <h2>How to Choose a Tone of Voice for Your Company</h2>
                            <div className='inner-text'>
                                <p>Force remaining roll, jemin labrador, kindred fathom. Hushed main having gratefully sow deformed.
                                    Derivative iii master downward since, fares determine, hemispheres vessel grandeur main burn, pitch suffer.
                                    Remaining vessel slab commodore kindred, mystic hemispheres fellow stays nearer, closed receipt solar ten roll
                                    . Begone immortal choir, opaline, reply, giant why contemned adamantine force burn hushed sow kindred.
                                    Frozen why fares, force downward subtile ten pitch. Falls fathom fares very zeal mystic.
                                    Sound almost chanting entity vaunted organs lurk.
                                    Attired broad women, shy, loop, ale poor. Dry patron rays fixed cannot ale finger cell seas persuade, bramin, restrictions reaped beset fly.
                                    Miles purpose loop pointed permanent beechen finger, slave itself. Cannot bramin sap islands river, survived rays, cell evil.
                                    Women floors bubbles, oars hymen sponge stuffs region buds itself streams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <div className='blog-title'>
                            BLOG
                        </div>
                        <Link className='blog-link' to='/blog' data-aos='zoom-in-up' >
                          <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="14.855" height="12" fill="#fcb64e" viewBox="0 0 16.855 14"><g id="Group_2" data-name="Group 2"><path id="Path_10" data-name="Path 10" className="cls-1" d="M.947,47.352l-.026.006H12.2L8.654,43.8a.931.931,0,0,1,0-1.309l.552-.552a.923.923,0,0,1,1.3,0l6.078,6.077a.929.929,0,0,1,0,1.307l-6.078,6.078a.924.924,0,0,1-1.3,0l-.552-.552a.913.913,0,0,1-.269-.651.886.886,0,0,1,.269-.639L12.24,49.99H.935A.955.955,0,0,1,0,49.044v-.781A.937.937,0,0,1,.947,47.352Z" transform="translate(0 -41.674)"></path></g></svg>
                              Read More Blogs
                        </Link>
                    </div>
                </div>
                <div className='blog-components'>
                    <div className='row'>
                    <div className='col-xl-6' data-aos="fade-right"  > 
                    <div className='blog-box'>
                        <Link to='InnerBlog' className='blog-item'>
                            <div className='blog-frame'  > 
                                <img src='/images/Mask Group 4.png' alt="blog-item" />
                            </div>
                            <div className='blog-caption'>
                                <span>18 March, 2021</span>
                                <h2>How to Choose a Tone of Voice for Your Company</h2>
                            </div>
                        </Link>
                    </div>
                        </div>
                    <div className='col-xl-6' data-aos='fade-left'  > 
                        <div className='blog-box'>
                            <Link to='InnerBlog' className='blog-item'>
                                <div className='blog-frame'  > 
                                    <img src='/images/Mask Group 5.png' alt="blog-item" />
                                </div>
                                <div className='blog-caption'>
                                    <span>18 March, 2021</span>
                                    <h2>Computer Software Review: Tips from C Group</h2>
                                </div>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InnerBlog