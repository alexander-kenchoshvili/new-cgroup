


import './Header.css'
import {Link} from 'react-router-dom';
import React, { useState} from 'react';
import Navbar from '../Navigation/Navbar';
import PageChange from '../header/PageChange/PageChange';



function Header() {

    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const [active, setActive] = useState(false);
    const handleActive = ()=>{
        setActive(true);
        setTimeout(()=>{
            setActive(false)
        },3000)
    }
    return (
        <div className='header' >
            <div className='container'>
                <div className='header-items'>
                    <div className='logo'>
                        <Link onClick={handleActive}  to="/" >
                            <img src="/images/logo.svg" alt='main-logo' />
                        </Link>
                    </div>
                    <div onClick={handleClick}  className='menu-bar'>
                        <button  className='menu-btn'>Menu
                            <div className='menu-lines'>
                                <div className='menu-line'></div>
                                <div className='menu-line'></div>
                            </div>
                        </button>
                    </div>
                    <Navbar pageChange={handleActive} onClose={handleClick} className={click ? 'navigation active' : 'navigation close' } />
                    <PageChange className={active? 'page-change active': 'page-change'} />
                </div>
            </div>
        </div>
    )
}

export default Header

