import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { BlogCard } from '../Components/BlogCard';
import ProductCard from '../Components/ProductCard';
import Card2 from '../Components/Card2';
import SpecialProducts from '../Components/SpecialProducts';


const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='main banner' />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARED FOR PROS.</h4>
                  <h5>ipad S31+ Pro.</h5>
                  <p>From $999.00 or $41.62/no.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative '>
                  <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>BEST SALE</h4>
                    <h5>ipad S31+ Pro.</h5>
                    <p>From $999.00 <br /> or $41.62/no.</p>
                  </div>
                </div>

                <div className='small-banner position-relative '>
                  <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>BEST SALE</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999.00 <br /> or $41.62/no.</p>
                  </div>
                </div>

                <div className='small-banner position-relative '>
                  <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999.00 <br /> or $41.62/no.</p>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner' />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999.00 <br /> or $41.62/no.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center  gap-10'>
                  <img src='images/service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>from all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise Offer</h6>
                    <p className='mb-0'>Save upto 25% off </p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10'>
                  <img src='images/service-04.png' alt='services' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Prices</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-10 '>
                  <img src='images/service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap
              justify-content-between align-items-center'>
                <div className='d-flex  align-items-center'> 
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>

                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Smart Television</h6>
                    <p>12 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>

                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>20 Items</p>
                  </div>
                  <img src='images/watch (2).jpg' alt='camera' />
                </div>

                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>15 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>

                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Mobiles & Tablets</h6>
                    <p>8 Items</p>
                  </div>
                  <img src='images/iphone.jpg' alt='camera' />
                </div>

                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>6 Items</p>
                  </div>
                  <img src='images/gaming.jpg' alt='camera' />
                </div>

                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>11 Items</p>
                  </div>
                  <img src='images/speaker.jpg' alt='camera' />
                </div>

                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Accessories</h6>
                    <p>15 Items</p>
                  </div>
                  <img src='images/acc.jpg' alt='camera' />
                </div>

                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Computers & Laptops</h6>
                    <p>13 Items</p>
                  </div>
                  <img src='images/laptop.jpg' alt='camera' />
                </div>

                <div className='d-flex gap-15 align-items-center'>
                  <div>
                    <h6>Home Appliances</h6>
                    <p>20 Items</p>
                  </div>
                  <img src='images/homeapp.jpg' alt='camera' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='featured-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
                Featured Collections
              </h3>
            </div>
            <ProductCard />
            <Card2 />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='special-wrapper p-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special products</h3>
            </div>
            <div className='row'>
              <SpecialProducts />
              <SpecialProducts />
              <SpecialProducts />
              <SpecialProducts />
            </div>
          </div>
        </div>
      </section>

      <section className='marque-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
                Our Latest Blog
              </h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home