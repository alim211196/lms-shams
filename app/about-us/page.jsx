import Link from 'next/link'
import React from 'react'
import googleIcon from '../assets/images/google-icon.svg';
import facebookIcon from '../assets/images/facebook-icon.svg';
import appleIcon from '../assets/images/apple-icon.svg';
import featureIcon1 from '../assets/images/feature-icon1.svg';
import aboutShams from '../assets/images/about-shams.png';
import impectImg1 from '../assets/images/impect-1.svg';
import Image from "next/image";
import RootLayout from '../layout';
import ModalComponent from '../components/Modal/Modal';

const page = () => {
  const isLoggedIn = true;
  return (
    <RootLayout hideHeaderFooter={isLoggedIn}>
      <section className="aboutTopBanner">
        <div className="container">
          <div className="row align-items-center">
            <div className='aboutConatnt'>
              <h2>Empowering Media Minds for a Brighter Tomorrow</h2>
              <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutShams">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 col-12">
              <div className='shamsConatnt'>
                <h3 className='headingTitle'>About Shams</h3>
                <p className='globalFont'>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.Sorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                </p>
                <p className='globalFont'>aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <p className='globalFont'>
                  aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <Image src={aboutShams} alt='aboutShams' className='img-fluid' />
            </div>
          </div>
        </div>
      </section>


      <section className="MissionSection">
        <div className="container">
          <div className='ourMissionBg'>
          <div className='row align-items-center'>
          <div className="col-lg-5 col-md-6 col-12"> </div>
          <div className="col-lg-7 col-md-6 col-12">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="mission-tab" data-bs-toggle="tab" href="#mission" role="tab">Our Mission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="vision-tab" data-bs-toggle="tab" href="#vision" role="tab">Our Vision</a>
              </li>
            </ul>
            </div>
            </div>

            <div className="tab-content">
              <div className="tab-pane fade show active" id="mission" role="tabpanel" aria-labelledby="mission-tab">
                <div className='row align-items-center'>
                  <div className="col-lg-5 col-md-6 col-12">
                    <div className='vissionLeft'>
                      <h2>Our
                        Mission</h2>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6 col-12">
                  <div className='vissionRight'>
                    <p>To provide comprehensive and accessible media training that empowers individuals to excel in the ever-evolving media landscape.
                    </p>
                    <p>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.To provide comprehensive and accessible media training that empowers individuals to excel in the ever-evolving media landscape.
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="vision" role="tabpanel" aria-labelledby="vision-tab">
                <div className='row align-items-center'>
                  <div className="col-lg-5 col-md-6 col-12">
                  <div className='vissionLeft'>
                    <h2>Our Vision</h2>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6 col-12">
                  <div className='vissionRight'>
                    <p>To provide comprehensive and accessible media training that empowers individuals to excel in the ever-evolving media landscape.
                    </p>
                    <p>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.To provide comprehensive and accessible media training that empowers individuals to excel in the ever-evolving media landscape.
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="workWithUs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4 col-12">
              <div className='WorkConatnt bg-1'>
                <h3 className='headingTitle'>Work with us</h3>
                <p className='globalFont'>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <Link href="#">Join our team</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className='WorkConatnt bg-2'>
                <h3 className='headingTitle'>See our research</h3>
                <p className='globalFont'>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <Link href="#">Learn more</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className='WorkConatnt bg-3'>
                <h3 className='headingTitle'>Read our blog</h3>
                <p className='globalFont'>
                  Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <Link href="#">Read now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="platFeatSection">
        <div className="container">

          <div className="topRated">
            <div className="sectionTitle left">
              <h2 className="title">
                Platform Features
              </h2>
            </div>
            <div className="topRated-right">
              <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              <div className='platformFeature'>
                <div className='imgwrap'>
                  <Image src={featureIcon1} alt='' className='img-fluid' />
                </div>
                <h3>Expert Trainers</h3>
                <p>Access to top media professionals with years of experience.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className='platformFeature'>
                <div className='imgwrap'>
                  <Image src={featureIcon1} alt='' className='img-fluid' />
                </div>
                <h3>Real-World Training</h3>
                <p>Access to top media professionals with years of experience.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <div className='platformFeature'>
                <div className='imgwrap'>
                  <Image src={featureIcon1} alt='' className='img-fluid' />
                </div>
                <h3>Flexible Learning Options</h3>
                <p>Access to top media professionals with years of experience.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <div className='platformFeature'>
                <div className='imgwrap'>
                  <Image src={featureIcon1} alt='' className='img-fluid' />
                </div>
                <h3>Community Support</h3>
                <p>Access to top media professionals with years of experience.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="impectSection">
        <div className="container">
          <div className="row align-items-center">

            <div className="sectionTitle">
              <h2 className="title">Creating impact around the world</h2>
              <p className="subTitle">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>

            <div className="impect-wrapper">
              <div className="impect-item">
                <div className="impectImg">
                  <Image src={impectImg1} />
                </div>
                <h4>100+</h4>
                <p>Courses Offered</p>
              </div>
              <div className="impect-item topSpace">
                <div className="impectImg">
                  <Image src={impectImg1} />
                </div>
                <h4>99%</h4>
                <p>Completion Rate</p>
              </div>
              <div className="impect-item">
                <div className="impectImg">
                  <Image src={impectImg1} />
                </div>
                <h4>10k+</h4>
                <p>Certified Students</p>
              </div>
              <div className="impect-item topSpace">
                <div className="impectImg">
                  <Image src={impectImg1} />
                </div>
                <h4>50+</h4>
                <p>Expert Instructors</p>
              </div>
              <div className="impect-item">
                <div className="impectImg">
                  <Image src={impectImg1} />
                </div>
                <h4>10+</h4>
                <p>Carrier Path</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <button className='btn btn-added' data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Brand
      </button>
      <ModalComponent />
    </RootLayout >
  )
}

export default page