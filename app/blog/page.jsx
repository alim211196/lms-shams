import Link from 'next/link'
import React from 'react'
import autharImg from '../assets/images/authar-img.png';
import blogBanner from '../assets/images/blog-banner.png';
import articleImg from '../assets/images/article-img.png';

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
        </div>
      </section>


      <section className="allArticle">
        <div className="container">

          <div className="sectionTitle left">
            <h2 className="title">
              Popular Articles  </h2>
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

            <div className="col-lg-12 col-md-6 col-12">
              <div className='loadMore'>
              <Link href="#" className='btnGradient'>Load more</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </RootLayout >
  )
}

export default page