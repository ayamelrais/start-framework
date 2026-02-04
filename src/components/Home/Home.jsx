import React from 'react'

import img from "../../assets/avataaars.svg"

export default function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center text-center vh-100 align-items-center">
            <div className="col-md-10">
              <div className='home-content'>
                <div className='w-25 m-auto'>
                  <img src={img} className='img-fluid' alt="" />
                </div>
                <h1 className='text-white fw-bolder fs-1'>start Framework</h1>
                <div className='my-3 star-icon'>
                  <i className='fa-solid fa-star text-white'></i>
                </div>
                <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
