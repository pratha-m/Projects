import React, { useState } from 'react'
import Axios from "axios"
const CreateOwner = () => {
  const [ownerName,setOwnerName]=useState('');
  const [ownerEmail,setOwnerEmail]=useState('');
  const [ownerPassword,setOwnerPassword]=useState('');
  const createOwner=()=>{
     Axios.post("http://localhost:3001/createowner",{name:ownerName,email:ownerEmail,password:ownerPassword})
     .then((result)=>{console.log(result.data)})
     .catch((error)=>{console.log("error in creating owner",error)});
  }
  return (
    <div style={{"minHeight":"65vh"}}>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' onChange={(e)=>{setOwnerName(e.target.value)}}/>
            <br/><br/> 
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' onChange={(e)=>{setOwnerEmail(e.target.value)}}/>
            <br/><br/>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' onChange={(e)=>{setOwnerPassword(e.target.value)}}/>
            <br/><br/> 
            <button type='button' onClick={createOwner}>Create Owner</button>
        </form>
    </div>
  )
}

export default CreateOwner