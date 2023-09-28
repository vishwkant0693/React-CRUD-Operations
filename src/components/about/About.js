import axios from 'axios'
import React, { useEffect, useState } from 'react'



const About = () => {
    const [state,setState]=useState([]);
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Ra");

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            console.log(res.data);
            setState(res.data)
            // console.log(state);
        })
        .then((err)=>{
            console.log(err);
        })
    },[])

    const decrement=()=>{
        setCount(count-1)
    }
    const increment=()=>{
        setCount(count+1)
    }

    const liveData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            console.log(res.data);
            setState(res.data)
            // console.log(state);
        })
        .then((err)=>{
            console.log(err);
        })
    }

  return (
    <>
        {console.log("reAbout")}
        <div>About</div>
        {/* <input type="submit" value="Get Live Data" onClick={liveData} /> */}
        <br/>
        <div align="center">
            {count}
            <br />
            <input type="submit" value="Decrment" onClick={decrement} />
            <input type="submit" value="Incrment" onClick={increment} />
        </div>
        <ul>
            {
                state.map((item,index)=>
                <li key={index}>{item.postId+" "+item.id+" "+item.name+" "+item.email+" "+item.body}</li>
                )
            }
        </ul>
    </>
  )
}

export default About