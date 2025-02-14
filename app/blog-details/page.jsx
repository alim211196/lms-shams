import Link from 'next/link'
import React from 'react'
import autharImg from '../assets/images/authar-img.png';
import blogBanner from '../assets/images/blog-banner.png';
import articleImg from '../assets/images/article-img.png';
import BlogDetailBanner from '../assets/images/blog-detail-banner.png';
import shareIcon from '../assets/images/share-icon.svg';
import shareIcon1 from '../assets/images/share-icon1.svg';
import shareIcon2 from '../assets/images/share-icon2.svg';
import shareIcon3 from '../assets/images/share-icon3.svg';
import shareIcon4 from '../assets/images/share-icon4.svg';

import Image from "next/image";
import RootLayout from '../layout';
import ModalComponent from '../components/Modal/Modal';

const page = () => {
  const isLoggedIn = true;
  return (
    <RootLayout hideHeaderFooter={isLoggedIn}>
      <section className="blogBanner">
        <div className="container">
          <div className='blogBannerBordr'>
            <div className="row align-items-center">
              <div class="col-lg-6 col-md-6 col-12">
                <Image src={blogBanner} alt='blogBanner' className='img-fluid' />
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div className='blogConatnt'>
                  <Link href="#" className='articleBtn'>Article</Link>
                  <h3>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                  <div className='articleAuthar'>
                    <div className='autharwrap'>
                      <div className='autharImg'>
                        <Image src={autharImg} alt='' />
                        <h5>John Desuza.</h5>
                      </div>

                      <div className='createDate'>JAN 12, 2025</div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='shareBlog'>
          <Link href="#" className='shareBtn'><Image src={shareIcon} alt='share' />  Share</Link>   
          <ul className='shareIcon'>
            <li><Image src={shareIcon1} alt='shareIcon'/></li>
            <li><Image src={shareIcon2} alt='shareIcon'/></li>
            <li><Image src={shareIcon3} alt='shareIcon'/></li>
            <li><Image src={shareIcon4} alt='shareIcon'/></li>
          </ul>
          </div>
        </div>
      </section>


      <section className="articleDetails">
        <div className="container">

          <div className='detailContant'>
            <h3>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</h3>
            <p>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
              ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Morem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
              ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
          </div>


          <div className='detailContant'>
            <h3>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</h3>
            <p>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
              ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Morem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
              ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
          </div>

          <div className='detailContant'>
            <Image src={BlogDetailBanner} alt='BlogDetailBanner' className='img-fluid'></Image>
          </div>


          <div className='detailContant'>
            <h3>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</h3>
            <p>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
              ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Morem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
              ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
          </div>

        </div>
      </section>


      <section className="writeSection">
        <div className="container">
          <div className='row align-items-center'>
            <div className="col-lg-6 col-md-6 col-12">
              <div className='autharBoxBorder'>
                <div className='autharLeft'>
                  <div className='autharImg'>
                    <Image src={autharImg} alt='' />
                    <div className='autharContant'>
                      <h5>John Desuza.</h5>
                      <p>L&D Writer, Shams</p>
                    </div>
                  </div>
                  <p className='writeText'>Writer by occupation. Ceramicist & Newsletter Editor by avocation.</p>
                </div>
                <Link href="#" className='shareBtn'><Image src={shareIcon} alt='share' />  Share</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className='recentArticle'>
              <h3>Recent Articles by John Desuza</h3>
              <ul>
                <li><Link href="#">Morem ipsum dolor sit amet, per inceptos himenaeos.</Link></li>
                <li><Link href="#">Morem ipsum dolor sit amet, per inceptos himenaeos.</Link></li>
                <li><Link href="#">Morem ipsum dolor sit amet, per inceptos himenaeos.</Link></li>
              </ul>  
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="allArticle">
        <div className="container">

          <div className="sectionTitle left">
            <h2 className="title">
              Recommended Articles  </h2>
          </div>

          <div className="row align-items-center">

            <div className="col-lg-4 col-md-6 col-12">
              <div className='articleBox'>
                <div className='imgWrap'>
                  <Image src={articleImg} alt='aboutShams' className='img-fluid' />
                  <Link href="#" className='articleBtn'>Article</Link>
                </div>
                <div className='articleContant'>
                  <h3>Borem ipsum dolor sit amet</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className='articleAuthar'>
                  <div className='autharwrap'>
                    <div className='autharImg'>
                      <Image src={autharImg} alt='' />
                      <h5>John Desuza.</h5>
                    </div>

                    <div className='createDate'>JAN 12, 2025</div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className='articleBox'>
                <div className='imgWrap'>
                  <Image src={articleImg} alt='aboutShams' className='img-fluid' />
                  <Link href="#" className='articleBtn'>Article</Link>
                </div>
                <div className='articleContant'>
                  <h3>Borem ipsum dolor sit amet</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className='articleAuthar'>
                  <div className='autharwrap'>
                    <div className='autharImg'>
                      <Image src={autharImg} alt='' />
                      <h5>John Desuza.</h5>
                    </div>

                    <div className='createDate'>JAN 12, 2025</div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className='articleBox'>
                <div className='imgWrap'>
                  <Image src={articleImg} alt='aboutShams' className='img-fluid' />
                  <Link href="#" className='articleBtn'>Article</Link>
                </div>
                <div className='articleContant'>
                  <h3>Borem ipsum dolor sit amet</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className='articleAuthar'>
                  <div className='autharwrap'>
                    <div className='autharImg'>
                      <Image src={autharImg} alt='' />
                      <h5>John Desuza.</h5>
                    </div>

                    <div className='createDate'>JAN 12, 2025</div>

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