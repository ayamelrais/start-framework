import React, { useState } from "react";

import "./Contact.css"

export default function Contact() {

  let [name,setName] = useState("");
  let [age,setAge] = useState("");
  let [email,setEmail] = useState("");
  let [pass,setPass] = useState("");

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <h1 className="text-white fw-bolder fs-1 text-center">start Framework</h1>
            <div className="my-3 star-icon text-center">
              <i className="fa-solid fa-star text-white"></i>
            </div>

            <div className="col-md-8">
              <form>
                  <div className="form-group">
                    {/* {name ? <label htmlFor="">userName</label>: ""} */}
                    {name && <label htmlFor="">userName</label>}
                    <input className="form-control" onChange={(e)=> setName(e.target.value)} type="text" placeholder="userName" />
                  </div>
                  <div className="form-group">
                    {age? <label htmlFor="">userAge</label>:""}
                    
                    <input className="form-control" onChange={(e)=> setAge(e.target.value)} type="number" placeholder="userAge" />
                  </div>
                  <div className="form-group">
                    {email &&  <label htmlFor="">userEmail</label>}
                   
                    <input className="form-control" onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="userEmail" />
                  </div>
                  <div className="form-group">
                    {pass && <label htmlFor="">userPassword</label> }

                    <input className="form-control" onChange={(e)=> setPass(e.target.value)} type="password" placeholder="userPassword" />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//  T && T ===> T
//  T && F ===> F
//  F && F ===> F