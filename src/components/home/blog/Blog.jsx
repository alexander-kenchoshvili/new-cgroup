import {useEffect} from 'react';
import './Blog.css';
import {Link} from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

function Blog() {


    useEffect(() =>{
        Aos.init({duration: 2000});
      }, []);
      
      useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

  return <div className='blog-section'>
      <div className='container'>
          <div className='inner-container'>
              <div className='row'>
                  <div className='col-xl-12'>
                      <div className='blog-header'>
                          <h2>Blog</h2>
                          <Link to='/blog' data-aos='zoom-in-up' >
                          <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="14.855" height="12" fill="#fcb64e" viewBox="0 0 16.855 14"><g id="Group_2" data-name="Group 2"><path id="Path_10" data-name="Path 10" className="cls-1" d="M.947,47.352l-.026.006H12.2L8.654,43.8a.931.931,0,0,1,0-1.309l.552-.552a.923.923,0,0,1,1.3,0l6.078,6.077a.929.929,0,0,1,0,1.307l-6.078,6.078a.924.924,0,0,1-1.3,0l-.552-.552a.913.913,0,0,1-.269-.651.886.886,0,0,1,.269-.639L12.24,49.99H.935A.955.955,0,0,1,0,49.044v-.781A.937.937,0,0,1,.947,47.352Z" transform="translate(0 -41.674)"></path></g></svg>
                              Read More Blogs
                          </Link>
                      </div>
                  </div>
              </div>
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
  </div>;
}


export default Blog;

