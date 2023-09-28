import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'




const Editcontact = () => {
    const [msg,setMsg]=useState("");
    const _useNavigate=useNavigate();
    const [state,setState]=useState(
        {
            f_name:'',
            l_name:'',
            email_id:'',
            mob_num:'',
            subject:'',
            message:''
        }
    )
    let params=useParams();
    // console.log();

    useEffect(()=>{
        axios.get("http://localhost:3004/contact/"+params.id)
        .then((res)=>{
            setState(res.data)
        })
    },[])

    const handler=(event)=>{
        // console.log(event.target.value);
        const {name,value}=event.target;
        // console.log(name+" "+value)
        setState({...state,[name]:value})
    }

    const updateData=(event)=>{
        event.preventDefault();
        axios.put("http://localhost:3004/contact/"+params.id,state)
        .then(()=>{
            _useNavigate("/contact-list");
        })
    }

  return (
    <>
        <div className="container">
        <div className="row" style={{marginTop:"5%"}}>
            <div className="col-md-4">
            <img src="img/contact01.jpg" alt="" style={{width:"100%",height:"400px"}} />
            </div>
            <div className="col-md-8">
            {
            msg?<div className='alert alert-success'>{msg}</div>:''
            }
            <form action="" method='post' onSubmit={updateData}>
                <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" value={state.f_name} name='f_name' onChange={handler} aria-label="First name" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" value={state.l_name} name='l_name' onChange={handler} aria-label="Last name" />
                </div>
                </div>
                <div class="row" style={{marginTop:"2%"}}>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Email ID" value={state.email_id} name='email' onChange={handler} aria-label="Email ID" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Mobile Number" value={state.mob_num} name='mob_num' onChange={handler} aria-label="Mobile Number" />
                </div>
                </div>
                <div class="row" style={{marginTop:"2%"}}>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Subject" value={state.subject} name='subject' onChange={handler} aria-label="Subject" />
                </div>
                </div>
                <div class="row" style={{marginTop:"2%"}}>
                <div class="col">
                    <textarea name="message" onChange={handler} id="" style={{width:"100%",height:"100px"}} placeholder='Message' value={state.message}></textarea>
                </div>
                </div>
                <div class="row" style={{marginTop:"2%"}}>
                <div class="col">
                    <input type="submit" value="Update" className="btn btn-success" />
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </>
  )
}

export default Editcontact