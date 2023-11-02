import React from 'react'
import serviceImage from '../assests/image.jpeg'

const Service = () => {
  const serviceData = [
    {
      image: serviceImage,
      name: "Web Development",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam explicabo nemo deleniti eum eaque laborum modi laudantium aspernatur iste tenetur placeat non cupiditate deserunt, rem reprehenderit autem laboriosam perspiciatis dolorum."
    },
    {
      image: serviceImage,
      name: "App Development",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam explicabo nemo deleniti eum eaque laborum modi laudantium aspernatur iste tenetur placeat non cupiditate deserunt, rem reprehenderit autem laboriosam perspiciatis dolorum."
    }, 
    { 
      image: serviceImage,
      name:"Digital Marketing",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam explicabo nemo deleniti eum eaque laborum modi laudantium aspernatur iste tenetur placeat non cupiditate deserunt, rem reprehenderit autem laboriosam perspiciatis dolorum."
    }
  ] 



  return (
    <>
      <div className=" mt-10 mx-10 ">
        <h1 className="font-bold text-lg text-black text-center">Our Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 mx-8'>
        {serviceData.map((service, Index) => (
          <div className='flex flex-col justify-center items-center rounded-lg shadow-lg p-4 w-[300px]' key={Index}>
            <img className=' h-40 w-40 rounded-full onject-cover' src={serviceImage} alt="" />
            <h1 className='font-semibold text-lg my-2'>{service.name}</h1> 
            <p className='text-justify'>{service.description}</p> 
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-950 mt-2">Read More</button> 
          </div>
        ))}
        </div>
      </div>
    </>
  )
} 

export default Service