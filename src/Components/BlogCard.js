import React from 'react'
import { Link } from 'react-router-dom'

export const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>1 Dec, 2023</p>
                <h5 className='title'>
                    A beutiful sunday morning renaissance
                </h5>
                <p className='desc'>
                Documentation and examples for opting images into responsive
                </p>
                <Link to='/' className='button'>Read More</Link>
            </div>
        </div>
    </div>
  )
}
