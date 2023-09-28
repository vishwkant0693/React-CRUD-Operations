import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Searchdata = () => {

    const [store,setStore]=useState({
        f_name:'',
        l_name:'',
        email_id:'',
        mob_num:'',
        subject:'',
        message:''
    });
    const [state,setState]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3004/contact")
        .then((res)=>{
            setState(res.data)
        })
    },[])

    const searchData=(event)=>{
        let id=event.target.value;
        axios.get("http://localhost:3004/contact/"+id)
        .then((res)=>{
            setStore(res.data);
        })
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="head">
                        Search Data
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div>
                        <span style={{fontSize:"22px",fontWeight:"bold",marginLeft:"5%"}}>Enter ID :</span>
                        {/* <select name="search" id="" className='my_search' onChange={searchData}>
                            <option value=""> ----- Search ID ----- </option>
                            {
                                state.map((item,index)=>
                                <option value={item.id} key={index}>{item.id}</option>
                                )
                            }
                        </select> */}
                        <span style={{marginLeft:"3%"}}>
                            <input type="text"  name='Search' style={{width:"70%"}} onChange={searchData}/>
                        </span>
                    </div>
                    <br />
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Mobile Number</th>
                                <th>Subject</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{store.id}</td>
                                <td>{store.f_name}</td>
                                <td>{store.l_name}</td>
                                <td>{store.email_id}</td>
                                <td>{store.mob_num}</td>
                                <td>{store.subject}</td>
                                <td>{store.message}</td>
                            </tr>    
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>        
    </>




    
  )
}

export default Searchdata