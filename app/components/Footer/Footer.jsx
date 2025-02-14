import Link from 'next/link'
import React from 'react'
import logoWhite from '../../assets/images/logo-white.svg';
import socialIcon1 from '../../assets/images/social-icon1.svg';
import socialIcon2 from '../../assets/images/social-icon2.svg';
import socialIcon3 from '../../assets/images/social-icon3.svg';
import socialIcon4 from '../../assets/images/social-icon4.svg';
import Image from 'next/image';


const Footer = () => {
    console.log(logoWhite, 'etst');
    return (
        <footer className="footerSection">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="cta-wrapper">
                            <h3>Subscribe to Our Newsletter For Weekly Update </h3>
                            <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            <form className="sup-form">
                                <input type="email" className="form-control sigmup-me" placeholder="Enter Your email" required="required" />
                                <button type="submit" className="">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <div className="logo">
                                    <Image src={logoWhite} />
                                </div>
                                <div className="footer-content">
                                    <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                    <ul className="list-wrap footer-social">
                                        <li><a href='#'><Image src={socialIcon1} /></a></li>
                                        <li><a href='#'><Image src={socialIcon2} /></a></li>
                                        <li><a href='#'><Image src={socialIcon3} /></a></li>
                                        <li><a href='#'><Image src={socialIcon4} /></a></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-title">Quick links</h4>
                                <div className="footer-link">
                                    <ul className="list-wrap">
                                        <li><Link href="#">About Us</Link></li>
                                        <li><Link href="#">Carrers</Link></li>
                                        <li><Link href="#">Facilities</Link></li>
                                        <li><Link href="#">Blogs</Link></li>
                                        <li><Link href="#">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-title">Certifications</h4>
                                <div className="footer-link">
                                    <ul className="list-wrap">
                                        <li><Link href="#">Communication Skills</Link></li>
                                        <li><Link href="#">Public Speaking</Link></li>
                                        <li><Link href="">Media Handling</Link></li>
                                        <li><Link href="">Presentation Skill</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="footer-title">Legal & Accessibility</h4>
                                <div className="footer-link">
                                    <ul className="list-wrap">
                                        <li><Link href="#">Cookie Policy</Link></li>
                                        <li><Link href="#">Terms and Conditions</Link></li>
                                        <li><Link href="">Privacy Policy</Link></li>
                                        <li><Link href="">Rules and Regulations</Link></li>
                                        <li><Link href="">Accessibility statement</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="copy-right-text">
                                <p>2024 SHAMS TRAINING All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="footer-bottom-menu">
                                <ul className="list-wrap">
                                    <li><Link href="">We accept online payments</Link></li>
                                    <li><Link href="">Accessibility</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
