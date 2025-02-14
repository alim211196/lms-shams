import Link from 'next/link'
import React from 'react'
import googleIcon from '../assets/images/google-icon.svg';
import facebookIcon from '../assets/images/facebook-icon.svg';
import appleIcon from '../assets/images/apple-icon.svg';
import searchIcon from '../assets/images/search-icon.svg';
import facProductImg from '../assets/images/facility-product.png';
import Image from "next/image";
import RootLayout from '../layout';

const page = () => {
  const isLoggedIn = true;
  return (
    <RootLayout hideHeaderFooter={isLoggedIn}>

      <section className="facilityFilter">
        <div className="container">
          <div className="filter-wrapper">

            <div className="filter-left">

              <div className="select-item">
                <select className='form-control'>
                  <option value="">Space Type</option>
                  <option value="academy">Academy</option>
                </select>
              </div>

              <div className="select-item">
                <select className='form-control'>
                  <option value="">Location</option>
                </select>
              </div>

              <div className="select-item">
                <select className='form-control'>
                  <option value="">capacity</option>
                </select>
              </div>

              <div className="select-item">
                <select className='form-control'>
                  <option value="">amenities</option>
                </select>
              </div>

              <div className="select-item">
                <select className='form-control'>
                  <option value="">price</option>
                  <option value="html">HTML</option>
                </select>
              </div>
            </div>
              <Link href='#' className='search-btn'> <i></i> </Link>
            
          </div>
        </div>
      </section >


      <section className="facilitySection">
        <div className="container">
          <div className="row align-items-center">
            <div className="sectionTitle">
              <h2 className="title">Space to meet, share and</h2>
              <p className="subTitle">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molesm sollicitudin lacus, </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-12">
              <div className='facilityProduct'>
                <div className='facProductImg'>
                  <Image src={facProductImg} className="img-fluid" alt="course-img" />
                </div>
                <div className='facProductContant'>
                  <div className='ContantLeft'>
                    <h3>Training Room</h3>
                    <p>SBorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molesm sollicitudin lacus, </p>
                    <ul className='list'>
                      <li>SBorem ipsum</li>
                      <li> SBorem ipsum</li>
                      <li>SBorem ipsum</li>
                    </ul>
                  </div>
                  <div className='ContantRight'>
                    <div className='productPrice'>AED 40/ <span>Per Hour</span></div>
                    <div className='priceOff'><span>AED 50</span> 10%off</div>
                    <Link href='#' className='btnGradient'>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-12">
              <div className='facilityProduct'>
                <div className='facProductImg'>
                  <Image src={facProductImg} className="img-fluid" alt="course-img" />
                </div>
                <div className='facProductContant'>
                  <div className='ContantLeft'>
                    <h3>Conference Room</h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nec odio non mauris pellentesque posuere. Nam tincidunt mauris nec mi semper, at tristique tortor ultricies. </p>

                  </div>
                  <div className='ContantRight'>
                    <div className='productPrice'>AED 40/ <span>Per Hour</span></div>
                    <div className='priceOff'><span>AED 50</span> 10%off</div>
                    <Link href='#' className='btnGradient'>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-12">
              <div className='facilityProduct'>
                <div className='facProductImg'>
                  <Image src={facProductImg} className="img-fluid" alt="course-img" />
                </div>
                <div className='facProductContant'>
                  <div className='ContantLeft'>
                    <h3>Meeting Room</h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nec odio non mauris pellentesque posuere. Nam tincidunt mauris nec mi semper, at tristique tortor ultricies. </p>

                  </div>
                  <div className='ContantRight'>
                    <div className='productPrice'>AED 40/ <span>Per Hour</span></div>
                    <div className='priceOff'><span>AED 50</span> 10%off</div>
                    <Link href='#' className='btnGradient'>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <ul className="pagination lab-ul">

              <li>
                <Link href="#">01</Link>
              </li>
              <li>
                <Link href="#" class="active">02</Link>
              </li>
              <li>
                <Link href="#">03</Link>
              </li>

            </ul>

          </div>

        </div>

      </section>


    </RootLayout >
  )
}

export default page