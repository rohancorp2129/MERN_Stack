import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";


const Contact=()=>{
    // use Navigation 
    const nav =useNavigate();
    const goHome=()=>{
        nav('/')
    }

    // useLocatioon
    const loc=useLocation();
    console.log(loc);
    // console.log(loc.pathname);
    // console.log(loc.kay);

    // // use to conditionally rendering 
    // if(loc.pathname==='/'){
    //     loc.replace.pathname='/about'
    // }

    // useParems
    const data=useParams()

    // OR 
    const {name ,id}= useParams();
    console.log(data);
    return(
        <>
            {/* Implemention useNavigate() react hook  */}
            

       
            <center className="my-3">
                <h2>Contact Us Page</h2>

                <hr/>
                <h3 className="my-3">Your Name :{data.name} </h3>
                <h3 className="my-3">Your Id :{data.id} </h3>

                <hr />
                <h2>your Name {name}</h2>
                <h2>your Id  {id}</h2>
            </center>
            <center>
                <button onClick={()=>goHome()} className="btn btn-sm btn-primary px-4 fw-bold">Go to Home</button>
                <button onClick={()=>nav('/services')} className="btn btn-sm btn-outline-dark px-4 fw-bold mx-4">Go to Services</button>
            </center>

        </>
    )

}
export default Contact