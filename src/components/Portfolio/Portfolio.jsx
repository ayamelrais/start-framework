import React from 'react'

import img1 from "../../assets/poert1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"

import "./Portfolio.css"

export default function Portfolio() {

  const images = [
    {path:img1 , id:"port1"},
    {path:img2 , id:"port2"},
    {path:img3 , id:"port3"},
    {path:img1 , id:"port4"},
    {path:img2 , id:"port5"},
    {path:img3 , id:"port6"},
  ]
  return (
    <>
      <section className='h-auto py-5'>
        <div className="container">
          <div className="row gy-4">
             <h1 className="text-white fw-bolder fs-1 text-center">start Framework</h1>
            <div className="my-3 star-icon text-center">
              <i className="fa-solid fa-star text-white"></i>
            </div>
            {images.map((img)=> <>
              <div className='col-md-4' >
              <div className='image-card' >
                  <img src={img.path} className='img-fluid' alt="" />
                  <div data-bs-toggle="modal" data-bs-target={"#" + img.id} className='layer'>
                    <i class="fa-solid fa-plus"></i>
                  </div>
              </div>
            </div>
            
<div class="modal fade" id={img.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <img src={img.path} className='img-fluid' alt="" />
      </div>
  
    </div>
  </div>
</div>
            </>)}
          </div>
        </div>
      </section>




    </>
  )
}
