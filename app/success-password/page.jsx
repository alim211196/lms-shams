import Link from 'next/link'
import React from 'react'
import headerLogo from '../assets/images/shams-logo.svg';
import sucessIcon from '../assets/images/pass-success-icon.svg';
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
            <div className="log_wraps successBox">
              <div className="log__heads">
              <div className='sucessImg'>
                <Image src={sucessIcon} alt="Logo" />
              </div>
                <h4 className="logs_title">Password Changed Successfully !</h4>
                <p>Password changed successfully, you can login again with a new password</p>
              </div>

              <div className="form-group">
              <Link href="#" className="btn_apply">Log in</Link>
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