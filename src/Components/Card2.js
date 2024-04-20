import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const Card2 = () => {
  return (
        <div className='col-3'>
          <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
              <Link>
              <img src='images/wish.svg' alt='' />
              </Link>
            </div>
            <div className='product-img'>
              <img src='images/watch.jpg' className='image-fluid' alt='product img' />
              <img src='images/watch 4.jpg' className='image-fluid' alt='product img' />
            </div>
            <div className='product-details'>
              <h6 className='brand'>
                Havels
              </h6>
              <h5 className='product-title'>
                kids headphones bulk 10 pack multi coloured for students
              </h5>
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
              />
              <p className='price'>
                $100.00
              </p>
            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
                <Link className='a'>
                <img src='images/prodcompare.svg' alt='compare' />
                </Link>
                <Link className='b'>
                <img src='images/view.svg' alt='view' />
                </Link>
                <Link className='c'>
                <img src='images/add-cart.svg' alt='addcart' />
                </Link>
              </div>
            </div>
          </Link>
        </div>
      )
    }
    

export default Card2