import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'



const Useref = () => {

    const f_name=useRef("");
    const l_name=useRef("");
    const email_id=useRef("");
    const mob_num=useRef(0);
    const subject=useRef("");
    const message=useRef("");


    const [msg,setMsg]=useState();
    const sendData=(event)=>{
        event.preventDefault();

        let obj={
            f_name:f_name.current.value,
            l_name:l_name.current.value,
            email_id:email_id.current.value,
            mob_num:mob_num.current.value,
            subject:subject.current.value,
            message:message.current.value,
        }
        axios.post("http://localhost:3004/contact",obj)
        .then((res)=>{
            setMsg("Data Saved Successfully !!")
        })
    }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27996.247770150916!2d77.10612073987876!3d28.703673832269907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03d5b0619f3f%3A0x2208402cf282fb02!2sPitampura%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1687159285083!5m2!1sen!2sin" style={{border:"0", width:"100%",height:"400px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="row" style={{marginTop:"5%"}}>
          <div className="col-md-4">
            <img src="img/contact01.jpg" alt="" style={{width:"100%",height:"400px"}} />
          </div>
          <div className="col-md-8">
          {
            msg?<div className='alert alert-success'>{msg}</div>:''
          }
            <form action="" method='post' onSubmit={sendData}>
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name" ref={f_name} />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Last name" ref={l_name} />
                </div>
              </div>
              <div className="row" style={{marginTop:"2%"}}>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Email ID" ref={email_id} />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Mobile Number" ref={mob_num} />
                </div>
              </div>
              <div className="row" style={{marginTop:"2%"}}>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Subject" ref={subject} />
                </div>
              </div>
              <div className="row" style={{marginTop:"2%"}}>
                <div className="col">
                  <textarea  id="" ref={message} style={{width:"100%",height:"100px"}} placeholder='Message'></textarea>
                </div>
              </div>
              <div className="row" style={{marginTop:"2%"}}>
                <div className="col">
                  <input type="submit" value="Send Message" className="btn btn-success" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Useref