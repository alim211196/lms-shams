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
              <h2 className='cartHeading'>Checkout</h2>
              <div className='checkoutHeading'>Your basic information</div>
              <div className='checkoutForm'>
                <div className='checkoutInner'>
                  <form>
                    <div class="row">
                      <div class="form-group col-6"><label>First name</label>
                        <input type="text" class="form-control" placeholder="Enter First name" />
                      </div>
                      <div class="form-group col-6"><label>Last name</label>
                        <input type="text" class="form-control" placeholder="Enter Last name" />
                      </div>
                      <div class="form-group col-6"><label>Email</label>
                        <input type="text" class="form-control" placeholder="Enter Email Address" />
                      </div>
                      <div class="form-group col-6"><label>Address</label>
                        <input type="text" class="form-control" placeholder="Enter Address" />
                      </div>

                      <div class="form-group col-12"><label>VAt certificate number(optional)</label>
                        <input type="text" class="form-control" placeholder="lormipsum" />
                      </div>
                      

                    </div>
                  </form>
                </div>

                <div className='checkoutHeading'>Payment method</div>

                <div className='paymentMethod'>
                  <div className='paymentHead'>
                    <div className='cardImg'> Credit card</div>
                  </div>
                  <div className='paymentInner'>
                    <form>
                      <div class="row">
                        <div class="form-group col-12">
                          <label>Card Number</label>
                          <input type="text" class="form-control" placeholder="1234 5678 9012 4555" />
                        </div>
                        <div class="form-group col-6">
                          <label>Expiry date</label>
                          <input type="text" class="form-control" placeholder="MM/YY" />
                        </div>
                        <div class="form-group col-6"><label>Expiry date</label>
                          <input type="text" class="form-control" placeholder="Enter Email Address" />
                        </div>

                        <div class="form-group col-12"><label>Name on card</label>
                          <input type="text" class="form-control" placeholder="lormipsum" />
                        </div>
                        <div class="form-group col-12">
                        <div class="checkbox">
                          <input id="checkbox1" type="checkbox" value="yes" />
                          <label for="checkbox1"> Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molesm sollicitudin lacus, 
                          </label>
                        </div>
                      </div>

                      </div>
                    </form>
                  </div>
                </div>

                <div className='paymentMethod'>
                  <div className='paymentHead'>
                    <div className='cardImg'>Apple Pay</div>
                  </div>
                </div>

                <div className='paymentMethod'>
                  <div className='paymentHead'>
                    <div className='cardImg'>All other methods</div>
                  </div>
                </div>

              </div>
            </div>

            <div class="col-lg-4 col-md-5 col-sm-12 order-1 order-lg-2">
              <div className='cartRight'>


                <div className='courseDetailWrap'>
                  <div className='courseImg'>
                    <Image src={courseDetails} alt='' className='img-fluid' />
                  </div>
                  <div className='courseConatnt'>
                    <h3>Public Speaking Course</h3>
                    <span className='courseAuthor'>By Samy</span>

                    <div className="course-card-bottom">
                      <div className="course-price">
                        <span className="current-price">AED 40</span>
                        <span className="off-price">
                          <span>AED 50</span> 10% off
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                <h3 className='coupanHeading'>Summary</h3>

                <div className='checkouSubTotal'>
                  <span className='subtotal'>Subtotal</span>
                  <span className='subTotalAed'>AED75 <span class="off-price"><span>AED 60</span> 10% off</span></span>
                </div>

                <div className='vatTotal'>
                  <span className='vat'>One-time Discount Savings:</span>
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