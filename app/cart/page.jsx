import Link from 'next/link'
import React from 'react'
import whatNeed1 from '../assets/images/need-1.svg';
import whatNeed2 from '../assets/images/need-2.svg';
import whatNeed3 from '../assets/images/need-3.svg';
import whatNeed4 from '../assets/images/need-4.svg';
import whatNeed5 from '../assets/images/need-5.svg';
import shareIcon from '../assets/images/share-icon.svg';
import courseDetails from '../assets/images/course-details.svg';
import starIcon from '../assets/images/stars.svg';
import certificateImg from '../assets/images/certificate.svg';
import Image from "next/image";
import RootLayout from '../layout';

const page = () => {
  const isLoggedIn = true;
  return (
    <RootLayout hideHeaderFooter={isLoggedIn}>

      <section className="courseDetailsTop mycart">
        <div className="container">
          <div className='row'>
            <div class="col-lg-8 col-md-7 col-sm-12 order-1 order-lg-2">
              <h2 className='cartHeading'>My Cart</h2>
              <div className='courseCount'>1 Course in Cart</div>
              <div className='courseDetailWrap mycartLeft'>
                <div className='courseImg'>
                  <Image src={courseDetails} alt='' className='img-fluid' />
                </div>
                <div className='courseConatnt'>
                  <h3>Public Speaking Course</h3>
                  <span className='courseAuthor'>By Samy</span>

                  <ul className="course-review">

                    <li>
                      <span className="cview">10+</span>
                    </li>
                    <li><span className="hour-min">1 Hr</span></li>

                    <li>
                      <span className="cstar">
                        4.0 <Image src={starIcon} alt="star" width={15} height={15} />
                      </span>
                    </li>

                    <li><span className="creview">50 Reviews</span></li>

                  </ul>

                  <div className="course-card-bottom">
                    <div className="course-price">
                      <span className="current-price">AED 40</span>
                      <span className="off-price">
                        <span>AED 50</span> 10% off
                      </span>
                    </div>
                  </div>

                  <div className='remove'>
                    <Link href="#" className='removeIcon'>Remove</Link>
                  </div>

                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-5 col-sm-12 order-1 order-lg-2">
              <div className='cartRight'>
              <h3 className='coupanHeading'>Your Purchase</h3>
                <form class="coupanApply">
                  <input type="text" class="form-control" placeholder="Coupon code" required="" />
                  <button type="submit" class="">Apply</button></form>
                <Link href="#" className='viewOffer'>View Avialable Offers</Link>

                <div className='checkouSubTotal'>
                  <span className='subtotal'>Subtotal</span>
                  <span className='subTotalAed'>AED75 <span class="off-price"><span>AED 60</span> 10% off</span></span>
                </div>

                <div className='vatTotal'>
                  <span className='vat'>VAT<span>(5% of the above value)</span></span>
                  <span className='vatAed'>AED 25.00</span>
                </div>

                <div className='checkOutTotal'>
                  <span className='total'>Total</span>
                  <span className='totalAed'>AED75.00</span>
                </div>

                <div className='checkoutBtn'>
                  <button className='btnGradient'>CheckOut</button>
                </div>

              </div>
              <div className='cartNote'>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molesm sollicitudin lacus,
              </div>

            </div>

          </div>
        </div>
      </section>




    </RootLayout >
  )
}

export default page