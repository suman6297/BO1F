import React from 'react'
import "./home.css"
import { FaFileAlt } from "react-icons/fa";
import { LuSchool2 } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import Home1 from './Home1';
import Home2 from './Home2';

const Home = () => {
  return (
    <div className='-mt-16'>
<img src="/Frame 23.jpg" alt="" width="100%" />
<div className=' md:mx-10 relative'>
<div>
        <img src="/OBJECTS.png" alt="" className=' absolute mt-4 max-lg:hidden' />
<h1 className='text-center text-4xl mt-6 '>
    700+ Students Saved , and counting
</h1>
<h2 className='text-center text-1xl mt-5  max-sm:mx-10'>
    50K new study notes added every day form the world's most active student <br />communitea
</h2>
</div>


<div className=' flex justify-around mt-8 max-sm:mx-3 shadow-lg shadow-gray-300 pb-5'>

    <div>
        <h1 className=' text-4xl'>350+</h1>
        <p className=' flex mt-3'> <FaFileAlt  className='mr-2'/> Study resourccs</p>
    </div>

    <div >
        <h1 className=' text-4xl'>115+</h1>
        <p className=' flex mt-3'> <LuSchool2 className='mr-2 mt-1' /> institutions</p>
    </div>
    <div  >
        <h1 className=' text-4xl'>700+</h1>
        <p className=' flex mt-3'> <FaUserLarge className='mr-2 mt-1' /> users</p>
    </div>
    <img src="/OBJECTS (1).png" alt="" className=' max-md:hidden w-16   ' />
</div>

</div>






<div className='relative '>

    <img src="/Rectangle 98.png" alt="" className='w-full  ' />
    <div className=' absolute flex justify-between inset-5  items-start '>
        <div className='max-sm:mr-6'>
         <p className='text-purple-800 max-sm:-mt-5 sm:text-2xl md:text-3xl lg:text-7xl lg:ml-20 lg:mt-20'>IELTS Preparation  </p> <br />
         <p className='max-sm:-mt-7 sm:text-2xl md:text-3xl lg:text-7xl lg:ml-20 lg:mt-6 sm:-m-6 md:ml-1'>

Online Best Learning </p> <br />
<p className='max-sm:-mt-7 sm:text-2xl md:text-3xl lg:text-7xl lg:ml-20 lg:mt-6 md:ml-1'>
opportunities in  the world
</p>
<div className='text-xs md:text-xl md:mr-20 lg:m-auto sm:mt-4 md:leading-tight max-sm:leading-none lg:mt-10 lg:text-xl'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus unde sint dolorum fugit! Non voluptate quisquam itaque dignissimos ipsa excepturi necessitatibus. 
</div>
    <button className='px-3 py-2 mt-2 sm:px-6 sm:py-4 bg-purple-800 lg:mt-12 lg:ml-60 lg:px-16 lg:py-6 rounded-lg lg:text-2xl text-white'> Enroll Now</button>
        </div>
        <div>
    <img src="/layer.png" alt=""  className=' max-sm:h-20 h-36 w-full lg:mt-20  lg:h-60'/>
    <img src="/Group 1984.png" alt=""  className=' h-36 max-sm:h-20 lg:ml-30   -mt-10   lg:h-full'/>
    </div>

    </div>
   


</div>
<Home1 />
<Home2 />




    </div>
  )
}

export default Home