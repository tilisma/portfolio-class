import React, { useState } from 'react'
import contactImage from '../assests/image.jpeg' 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => { 
  const [firstname, setFirstname]= useState("");
  const [lastname, setLastname]= useState("");  
  const [phone, setPhone]= useState("");
  const [address, setAddress]= useState(""); 
  const [email, setEmail]= useState(""); 
  const [message, setMessage]= useState("");  
  const handleClick =  (e) => {   
    e.preventDefault(); 
    if (firstname && lastname && phone && address && email && message ){   
      const formdata = new FormData();
      formdata.append("firstname",firstname);
      formdata.append("lastname",lastname);
      formdata.append("phone",phone);
      formdata.append("address",address); 
      formdata.append("email",email);
      formdata.append("message",message); 
      axios.post("https://achyut.acetechnepal.com/contact/",formdata)
           .then(res=>toast("Form Submit Sucessfully"));

    setFirstname(""); 
    setLastname("");
    setPhone(""); 
    setAddress(""); 
    setEmail(""); 
    setMessage(""); 
  }   
  else if(!firstname) {   
  toast("No Firstname") 
}  
else if(!lastname) {  
  toast("No Lastname") 
}   
else if(!phone) {  
  toast("No Phone") 
}  
else if(!address) {  
  toast("No Address") 
}  
else if(! email) {  
  toast("No Email") 
}  
else if(!message) {  
  toast("No Message") 
}   
  else{  
    toast("Fill in the Form Completely")     
  }  
  
  } 

  console.log(firstname,lastname,phone,address,email,message); 
  return ( 
    <>
   
      <div className='flex gap-8 m-8'> 
      <ToastContainer /> 
      <form action="" className='border  p-4 w-[60%] bg-slate-100'>
      <div className='container '> 
      <h1 className='font-bold text-lg'>Contact Us</h1>  
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <label>Firstname</label> 
          <input onChange={e => setFirstname(e.target.value)} value={firstname}  className='px-3 py-2 border border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="text" name='firstname'placeholder='firstname'required></input>
        </div> 
        <div>
        <label>Lastname</label> 
          <input onChange={e => setLastname(e.target.value)} value={lastname} className='px-3 py-2 border border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="text" name='lastname'placeholder='lastname' required></input>
        </div>  
        <div>
        <label>Phone</label> 
          <input onChange={e => setPhone(e.target.value)} value={phone} className='px-3 py-2 border border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="number" name='phone'placeholder='phone' required></input>
        </div> 
        <div>
        <label>Address</label> 
          <input onChange={e => setAddress(e.target.value)} value={address} className='px-3 py-2 border  border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="text" name='address'placeholder='address' required></input>
        </div>
        </div>
        <div >
        <label>Email</label> 
          <input onChange={e => setEmail(e.target.value)}  value={email} className='px-3 py-2 border  border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="text" name='email'placeholder='email' required></input>
        </div> 
        <div className='h-[100%] p-2 mb-2 rounded rows-4'>
        <label className='block text-sm font-semibold mb-2'>Message</label> 
          <textarea onChange={e => setMessage(e.target.value)} value={message} className='px-3 py-2 border  border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' name="message" id="" rows="5" cols="30" required></textarea>
        </div> 
        <div className='text-center'> 
          <button onClick={handleClick} className="bg-red-500  font-bold py-2 px-4 rounded-lg hover:bg-green-500">Submit</button>
        </div>
        </div>  
      </form> 
  
      <img src={contactImage} alt="" className='w-[40%] h-[210px]'/> 
   
      </div> 
    
     
     </>
  )
}

export default Contact