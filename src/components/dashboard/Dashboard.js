import React, { useState } from 'react'

const Dashboard = () => {
    const [message,setMessage]=useState("Rajeev");

    const [count,setCount]=useState(0);

    const [store,setStore]=useState({
        name:"rajeev",
        age:"32",
        email_id:"rksingh@gmail.com"
    })
    // console.log(useState());
    // console.log(useState("Rajeev"));

    const changeName=()=>{
        setMessage("Sanjeev")
    }

    const decrement=()=>{
        setCount(count-1)
    }
    const increment=()=>{
        setCount(count+1)
    }

    const changeAge=()=>{
        setStore({age:45})
    }

  return (
    <>
        {console.log("re")}
        <div align="center">
            {message}
            <br/>
            <input type="submit" value="Change Name" onClick={changeName} />
            <br/>
            {count}
            <br/>
            <input type="submit" value="Decrement" onClick={decrement} />
            <input type="submit" value="Increment" onClick={increment} />
            <br/>
            {store.age}
            <br />
            <input type="submit" value="Change Age" onClick={changeAge} />
        </div>
    </>
  )
}

export default Dashboard