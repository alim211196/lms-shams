import Link from 'next/link'
import React from 'react'
import googleIcon from '../assets/images/google-icon.svg';
import facebookIcon from '../assets/images/facebook-icon.svg';
import appleIcon from '../assets/images/apple-icon.svg';
import searchIcon from '../assets/images/search-icon.svg';
import facilityDetails from '../assets/images/facility-details.png';
import Image from "next/image";
import RootLayout from '../layout';

const page = () => {
  const isLoggedIn = true;
  return (
    <RootLayout hideHeaderFooter={isLoggedIn}>

      <div class="breadcrumbs-wrap">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Start booking</a></li>
            <li class="breadcrumb-item active" aria-current="page">Choose Room</li>
            <li class="breadcrumb-item active" aria-current="page">About Us</li>
          </ol>
        </nav>
        </div>
      </div>

      <section className="facilityDetails">
        <div className="container">

          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className='facProductDetails'>
                <div className='facProductImg'>
                  <Image src={facilityDetails} className="img-fluid" alt="course-img" />
                </div>
                <div className='facProductContant'>
                  <div className='detailsContant'>
                    <h3>Training Room</h3>
                    <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac  </p>

                    <div className='checkAvailable'>
                      <h4>Check availability</h4>
                      <div className='checkInput'>
                        <input type="date" className="form-control" />
                        <input type="date" className="form-control" />
                      </div>
                    </div>

                    <ul className='list availableList'>
                      <li>SBorem ipsum</li>
                      <li>SBorem ipsum</li>
                      <li>SBorem ipsum</li>
                      <li>SBorem ipsum</li>
                      <li> SBorem ipsum</li>
                      <li>SBorem ipsum</li>
                    </ul>
                    <Link href='' className='btnGradient'>Book Now</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className='cateringService'>
                <div className='cateringContant'>
                  <h3>catering Service</h3>
                  <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac </p>
                </div>
                <Link href='' className='btnGradient'>Book Now</Link>
              </div>
            </div>
          </div>

        </div>

      </section>


    </RootLayout >
  )
}

export default page