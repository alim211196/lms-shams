import Link from 'next/link'
import React from 'react'
import headerLogo from '../assets/images/shams-logo.svg';
import eyeIcon from '../assets/images/eye-icon.svg';
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
                <h4 className="logs_title">Set a password</h4>
                <p>Kindly create a new password for your account. </p>
              </div>

              <div className="form-group password">
                <input type="password" className="form-control" placeholder='Create Password' />
                <Image className='eyeIcon' src={eyeIcon} alt='eye' />
              </div>

              <div className="form-group password">
                <input type="password" className="form-control" placeholder='Re-enter Password' />
                <Image className='eyeIcon' src={eyeIcon} alt='eye' />
              </div>

              <div className="form-group">
              <Link href="#" className="btn_apply">Set password</Link>
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