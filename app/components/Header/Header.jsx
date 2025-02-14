
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import headerLogo from '../../assets/images/shams-logo.svg';


const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container custom-container">
                    <p>Limited-Time Offer: <span> Get 30% off</span> on all media training courses <Link href='#'>Enroll Now</Link></p>
                </div>
            </div>

            <div className="header-middle">
                <div className="container custom-container">
                    <div className="row">
                        <div className="middle-menu-wrap">
                            <div className="logo">
                                <Link href="#"><Image src={headerLogo} alt="Logo" /></Link>
                            </div>
                            <div className='middle-right'>

                            <div className='exploreBtn'>
                            <Link href="#">explore</Link>
                            </div>

                                <div className="header-search d-none d-md-block">
                                    <form action="#" class="menu-search-form">
                                        <div className="input-grp">
                                            <input type="text" placeholder="Search For Course . . ." />
                                            <button type="submit" className='searchIcon'></button>
                                        </div>
                                    </form>
                                </div>

                                <div className="tgmenu-action">
                                    <ul class="list-wrap">
                                        <li><Link href="#">Facilities</Link></li>
                                        <li><Link href="#">Teach</Link></li>
                                        <li><Link href="#">SHAMS Corporate</Link></li>
                                        <li className="wishlist-icon">
                                            <a href="#" class="cart-count btn">
                                                <span className="lang-icon"></span>
                                            </a>
                                        </li>
                                        <li className="mini-cart-icon">
                                            <a href="#" class="cart-count btn">
                                                <span className="cart-icon"></span>
                                            </a>
                                        </li>
                                        <li className="header-btn login-btn">
                                            <Link href="#" className='btn'>Log in</Link>
                                        </li>
                                        <li className="header-btn signup-btn">
                                            <Link href="#">Join Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="container custom-container">
                    <nav className="navbar navbar-expand-md navbar-dark navbar-hover">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHover" aria-controls="navbarDD" aria-expanded="false" aria-label="Navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarHover">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Courses</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Courses</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Courses</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Courses</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Courses</a>
                                </li>
                                {/* <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Courses
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Link</a></li>
                                        <li><a class="dropdown-item" href="#">Link</a></li>
                                        <li><a class="dropdown-item dropdown-toggle" href="#">Submenu</a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Submenu link</a></li>
                                                <li><a class="dropdown-item" href="#">Submenu link 2</a></li>
                                                <li><a class="dropdown-item dropdown-toggle" href="#">Subsubmenu</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Subsubmenu 1</a></li>
                                                        <li><a class="dropdown-item" href="#">Subsubmenu 2</a></li>
                                                    </ul>
                                                </li>
                                                <li><a class="dropdown-item dropdown-toggle" href="#">Subsubmenu 2</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Subsubmenu 2.1</a></li>
                                                        <li><a class="dropdown-item" href="#">Subsubmenu 2.2</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item dropdown-toggle" href="#">Submenu 2</a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Submenu 2 link</a></li>
                                                <li><a class="dropdown-item" href="#">Submenu 2 link 2</a></li>
                                                <li><a class="dropdown-item dropdown-toggle" href="#">Subsubmenu 2</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Link</a></li>
                                                        <li><a class="dropdown-item" href="#">Link</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        </header>
    )
}

export default Header
