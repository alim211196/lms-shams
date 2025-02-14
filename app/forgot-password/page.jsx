import Link from 'next/link'
import React from 'react'
import headerLogo from '../assets/images/shams-logo.svg';
import Image from "next/image";
import RootLayout from '../layout';

const page = () => {
   const isLoggedIn = false;
   return (
     <RootLayout hideHeaderFooter={isLoggedIn}>
    <div className="reset-password">
      <div className="auth-wrap">
        <div className="auth-right">
          <div className='resetBox'>
            <div className="log_wraps">

              <div className='logoBox'>
                <Link href="#"><Image src={headerLogo} alt="Logo" /></Link>
              </div>

              <div className="log__heads">
                <h4 className="logs_title">Reset Password</h4>
                <p>Don’t worry, happens to all of us. Enter your email below to recover your password </p>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="text" className="form-control" placeholder='Enter Email Address' />
              </div>

              <div className="form-group">
                <a href="index.html" className="btn_apply">Send OTP</a>
              </div>

              <div className="back-login form-group text-center">
                <Link href='#'>Back To login</Link>
              </div>

            </div>
          </div>
          </div>
        </div>
      </div>
      </RootLayout>
  )
}

export default page