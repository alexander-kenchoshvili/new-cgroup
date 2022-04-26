
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {MenuItems} from './MenuItems';
import Aos from 'aos';
import 'aos/dist/aos.css';
import FixedAdd from '../fixed-address/FixedAdd';
import FixedSocial from '../fixed-social/FixedSocial';

function Navbar({className, onClose,pageChange}) {
    useEffect(() => {
      Aos.init({duration: 2000});
    }, []);
 
    return (
        <nav className={className}>
            <div className='container'>
                <div className='nav-items'>
                    <div className='nav-head'>
                        <div className='navigation-logo'>
                            <Link  onClick={onClose}  to="/" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="17" viewBox="0 0 97.339 17"><g id="logo" transform="translate(0 0.5)"><g id="stroke_logo" data-name="stroke logo" transform="translate(-60 -60)"><path id="Path_1" data-name="Path 1" className="cls-1" d="M10.667,5.284A3.728,3.728,0,0,0,8,4.247,3.632,3.632,0,0,0,4.247,8,3.632,3.632,0,0,0,8,11.753a3.567,3.567,0,0,0,2.667-1.086L13.63,13.63A8.065,8.065,0,0,1,7.951,16,8,8,0,1,1,13.63,2.321Z" transform="translate(60 60)"></path><path id="Union_2" data-name="Union 2" className="cls-2" d="M67.951,16V0h6.716a5.877,5.877,0,0,1,.1,11.753H72.148V16Zm4.2-7.9h2.617a2.278,2.278,0,0,0,2.321-2.272,2.319,2.319,0,0,0-2.321-2.321H72.148ZM52.1,9.679V0h4.2l.1,9.516V9.63a2.074,2.074,0,0,0,4.148,0V0h4.2V9.679a6.321,6.321,0,1,1-12.641,0ZM18.272,16V0h6.716a5.891,5.891,0,0,1,5.877,5.876,5.8,5.8,0,0,1-1.877,4.3L32.4,15.951H28.079l-.095-.139-2.9-4.059H22.469V16Zm4.2-7.9h2.617a2.278,2.278,0,0,0,2.321-2.272,2.319,2.319,0,0,0-2.321-2.321H22.469ZM0,8A8,8,0,0,1,13.63,2.321L10.667,5.284A3.854,3.854,0,0,0,8,4.2,3.731,3.731,0,0,0,4.247,8,3.793,3.793,0,0,0,8,11.8a3.952,3.952,0,0,0,3.111-1.58H8V7.407h8V8A8,8,0,0,1,0,8ZM33.728,8a7.975,7.975,0,1,1,7.951,7.951A7.988,7.988,0,0,1,33.728,8Zm4.148,0a3.8,3.8,0,0,0,7.605,0,3.773,3.773,0,0,0-3.8-3.8A3.836,3.836,0,0,0,37.876,8Z" transform="translate(76.296 60)"></path></g></g></svg>
                            </Link>
                        </div>
                        <div onClick={onClose} className='menu-bar'>
                            <button   className='close-menu' >Close
                                <div className='menu-lines'>
                                    <div className='menu-line'></div>
                                    <div className='menu-line'></div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='nav-list'>
                        <div className='nav-center'>
                            <div className='menu-items'>
                                <div className='nav-bar'>
                                    <ul> {MenuItems.map((item,index)=>{
                                    return(
                                        <li   key={index}>
                                            <Link onClick={()=>{onClose();pageChange()}}  className={item.cName}   to={item.url}>{item.title}
                                               
                                            </Link>
                                        </li>
                                        )
                                    })}
                                    </ul>
                                </div>
                            </div>
                            <div className='more-info'>
                                <div className='languages'>
                                    <form>
                                        <button>EN</button>
                                        <button>GE</button>
                                    </form>
                                </div>
                                <div className='contact'>
                                    <ul>
                                        <li>Contact Us</li>
                                        <li>
                                            <a href='mailto:info@cgroup.ge' >info@cgroup.ge</a>
                                        </li>
                                        <li>
                                            <a href='tel:+995558168918' >+995 558 168918</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FixedAdd />
                    <FixedSocial />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

// function MyComponent(){
// 	const [className, setClassName] = useState('class1');

// 	useEeffect(() => {
// 		setTimeout(() => {
// 			setClassName('class2')
// 		}, 3000);
// 	}, []);

// 	return (
// 		<div className={className}></div>
// 	);
// }