import React from 'react' 
import aboutImage from '../assests/car instrument.jpg'

const About = () => {
  return ( 
    <>
    <div className='flex justify-center items-center gap-6 mt-10 mx-10'>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-lg text-black" >This is About Us</h1> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi veniam, sed facere blanditiis vel, possimus consequatur omnis corrupti distinctio exercitationem fuga nesciunt numquam neque excepturi veritatis dolorem! Adipisci, provident quo.</p>
        <div className='flex items-center gap-4'>
      <div className="bg-blue-500 text-white font-bold py-2 px-8 rounded-md hover:bg-yellow-400 flex items-center text-center shadow-2xl h-[100px] w-[150px]">10+Projects</div> 
      <div className="bg-red-500 text-white font-bold py-2 px-8 rounded-md hover:bg-orange-400 flex items-center text-center shadow-2xl h-[100px] w-[150px]">200+Clients</div> 
      <div className="bg-green-500 text-white font-bold py-2 px-8 rounded-md hover:bg-red-950 flex items-center text-center shadow-2xl h-[100px] w-[150px]">1000+Review</div>  
      </div>
      
      </div> 
    
      <div> 
      <img className='rounded-xl' src={aboutImage} alt="" /> 
      </div> 
    </div>  
    
    </>
  )
}

export default About