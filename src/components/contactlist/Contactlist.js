import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const Contactlist = () => {
    const [state,setState]=useState([]);
    const [page,setPage]=useState(1);
    const [total,setTotal]=useState(0);

    const getTotal= ()=>{
        axios.get("http://localhost:3004/contact")
        .then((res)=>{
            setTotal(Math.ceil(res.data.length/5));
        })
    }
    // const getTotal=( async()=>{
    //     try{
    //         let response = await axios.get("http://localhost:3004/contact")
    //         setTotal(response.data.length/5)
    //     }
    //     catch(error) {console.log(error);}    
    // })
    getTotal();

    useEffect(()=>{
        axios.get("http://localhost:3004/contact?_page="+page+"&_limit=5 ")
        .then((res)=>{
            setState(res.data)
        })
        .then((err)=>{
            console.log(err);
        })
    },[page])

    const deleteRecord=(id)=>{
        Swal.fire({
            title: 'Are you sure want to delete this id '+id+' ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            axios.delete("http://localhost:3004/contact/"+id)
            .then((res)=>{
                   Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
            })
            }
          })
    }
    const handlePageClick=(data)=>{
        setPage(data.selected +1);
    }
    
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="head">
                        Contact List
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-10">
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map((item,index)=>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.f_name}</td>
                                <td>{item.l_name}</td>
                                <td>{item.email_id}</td>
                                <td>{item.mob_num}</td>
                                <td>{item.subject}</td>
                                <td>{item.message}</td>
                                <td>
                                    <Link className='btn btn-success' to={`/edit-user/${item.id}`}>Edit</Link>&nbsp;&nbsp;
                                    <a to="#" onClick={()=>{deleteRecord(item.id)}} className='btn btn-danger'>Delete</a>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
                    <div style={{textAlign:"center"}}>
                        <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            pageCount={total}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            pageClassName={'page-item'}
                            pageLinkClassName={"page-link"}
                            previousClassName={'pege-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            breakClassName={'page-item'}
                            breakLinkClassName={"page-link"}
                            activeClassName={'page-item'}
                            activeLinkClassName={'page-link'}
                        />
                        </div>
                    <div className="col-md-1"></div>
            </div>
        </div>
        
    </>
  )
}

export default Contactlist