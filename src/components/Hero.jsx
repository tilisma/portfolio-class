import React from 'react'
import heroImage from '../assests/car.webp'
const Hero = () => {
  return ( 
    <>
    <div className="flex justify-center items-center gap-6 mt-10 mx-10">
       <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="font-bold text-lg text-black">Hi,  <span className="text-red-500">Welcome</span> to my Website</h1> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo repudiandae, consequuntur praesentium, mollitia ipsam illum nesciunt ullam commodi sed libero facilis similique debitis quibusdam enim optio minus tempore placeat.</p> 

        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-950">Learn More</button> 
       </div> 
       <div className="flex flex-col"> 
       <img className='rounded-xl ' src={heroImage} alt="" /> 
       </div> 
    </div>  

    </>
  )
}

export default Hero