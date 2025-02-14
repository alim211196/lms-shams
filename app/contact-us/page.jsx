import Link from 'next/link'
import React from 'react'
import contactMap from '../assets/images/conatct-map.png';
import timeIcon from '../assets/images/time-icon.svg';
import callIcon from '../assets/images/call-icon.svg';
import addressIcon from '../assets/images/address-icon.svg';
import Image from "next/image";
import RootLayout from '../layout';
import ModalComponent from '../components/Modal/Modal';

const page = () => {
  const isLoggedIn = true;
  return (
    <RootLayout hideHeaderFooter={isLoggedIn}>
      <section className="ContactBanner">
        <div className="container">
          <div className="sectionTitle">
            <h2 className="title">Contact Us</h2>
            <p>Get in touch with our friendly team for any queries you may have. We look forward to hearing from you.</p>
          </div>

          <form className='contactForm'>
            <div class="row">
              <div class="form-group col-12">
                <label>Your name*</label>
                <input type="text" class="form-control" placeholder="Your name" />
              </div>
              <div class="form-group col-6">
                <label>Contact email *</label>
                <input type="text" class="form-control" placeholder="you@example.com" />
              </div>
              <div class="form-group col-6"><label>Contact No*</label>
                <input type="text" class="form-control" placeholder="Contact No*" />
              </div>

              <div class="form-group col-12"><label>Country*</label>
                <select class="form-control">
                  <option>India</option>
                  <option>Pakistan</option>
                </select>
              </div>

              <div class="form-group col-12"><label>Your message*</label>
                <textarea className='form-control' placeholder='Type your message….'></textarea>
              </div>

              <div class="form-group col-12">
                <div class="contactPolicy">
                  By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.
                </div>
              </div>

              <div class="form-group col-12">
                <button className='btnGradient'>Submit</button>
              </div>


            </div>
          </form>

        </div>
      </section>


      <section className="contactDetails">
        <div className="container">
          <div className="row align-items-center">
            <div class="col-lg-4 col-md-4 col-12">
              <div className='contactInfo'>
                <div className="icon"><Image src={addressIcon} alt='' /></div>
                <p> Sharjah Media City (Shams), Al
                  <span>  Messaned, Al Bataeh, Sharjah,</span>
                  United Arab Emirates.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-12">
              <div className='contactInfo'>
                <div className="icon"><Image src={callIcon} alt='' /></div>
                <p>In the UAE: 800 Shams (74267)
                  <span> Outside UAE: +971 800 Shams (74267)  </span>
                  Email: info@shams.ae
                </p>
                              </div>
            </div>


            <div class="col-lg-4 col-md-4 col-12">
              <div className='contactInfo'>
                <div className="icon"><Image src={timeIcon} alt='' /></div>
                <p>
                  Monday - Friday: 8AM - 8PM
                  <span> For more details, please Contact </span>
                  us on 800 Shams (74267).
                </p>
              </div>
            </div>
        

          </div>
        </div>
      </section>

      <section className="contactMap">
        <Image src={contactMap} alt='' className='img-fluid'></Image>
      </section>

    </RootLayout >
  )
}

export default page