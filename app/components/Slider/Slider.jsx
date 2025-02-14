import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import courseImg from '../../assets/images/courseimage.jpg';
import certiImg from '../../assets/images/certification-icon.svg';


const CourseSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    margin: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="courseSection">
      <div className="container">
        <div className="topRated">
          <div className="sectionTitle left">
            <h2 className="title">
              Top Trending <span>Courses</span>
            </h2>
          </div>
          <div className="topRated-right">
            <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          </div>
        </div>
        <Slider {...settings}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="course-card">
              <div className="course-img">
                <Image src={courseImg} className="img-fluid" alt="course-img" width={300} height={200} />
                <div className="trend-certi">
                  <ul>
                    <li>
                      <a className="trending">Trending</a>
                    </li>
                    <li>
                      <a className="certificate">
                        <Image src={certiImg} alt="Certification" width={20} height={20} /> Certification
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="course-card-body">
                <h4 className="course-card-title">React Front To Back</h4>
                <p>Sorem ipsum dolor sit amet</p>
                <span className="hour-min">1 Hr 22 Min</span>
                <ul className="course-review">
                  <li>
                    <span className="cview">120+</span>
                  </li>
                  <li>
                    <span className="cstar">
                      4.0 <Image src="/star-icon.png" alt="star" width={15} height={15} />
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
                      <span>AED 50</span> 10% off
                    </span>
                  </div>
                  <a href="#" className="primaryBtn">
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CourseSlider;
