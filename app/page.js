"use client";
import styles from "./page.module.css";
import impectImg1 from "./assets/images/impect-1.svg";
import learnerImg from "./assets/images/learner-img.svg";
import starIcon from "./assets/images/stars.svg";
import whyImg from "./assets/images/why-img.svg";
import whyExpert from "./assets/images/why-expert.svg";
import heroBanner from "./assets/images/main-img.png";
import ratingBanner from "./assets/images/rating-banner.svg";
import partnerImg from "./assets/images/partner-1.svg";
import artImg1 from "./assets/images/art-img1.svg";
import artImg2 from "./assets/images/art-img2.svg";
import courseImg from "./assets/images/courseimage.jpg";
import certiImg from "./assets/images/certification-icon.svg";
import Image from "next/image";
import Link from "next/link";
import CourseSlider from "./components/Slider/Slider";

export default function Home() {
  return (
    <main>
      <section className="heroseSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-12">
              <div className="hero-banner">
                <Image
                  src={heroBanner}
                  className="img-fluid"
                  alt="course-img"
                />
                <div className="bannerContant">
                  <h2>Upskill & Advance your Media Pro.</h2>
                  <p>Join thousands who’ve mastered communication skills.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="heroRight">
                <div className="heroRightTop">
                  <Image src={ratingBanner} alt="star" className="img-fluid" />
                  <h3>Public Speaking Course</h3>
                  <p>Sorem ipsum dolor sit amet, </p>
                  <div className="hour-min">1 Hr 22 Min</div>
                </div>
                <div className="heroRightBottom">
                  <div class="course-price">
                    <span class="current-price">AED 40</span>
                    <span class="off-price">
                      <span>AED 50</span> 10%off{" "}
                    </span>
                  </div>
                  <div className="enrollBtn">
                    <a class="pirmaryBtn" href="">
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="courseSection">
        <div className="container">
          <div className="sectionTitle left">
            <h2 className="title">
              A broad selection of courses. Our powerful Masterclasses to unlock
              your Potential!
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul className="filter-tab text-center">
                <li className="nav-item">
                  {" "}
                  <Link href="#">All</Link>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link href="#">Public Speaking</Link>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link href="#">Journalism</Link>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link href="#">Media Handling</Link>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link href="#">Advertising</Link>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link href="#">Digital Commuication</Link>{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="course-card">
                <div className="course-img">
                  <Image
                    src={courseImg}
                    className="img-fluid"
                    alt="course-img"
                  />
                  <div className="trend-certi">
                    <ul>
                      <li>
                        <a className="trending">Trending</a>
                      </li>
                      <li>
                        <a className="certificate">
                          {" "}
                          <Image src={certiImg} alt="Certification" />{" "}
                          Certification
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="course-card-body">
                  <div className="course-card-top">
                    <div className="card-top">
                      <h4 className="course-card-title">React Front To Back</h4>
                      <p>Sorem ipsum dolor sit amet, </p>
                    </div>
                    <span className="hour-min">1 Hr 22 Min</span>
                  </div>
                  <ul className="course-review">
                    <li>
                      <span className="cview">120+</span>
                    </li>
                    <li>
                      <span className="cstar">
                        4.0 <Image src={starIcon} />{" "}
                      </span>
                    </li>
                    <li>
                      <span className="creview">50 Reviews</span>
                    </li>
                  </ul>

                  <div className="course-card-bottom">
                    <div className="course-price">
                      <span className="current-price">AED 40</span>
                      <span className="off-price">
                        <span>AED 50</span> 10%off{" "}
                      </span>
                    </div>
                    <Link href="" className="pirmaryBtn">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="course-card">
                <div className="course-img">
                  <Image
                    src={courseImg}
                    className="img-fluid"
                    alt="course-img"
                  />
                  <div className="trend-certi">
                    <ul>
                      <li>
                        <a className="trending">Trending</a>
                      </li>
                      <li>
                        <a className="certificate">
                          {" "}
                          <Image src={certiImg} alt="Certification" />{" "}
                          Certification
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="course-card-body">
                  <div className="course-card-top">
                    <div className="card-top">
                      <h4 className="course-card-title">React Front To Back</h4>
                      <p>Sorem ipsum dolor sit amet, </p>
                    </div>
                    <span className="hour-min">1 Hr 22 Min</span>
                  </div>
                  <ul className="course-review">
                    <li>
                      <span className="cview">120+</span>
                    </li>
                    <li>
                      <span className="cstar">
                        4.0 <Image src={starIcon} />{" "}
                      </span>
                    </li>
                    <li>
                      <span className="creview">50 Reviews</span>
                    </li>
                  </ul>

                  <div className="course-card-bottom">
                    <div className="course-price">
                      <span className="current-price">AED 40</span>
                      <span className="off-price">
                        <span>AED 50</span> 10%off{" "}
                      </span>
                    </div>
                    <Link href="" className="pirmaryBtn">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="course-card">
                <div className="course-img">
                  <Image
                    src={courseImg}
                    className="img-fluid"
                    alt="course-img"
                  />
                  <div className="trend-certi">
                    <ul>
                      <li>
                        <a className="trending">Trending</a>
                      </li>
                      <li>
                        <a className="certificate">
                          {" "}
                          <Image src={certiImg} alt="Certification" />{" "}
                          Certification
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="course-card-body">
                  <div className="course-card-top">
                    <div className="card-top">
                      <h4 className="course-card-title">React Front To Back</h4>
                      <p>Sorem ipsum dolor sit amet, </p>
                    </div>
                    <span className="hour-min">1 Hr 22 Min</span>
                  </div>
                  <ul className="course-review">
                    <li>
                      <span className="cview">120+</span>
                    </li>
                    <li>
                      <span className="cstar">
                        4.0 <Image src={starIcon} />{" "}
                      </span>
                    </li>
                    <li>
                      <span className="creview">50 Reviews</span>
                    </li>
                  </ul>

                  <div className="course-card-bottom">
                    <div className="course-price">
                      <span className="current-price">AED 40</span>
                      <span className="off-price">
                        <span>AED 50</span> 10%off{" "}
                      </span>
                    </div>
                    <Link href="" className="pirmaryBtn">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="course-card">
                <div className="course-img">
                  <Image
                    src={courseImg}
                    className="img-fluid"
                    alt="course-img"
                  />
                  <div className="trend-certi">
                    <ul>
                      <li>
                        <a className="trending">Trending</a>
                      </li>
                      <li>
                        <a className="certificate">
                          {" "}
                          <Image src={certiImg} alt="Certification" />{" "}
                          Certification
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="course-card-body">
                  <div className="course-card-top">
                    <div className="card-top">
                      <h4 className="course-card-title">React Front To Back</h4>
                      <p>Sorem ipsum dolor sit amet, </p>
                    </div>
                    <span className="hour-min">1 Hr 22 Min</span>
                  </div>
                  <ul className="course-review">
                    <li>
                      <span className="cview">120+</span>
                    </li>
                    <li>
                      <span className="cstar">
                        4.0 <Image src={starIcon} />{" "}
                      </span>
                    </li>
                    <li>
                      <span className="creview">50 Reviews</span>
                    </li>
                  </ul>

                  <div className="course-card-bottom">
                    <div className="course-price">
                      <span className="current-price">AED 40</span>
                      <span className="off-price">
                        <span>AED 50</span> 10%off{" "}
                      </span>
                    </div>
                    <Link href="" className="pirmaryBtn">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="course-card">
                <div className="course-img">
                  <Image
                    src={courseImg}
                    className="img-fluid"
                    alt="course-img"
                  />
                  <div className="trend-certi">
                    <ul>
                      <li>
                        <a className="trending">Trending</a>
                      </li>
                      <li>
                        <a className="certificate">
                          {" "}
                          <Image src={certiImg} alt="Certification" />{" "}
                          Certification
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="course-card-body">
                  <div className="course-card-top">
                    <div className="card-top">
                      <h4 className="course-card-title">React Front To Back</h4>
                      <p>Sorem ipsum dolor sit amet, </p>
                    </div>
                    <span className="hour-min">1 Hr 22 Min</span>
                  </div>
                  <ul className="course-review">
                    <li>
                      <span className="cview">120+</span>
                    </li>
                    <li>
                      <span className="cstar">
                        4.0 <Image src={starIcon} />{" "}
                      </span>
                    </li>
                    <li>
                      <span className="creview">50 Reviews</span>
                    </li>
                  </ul>

                  <div className="course-card-bottom">
                    <div className="course-price">
                      <span className="current-price">AED 40</span>
                      <span className="off-price">
                        <span>AED 50</span> 10%off{" "}
                      </span>
                    </div>
                    <Link href="" className="pirmaryBtn">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="course-card">
                <div className="course-img">
                  <Image
                    src={courseImg}
                    className="img-fluid"
                    alt="course-img"
                  />
                  <div className="trend-certi">
                    <ul>
                      <li>
                        <a className="trending">Trending</a>
                      </li>
                      <li>
                        <a className="certificate">
                          {" "}
                          <Image src={certiImg} alt="Certification" />{" "}
                          Certification
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="course-card-body">
                  <div className="course-card-top">
                    <div className="card-top">
                      <h4 className="course-card-title">React Front To Back</h4>
                      <p>Sorem ipsum dolor sit amet, </p>
                    </div>
                    <span className="hour-min">1 Hr 22 Min</span>
                  </div>
                  <ul className="course-review">
                    <li>
                      <span className="cview">120+</span>
                    </li>
                    <li>
                      <span className="cstar">
                        4.0 <Image src={starIcon} />{" "}
                      </span>
                    </li>
                    <li>
                      <span className="creview">50 Reviews</span>
                    </li>
                  </ul>

                  <div className="course-card-bottom">
                    <div className="course-price">
                      <span className="current-price">AED 40</span>
                      <span className="off-price">
                        <span>AED 50</span> 10%off{" "}
                      </span>
                    </div>
                    <Link href="" className="pirmaryBtn">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="course-card">
                <div className="course-img">
                  <Image
                    src={courseImg}
                    className="img-fluid"
                    alt="course-img"
                  />
                  <div className="trend-certi">
                    <ul>
                      <li>
                        <a className="trending">Trending</a>
                      </li>
                      <li>
                        <a className="certificate">
                          {" "}
                          <Image src={certiImg} alt="Certification" />{" "}
                          Certification
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="course-card-body">
                  <div className="course-card-top">
                    <div className="card-top">
                      <h4 className="course-card-title">React Front To Back</h4>
                      <p>Sorem ipsum dolor sit amet, </p>
                    </div>
                    <span className="hour-min">1 Hr 22 Min</span>
                  </div>
                  <ul className="course-review">
                    <li>
                      <span className="cview">120+</span>
                    </li>
                    <li>
                      <span className="cstar">
                        4.0 <Image src={starIcon} />{" "}
                      </span>
                    </li>
                    <li>
                      <span className="creview">50 Reviews</span>
                    </li>
                  </ul>

                  <div className="course-card-bottom">
                    <div className="course-price">
                      <span className="current-price">AED 40</span>
                      <span className="off-price">
                        <span>AED 50</span> 10%off{" "}
                      </span>
                    </div>
                    <Link href="" className="pirmaryBtn">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="course-card">
                <div className="course-img">
                  <Image
                    src={courseImg}
                    className="img-fluid"
                    alt="course-img"
                  />
                  <div className="trend-certi">
                    <ul>
                      <li>
                        <a className="trending">Trending</a>
                      </li>
                      <li>
                        <a className="certificate">
                          {" "}
                          <Image src={certiImg} alt="Certification" />{" "}
                          Certification
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="course-card-body">
                  <div className="course-card-top">
                    <div className="card-top">
                      <h4 className="course-card-title">React Front To Back</h4>
                      <p>Sorem ipsum dolor sit amet, </p>
                    </div>
                    <span className="hour-min">1 Hr 22 Min</span>
                  </div>
                  <ul className="course-review">
                    <li>
                      <span className="cview">120+</span>
                    </li>
                    <li>
                      <span className="cstar">
                        4.0 <Image src={starIcon} />{" "}
                      </span>
                    </li>
                    <li>
                      <span className="creview">50 Reviews</span>
                    </li>
                  </ul>

                  <div className="course-card-bottom">
                    <div className="course-price">
                      <span className="current-price">AED 40</span>
                      <span className="off-price">
                        <span>AED 50</span> 10%off{" "}
                      </span>
                    </div>
                    <Link href="" className="pirmaryBtn">
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CourseSlider />

      <CourseSlider />

      <section className="factArtSection">
        <div className="factArtWrap">
          <div className="factLeft">
            <div className="sectionTitle">
              <h2 className="title">State-of-the-Art Facilities</h2>
              <p>
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <Link href="#" className="pirmaryBtn book-now">
                Book Now
              </Link>
            </div>
          </div>
          <div className="factRight">
            <Image src={artImg1} className="img-fluid artFirst" alt="whyImg" />
            <Image src={artImg2} className="img-fluid artLast" alt="whyImg" />
          </div>
        </div>
      </section>

      <section className="our-partner">
        <div className="container-fluid">
          <div className="row">
            <div className="sectionTitle">
              <h2 className="title">Our Partners</h2>
            </div>
            <div className="col-lg-12">
              <div className="partnerWrapper">
                <ul>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                </ul>
              </div>
              <div className="partnerWrapper">
                <ul>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                  <li>
                    <Image src={partnerImg} alt="partnerImg" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="moreCompany">
            <a>60+ more companies</a>
          </div>
        </div>
      </section>

      <section className="whySection">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="sectionTitle">
                <h2 className="title">
                  Why Choose <span> SHAMS Training?</span>
                </h2>
              </div>
              <div className="whyWrapper">
                <div className="whyChoose">
                  <div className="whyIcon">
                    <Image
                      src={whyExpert}
                      className="img-fluid"
                      alt="whyExpert"
                    />
                  </div>
                  <div className="whycontant">
                    <h3>Expert Trainers</h3>
                    <p>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </p>
                  </div>
                </div>

                <div className="whyChoose">
                  <div className="whyIcon">
                    <Image
                      src={whyExpert}
                      className="img-fluid"
                      alt="whyExpert"
                    />
                  </div>
                  <div className="whycontant">
                    <h3>Expert Trainers</h3>
                    <p>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </p>
                  </div>
                </div>

                <div className="whyChoose">
                  <div className="whyIcon">
                    <Image
                      src={whyExpert}
                      className="img-fluid"
                      alt="whyExpert"
                    />
                  </div>
                  <div className="whycontant">
                    <h3>Expert Trainers</h3>
                    <p>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image src={whyImg} className="img-fluid" alt="whyImg" />
            </div>
          </div>
        </div>
      </section>

      <section className="sucessSection">
        <div className="container">
          <div className="row align-items-center">
            <div className="sectionTitle">
              <h2 className="title">
                Success Stories of Our Learners Completion of Their Courses
              </h2>
            </div>

            <div className="success-wrapper">
              <div className="success-item">
                <div className="curveBg">
                  <div className="staarImg">
                    <Image src={starIcon} />
                  </div>
                  <div className="learnerImg">
                    <Image src={learnerImg} />
                  </div>
                </div>
                <div className="successContant">
                  <div className="successTop">
                    <h2>Cameron Lehner</h2>
                    <h4>Global Research Strategist</h4>
                  </div>
                  <p>
                    Horem ipsum dolor sit amet, consectetur adipiscing
                    elit.Horem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
              </div>
              <div className="success-item">
                <div className="curveBg">
                  <div className="staarImg">
                    <Image src={starIcon} />
                  </div>
                  <div className="learnerImg">
                    <Image src={learnerImg} />
                  </div>
                </div>
                <div className="successContant">
                  <div className="successTop">
                    <h2>Cameron Lehner</h2>
                    <h4>Global Research Strategist</h4>
                  </div>
                  <p>
                    Horem ipsum dolor sit amet, consectetur adipiscing
                    elit.Horem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
              </div>
              <div className="success-item">
                <div className="curveBg">
                  <div className="staarImg">
                    <Image src={starIcon} />
                  </div>
                  <div className="learnerImg">
                    <Image src={learnerImg} />
                  </div>
                </div>
                <div className="successContant">
                  <div className="successTop">
                    <h2>Cameron Lehner</h2>
                    <h4>Global Research Strategist</h4>
                  </div>
                  <p>
                    Horem ipsum dolor sit amet, consectetur adipiscing
                    elit.Horem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
              </div>
              <div className="success-item">
                <div className="curveBg">
                  <div className="staarImg">
                    <Image src={starIcon} />
                  </div>
                  <div className="learnerImg">
                    <Image src={learnerImg} />
                  </div>
                </div>
                <div className="successContant">
                  <div className="successTop">
                    <h2>Cameron Lehner</h2>
                    <h4>Global Research Strategist</h4>
                  </div>
                  <p>
                    Horem ipsum dolor sit amet, consectetur adipiscing
                    elit.Horem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
              </div>
              <div className="success-item">
                <div className="curveBg">
                  <div className="staarImg">
                    <Image src={starIcon} />
                  </div>
                  <div className="learnerImg">
                    <Image src={learnerImg} />
                  </div>
                </div>
                <div className="successContant">
                  <div className="successTop">
                    <h2>Cameron Lehner</h2>
                    <h4>Global Research Strategist</h4>
                  </div>
                  <p>
                    Horem ipsum dolor sit amet, consectetur adipiscing
                    elit.Horem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
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
              <p className="subTitle">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
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
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          Qorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Morem ipsum dolor sit amet, consectetur adipiscing
                            elit.Morem ipsum dolor sit amet, consectetur
                            adipiscing elit.Morem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Groove’s intuitive shared inbox makes it easy for
                            team members organize prioritize and.In this
                            episode.urvived not only five centuries.Edhen an
                            unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Groove’s intuitive shared inbox makes it easy for
                            team members organize prioritize and.In this
                            episode.urvived not only five centuries.Edhen an
                            unknown printer took a galley of type and scrambl
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefour"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          Why choose us for your education?
                        </button>
                      </h2>
                      <div
                        id="collapsefour"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>
                            Groove’s intuitive shared inbox makes it easy for
                            team members organize prioritize and.In this
                            episode.urvived not only five centuries.Edhen an
                            unknown printer took a galley of type and scrambl
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
    </main>
  );
}
