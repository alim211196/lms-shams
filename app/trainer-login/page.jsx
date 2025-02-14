import Link from 'next/link'
import React from 'react'
import googleIcon from '../assets/images/google-icon.svg';
import facebookIcon from '../assets/images/facebook-icon.svg';
import appleIcon from '../assets/images/apple-icon.svg';
import authLogin from '../assets/images/trainer-login.svg';
import Image from "next/image";
import RootLayout from '../layout';

const page = () => {
    const isLoggedIn = false;
      return (
        <RootLayout hideHeaderFooter={isLoggedIn}>
    <div className="auth-main">

      <div className="auth-wrap">
        <div className="auth-bg">
          <Image src={authLogin} alt='login' />
        </div>
        <div className="auth-right">
          <div className="log_wraps">

            <div className="log__heads">
              <h2 className="logs_title">Log in to your account</h2>
              <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio  </p>
            </div>

            <div className="form-group">
              <input type="text" className="form-control" placeholder='Email' />
            </div>

            <div className="form-group">
              <input type="password" className="form-control" placeholder='Password' />
            </div>

            <div className="form-group">
              <div class="checkbox">
                <input id="checkbox1" type="checkbox" value="yes" />
                <label for="checkbox1"> Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                </label>
              </div>
            </div>

            <div className="form-group">
              <Link href="#" className="btn_apply">Log in</Link>
            </div>

            <div className="allready-login form-group text-center">
              <span>Already Have A Account? <Link href='#'> Sign In</Link></span>
            </div>

            <div className="social_logs">
              <ul>
                <li className="gp-login"><Link href='#'><Image src={googleIcon} /></Link></li>
                <li className="fb-login"><Link href='#'> <Image src={facebookIcon} /> </Link></li>
                <li className="ap-login"><Link href='#'><Image src={appleIcon} /></Link></li>
              </ul>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
    </RootLayout>
  )
}

export default page