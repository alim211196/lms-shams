import Link from 'next/link'
import React from 'react'
import headerLogo from '../assets/images/shams-logo.svg';
import Image from "next/image";

const page = () => {
  return (
    <div className="reset-password">
      <div className="auth-wrap">
        <div className="auth-right">
          <div className='resetBox'>
            <div className="log_wraps">

              <div className='logoBox'>
                <Link href="#"><Image src={headerLogo} alt="Logo" /></Link>
              </div>

              <div className="log__heads">
                <Link className='backLink' href='#'>Back To login</Link>
                
                <h4 className="logs_title">Verify code</h4>
                <p>An authentication code has been sent to your email.</p>
              </div>

              <div className="form-group">
                <label>Enter Code</label>
                <div className='otpWrap'>
                  <input type="text" class="otp-input" maxlength="1" />
                  <input type="text" class="otp-input" maxlength="1" />
                  <input type="text" class="otp-input" maxlength="1" />
                  <input type="text" class="otp-input" maxlength="1" />
                  <input type="text" class="otp-input" maxlength="1" />
                </div>
                <div className='resendCode'>
                  Didn’t receive a code?  <Link href='#'> Resend</Link>
                </div>
              </div>

              <div className="form-group">
                <a href="index.html" className="btn_apply">Verify</a>
              </div>



            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page