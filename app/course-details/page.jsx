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

      <section className="courseDetailsTop">
        <div className="container">
          <div className='courseDetailWrap'>
            <div className='courseImg'>
              <Image src={courseDetails} alt='' className='img-fluid' />
            </div>
            <div className='courseConatnt'>
              <h2>Public Speaking Course</h2>
              <span className='courseAuthor'>A Course By JOHN. D</span>
              <p className='coursetext'>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac </p>

              <ul className="course-review">
                <li><span className="hour-min">1 Hr 22 Min</span></li>

                <li>
                  <span className="cstar">
                    4.0 <Image src={starIcon} alt="star" width={15} height={15} />
                  </span>
                </li>
                <li>
                  <span className="cview">100+ learners</span>
                </li>
              </ul>

              <ul className="course-review">
                <li><span className="lang">English</span></li>
                <li>
                  <span className="diffi">Difficulty: <span className=''> Advance</span></span>
                </li>
              </ul>

              <div className="course-card-bottom">
                <div className="course-price">
                  <span className="current-price">AED 40</span>
                  <span className="off-price">
                    <span>AED 50</span> 10% off
                  </span>
                </div>
              </div>
              <div className='courseBtn'>
                <Link href="#" className="btnBorder">
                  Enroll Now
                </Link>
                <Link href="#" className="btnGradient">
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="courseDetailTabs">
        <div className="container">
          <div className='courseTabs'>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="course-tab" data-bs-toggle="tab" href="#course" role="tab">Course Overview</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="schedule-tab" data-bs-toggle="tab" href="#schedule" role="tab">Schedule</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="instructor-tab" data-bs-toggle="tab" href="#instructor" role="tab">Instructor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="ratings-tab" data-bs-toggle="tab" href="#ratings" role="tab">Ratings and Reviews</a>
              </li>
            </ul>


            <div className="tab-content">
              <div className="tab-pane fade show active" id="course" role="tabpanel" aria-labelledby="course-tab">
                <div className='tabInner'>
                  <div className='courseOverview'>
                    <h3 className='courseTitle'>About This Class</h3>
                    <ul className='aboutList'>
                      <li>Engage with live webinars led by industry experts to enhance your copywriting skills.</li>
                      <li>Gain practical experience through real-world projects and case studies.</li>
                      <li>Receive personalized feedback from instructors to improve your writing techniques.</li>
                      <li>Access a library of resources including e-books, templates, and tools for copywriters.</li>
                      <li>Network with fellow students and professionals in the copywriting field.</li>
                      <li>Participate in group discussions and workshops to refine your copywriting abilities.</li>
                    </ul>
                    <Link href="#" className='shareBtn'><Image src={shareIcon} alt='share' />  Share</Link>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="schedule" role="tabpanel" aria-labelledby="schedule-tab">
                <div className='tabInner'>
                  <div className='courseOverview'>
                    <h3 className='courseTitle'>About This Class 2</h3>
                   
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor-tab">
                <div className='tabInner'>
                  <div className='courseOverview'>
                    <h3 className='courseTitle'>instructor</h3>
                   
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="ratings" role="tabpanel" aria-labelledby="ratings-tab">
                <div className='tabInner'>
                  <div className='courseOverview'>
                    <h3 className='courseTitle'>ratings</h3>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="whatNeed">
        <div className="container">
          <div className="row align-items-center">
            <div className="sectionTitle">
              <h2 className="title">“What You Need to Get Started”</h2>
            </div>

            <div className="need-wrapper">
              <div className="need-item">
                <div className="needImg">
                  <Image src={whatNeed1} />
                </div>
                <p>A basic understanding of English communication.</p>
              </div>

              <div className="need-item">
                <div className="needImg">
                  <Image src={whatNeed2} />
                </div>
                <p>Access to a computer, tablet, or smartphone.</p>
              </div>

              <div className="need-item">
                <div className="needImg">
                  <Image src={whatNeed3} />
                </div>
                <p>A stable internet connection for live sessions.</p>
              </div>

              <div className="need-item">
                <div className="needImg">
                  <Image src={whatNeed4} />
                </div>
                <p>A notebook or digital tool for taking notes .</p>
              </div>

              <div className="need-item">
                <div className="needImg">
                  <Image src={whatNeed5} />
                </div>
                <p>A few hours per week to dedicate to learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="beCertificate">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <Image src={certificateImg} alt='certificateImg' className='becomeImg' />
            </div>

            <div className="col-xl-8 col-lg-8 col-md-6">
              <div className='becomeText'>
                <h3>Become a certified public Speaker</h3>
                <p>Earn your certificate upon course completion and feedback submission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="faq__content">
                <div className="sectionTitle">
                  <h2 className="title">Fequently asked questions</h2>
                </div>
                <div className="faq__wrap">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          Qorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Morem ipsum dolor sit amet, consectetur adipiscing elit.Morem ipsum dolor sit amet, consectetur adipiscing elit.Morem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseTwo">
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapseTwo">
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </RootLayout >
  )
}

export default page