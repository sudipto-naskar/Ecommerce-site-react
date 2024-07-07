import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign up for newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text" class="form-control py-1" placeholder="Your Email Address" aria-label="Youe Email Address" aria-describedby="basic-addon2" />
                <button className='input-group-text py-2' id="basic-addon2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <div className='footer-links d-flex flex-column'>
                  <address className='text-white fs-5'>Hno | 277 Vill Chopal, <br /> Sonipat, Hariyana <br /> Pincode: 1311103</address>
                  <a href='tel: +91 8264954234' className='mt-2 d-block mb-1 text-white'> +91 8264954234</a>
                  <a href='mailto: sudiptonaskar123@gmail.com' className='mt-2 d-block mb-0 text-white'>sudiptonaskar123@gmail.com</a>
                  <div className='social-icons d-flex align-item-center
                gap-15 mt-4'>
                    <a className='text-white ' href='/'>
                      <FaLinkedin className='fs-4 ' />
                    </a>
                    <a className='text-white' href='/'>
                      <FaGithub className='fs-4' />
                    </a>
                    <a className='text-white' href='/'>
                      <FaYoutube className='fs-4' />
                    </a>
                    <a className='text-white' href='/'>
                      <FaInstagram className='fs-4' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white mb-1 py-2'>Privacy Policy</Link>
                  <Link className='text-white mb-1 py-2'>Refund Policy</Link>
                  <Link className='text-white mb-1 py-2'>Shipping Policy</Link>
                  <Link className='text-white mb-1 py-2'>Terms and Conditions</Link>
                  <Link className='text-white mb-1 py-2'>Blogs</Link>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white mb-1 py-2'>About Us</Link>
                  <Link className='text-white mb-1 py-2'>Faq</Link>
                  <Link className='text-white mb-1 py-2'>Contact</Link>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>Laptops</Link>
                <Link className='text-white mb-1 py-2'>Headphones</Link>
                <Link className='text-white mb-1 py-2'>Tablets</Link>
                <Link className='text-white mb-1 py-2'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-32 mb-0 text-white'>
              <p className='text-center'>&copy; {new Date().getFullYear()}; Powered by Developer's corner</p>
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer