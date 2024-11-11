import React from 'react'
import "./home.css"
import { FaFileAlt } from "react-icons/fa";
import { LuSchool2 } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
<img src="/Frame 23.jpg" alt="" width="100%" />
<div>
<h1 className='h1'>
    700+ Students Saved , and counting
</h1>
<h2 className='h2'>
    50K new study notes added every day form the world's most active student <br />communitea
</h2>
</div>

<div className=' hero2 '>
    <div>
        <h1>350+</h1>
        <p> <FaFileAlt /> Study resourccs</p>
    </div>

    <div>
        <h1>115+</h1>
        <p> <LuSchool2 /> institutions</p>
    </div>
    <div>
        <h1>700+</h1>
        <p> <FaUserLarge /> users</p>
    </div>
</div>

    </div>
  )
}

export default Home