import React from 'react'
import contactImage from '../assests/image.jpeg'

const Contact = () => {
  return ( 
    <>
   
      <div className='flex gap-8 m-8'>
      <form action="" className='border  p-4 w-[60%] bg-slate-100'>
      <div className='container '> 
      <h1 className='font-bold text-lg'>Contact Us</h1>  
      <div className='grid grid-cols-2 gap-2'>
        <div>
          <label>Firstname</label> 
          <input className='px-3 py-2 border border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="text" name='firstname'placeholder='firstname'></input>
        </div> 
        <div>
        <label>Lastname</label> 
          <input className='px-3 py-2 border border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="text" name='lastname'placeholder='lastname'></input>
        </div>  
        <div>
        <label>Phone</label> 
          <input className='px-3 py-2 border border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="number" name='phone'placeholder='phone'></input>
        </div> 
        <div>
        <label>Address</label> 
          <input className='px-3 py-2 border  border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="text" name='address'placeholder='address'></input>
        </div>
        </div>
        <div >
        <label>Email</label> 
          <input  className='px-3 py-2 border  border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' type="text" name='email'placeholder='email'></input>
        </div> 
        <div className='h-[100%] p-2 mb-2 rounded rows-4'>
        <label className='block text-sm font-semibold mb-2'>Message</label> 
          <textarea className='px-3 py-2 border  border-gray-400 w-full focus:outline-none focus:ring focus:ring-blue-300 rounded-md' name="message" id="" rows="5" cols="30"></textarea>
        </div> 
        <div className='text-center'> 
          <button className="bg-red-500  font-bold py-2 px-4 rounded-lg hover:bg-green-500">Submit</button>
        </div>
        </div>  
      </form> 
  
      <img src={contactImage} alt="" className='w-[40%]'/> 
   
      </div> 
    
     
     </>
  )
}

export default Contact