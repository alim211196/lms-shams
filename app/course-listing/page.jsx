import Link from 'next/link'
import React from 'react'
import courseImg from '../assets/images/courseimage.jpg';
import certiImg from '../assets/images/certification-icon.svg';
import starIcon from '../assets/images/stars.svg';
import Image from "next/image";
import RootLayout from '../layout';

const page = () => {
  const isLoggedIn = true;
  return (
    <RootLayout hideHeaderFooter={isLoggedIn}>

      <section className="courseSearchTop">
        <div className="container">
          <div className="row align-items-center">
            <div className='searchWarap'>
              <div className="header-search">
                <form action="#" class="menu-search-form">
                  <div className="input-grp">
                    <input type="text" placeholder="Search For Course . . ." />
                    <button type="submit" className='searchIcon'></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* courseFilter start here */}
      <section className="courseFilter">
        <div className="container">
          <div className="row">
            <div class="col-lg-3 order-2 order-lg-1">
              <aside class="lms-sidebar">

                <div className='filterHeading'>
                  <h2 className='filterIcon'>Filter</h2>
                </div>

                <div class="lmst-single-widget">
                  <div class="inner">
                    <h4 class="lms-widget-title">Categories <span className='arrow'></span> </h4>
                    <ul class="lms-list-wrapper list-check">
                      <li class="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1">Lorem ipsum</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">Lorem ipsum</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">Lorem ipsum</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">Lorem ipsum</label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="lmst-single-widget">
                  <div class="inner">
                    <h4 class="lms-widget-title">Rating <span className='arrow'></span> </h4>
                    <ul class="lms-list-wrapper list-check">
                      <li class="lms-check-group">
                        <input type="checkbox" id="r1" />
                        <label for="r1">1-5 rating</label>
                      </li>
                      <li class="lms-check-group">
                        <input type="checkbox" id="r2" />
                        <label for="r2">1-4 rating</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="r3" />
                        <label for="r3">1-3 rating</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="r4" />
                        <label for="r4">1-2 rating</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="r5" />
                        <label for="r5">1-1 rating</label>
                      </li>
                    </ul>
                  </div>
                </div>


                <div class="lmst-single-widget">
                  <div class="inner">
                    <h4 class="lms-widget-title">Price </h4>
                    <ul class="lms-list-wrapper list-check">
                      <li class="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1">Yes</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">No</label>
                      </li>

                    </ul>
                  </div>
                </div>


                <div class="lmst-single-widget">
                  <div class="inner">
                    <h4 class="lms-widget-title">Certifications <span className='arrow'></span> </h4>
                    <ul class="lms-list-wrapper list-check">
                      <li class="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1">Yes</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">No</label>
                      </li>

                    </ul>
                  </div>
                </div>


                <div class="lmst-single-widget">
                  <div class="inner">
                    <h4 class="lms-widget-title">Langauage <span className='arrow'></span> </h4>
                    <ul class="lms-list-wrapper list-check">
                      <li class="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1">English</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">Hindi</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">Arbic</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">China</label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="lmst-single-widget">
                  <div class="inner">
                    <h4 class="lms-widget-title">Duration<span className='arrow'></span> </h4>
                    <ul class="lms-list-wrapper list-check">
                      <li class="lms-check-group">
                        <input type="checkbox" id="1" />
                        <label for="1">1-2 Hours</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">1-4 Hours</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">1-6 Hours</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="2" />
                        <label for="2">1-2 Hours</label>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="lmst-single-widget">
                  <div class="inner">
                    <h4 class="lms-widget-title">Difficulty Level<span className='arrow'></span> </h4>
                    <ul class="lms-list-wrapper list-check">
                      <li class="lms-check-group">
                        <input type="checkbox" id="d1" />
                        <label for="d1">Beginner</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="d2" />
                        <label for="d2">Intermediate</label>
                      </li>

                      <li class="lms-check-group">
                        <input type="checkbox" id="d3" />
                        <label for="d3">Advanced.</label>
                      </li>
                    </ul>
                  </div>
                </div>


              </aside>
            </div>

            <div class="col-lg-9 order-1 order-lg-2">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

                      </div>

                    </div>

                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="course-card">
                    <div className="course-img">
                      <Image src={courseImg} className="img-fluid" alt="course-img" />
                      <div className="trend-certi">
                        <ul>
                          <li><a className="trending">Trending</a></li>
                          <li><a className="certificate"> <Image src={certiImg} alt="Certification" /> Certification</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="course-card-body">
                      <div className="course-card-top">
                        <div className="card-top">
                          <h4 className="course-card-title">
                            React Front To Back
                          </h4>
                          <p>Sorem ipsum dolor sit amet, </p>
                        </div>
                        <span className="hour-min">1 Hr 22 Min</span>
                      </div>
                      <ul className="course-review">
                        <li><span className="cview">120+</span></li>
                        <li><span className="cstar">4.0 <Image src={starIcon} /> </span></li>
                        <li><span className="creview">50 Reviews</span></li>
                      </ul>

                      <div className="course-card-bottom">
                        <div className="course-price">
                          <span className="current-price">AED 40</span>
                          <span className="off-price"><span>AED 50</span> 10%off </span>
                        </div>
                        <Link href='' className="pirmaryBtn">Enroll Now</Link>

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
                  <li>
                    <Link href="#">04</Link>
                  </li>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </section>


    </RootLayout >
  )
}

export default page