import Link from 'next/link'
import React from 'react'
import googleIcon from '../assets/images/google-icon.svg';
import facebookIcon from '../assets/images/facebook-icon.svg';
import appleIcon from '../assets/images/apple-icon.svg';
import authSignUp from '../assets/images/tariner-signup.svg';
import headerLogo from '../assets/images/shams-logo.svg';
import Image from "next/image";
import RootLayout from '../layout';

const page = () => {
  const isLoggedIn = false;
  return (
    <RootLayout hideHeaderFooter={isLoggedIn}>
      <div className='trainerHeader'>
        <div className='container'>
          <div className='headerWrap'>
            <div className="logo">
              <Link href="#"><Image src={headerLogo} alt="Logo" /></Link>
            </div>
            <Link className='CancelBtn' href="#">Cancel </Link>
          </div>
        </div>
      </div>

      <section class="design-process signupDetails" >
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul className="nav nav-tabs process-model more-icon-preocess" role="tablist">
                <li role="presentation" class="visited"><Link href="#personal-details" aria-controls="consulting" role="tab" data-toggle="tab"> <i className='personalIcon'></i>
                  <p>Personal Details</p>
                </Link></li>
                <li role="presentation" class="active"><Link href="#teaching-details" aria-controls="recruit" role="tab" data-toggle="tab"> <i className='detailIcon'></i>
                  <p>Teaching Details</p>
                </Link></li>
                <li role="presentation"> <Link href="#teacher-status" aria-controls="delivery" role="tab" data-toggle="tab"><i className='statusIcon'></i>
                  <p>Status</p> </Link>
                </li>

              </ul>

              <div className="tab-content">
                <div role="tabpanel" class="tab-pane active" id="personal-details">
                  <div className="process-content">
                    <div className="aboutDestail">
                      <h3>Personal Details</h3>
                      <p>Korem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <form>
                      <div class="form-group">
                        <label>First Name*</label>
                        <input type="email" class="form-control" placeholder="Name" />
                      </div>

                      <div class="form-group">
                        <label>Last Name*</label>
                        <input type="email" class="form-control" placeholder="Last Name" />
                      </div>

                      <div class="form-group">
                        <label>Phone Number</label>
                        <input type="email" class="form-control" placeholder="Phone Number" />
                      </div>

                      <div class="form-group">
                        <label>Address</label>
                        <input type="email" class="form-control" placeholder="Address" />
                      </div>
                      <div class="text-center">
                        <button type="submit" class="btn-gradient">Next</button>
                      </div>
                    </form>

                  </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="teaching-details">
                  <div className="process-content">
                    <div className="aboutDestail">
                      <h3>Teaching Details</h3>
                      <p>Korem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <form>
                      <div class="form-group">
                        <label>Company or Individual*</label>
                        <select class="form-control" placeholder="Name">
                          <option>Company-1</option>
                          <option>Company-2</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label>Trade Licence/Emirates ID*</label>
                        <input type="email" class="form-control" placeholder="Last Name" />
                      </div>

                      <div class="form-group">
                        <label>Certifications*</label>
                        <input type="email" class="form-control" placeholder="Phone Number" />
                      </div>

                      <div class="form-group">
                        <label>Expertise*</label>
                        <select class="form-control" placeholder="Name">
                          <option>Expertise-1</option>
                          <option>Expertise-2</option>
                        </select>
                      </div>
                      <div class="text-center">
                        <button type="submit" class="btn-gradient">Next</button>
                      </div>
                    </form>

                  </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="teacher-status">
                  <div className="process-content">
                    <div className="application-review">
                      <h4>Application under review</h4>
                      <p>Korem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>

                    <div className="application-review">
                      <h4>Application Approved Successfully!</h4>
                      <p>Korem ipsum dolor sit amet, consectetur adipiscing elit</p>

                      <button type="submit" class="btn-gradient">Continue</button>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>


    </RootLayout>
  )
}

export default page