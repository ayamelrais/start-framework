import React from 'react'

import "./Footer.css"

export default function Footer() {
  return (
    <>
      <footer className='bg-main-color pt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className='text-center'>
                <h3 className='text-white'>LOCATION</h3>
                <p className='text-white'>2215 John Daniel Drive</p>
                <p className='text-white'>Clark, MO 65243</p>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='text-center'>
                <h3 className='text-white'>AROUND THE WEB</h3>
                <div className='social-links'>
                    <div>
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div>
                      <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div>
                      <i class="fa-brands fa-pinterest-p"></i>
                    </div>
                    <div>
                      <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='text-center text-white'>
                <h3 className=''>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div className='copy-right text-center py-2 mt-5'>
          <p className='m-0'>
            Copyright © Your Website 2021
          </p>
        </div>
      </footer>
    </>
  )
}
