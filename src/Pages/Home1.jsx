import React from 'react'

const Home1 = () => {

const awesomedata =[
    {
        image:"/3146064.png.png",
        headind:" Plagiarism Checker",
        paragraph:" We will provide access to assignments free of plagiarism"
    },
    {
        image:"/2232688.png.png",
        headind:" Free Publications",
        paragraph:" We will provide access to publication"
    },
    {
        image:"/2658986.png.png",
        headind:" Provides Free Books and PDF",
        paragraph:"Free Books and PDF will be provided"
    },
    {
        image:"/15869380.png.png",
        headind:" Paraphraser",
        paragraph:" A paraphraser will be provided"
    },
    

]

  return (
    <div>
    <div className=' text-center mt-8 '>
        <h1 className='text-2xl md:text-3xl lg:text-5xl'>
            Awesome Features
        </h1>
        <p className=' mt-3 text-lg md:text-xl lg:text-3xl'>
            Get ready to unlock the next level to features
        </p>
    </div>
    <div>
        <div className='flex-col flex lg:flex-row  items-center justify-center gap-10 space-x-5 mt-5 lg:mx-40'>

    {awesomedata.map((item ,index)=>{
        
        return <div className=' justify-center border-2 border-gray-500 shadow-gray-500 shadow-md  p-3  rounded-lg ' key={index}>
            <h1 className=' text-center justify-center items-center bold'>
                <img src={item.image} alt="" className='text-center justify-center items-center block m-auto' /> </h1>
            <br/>
            <h1 className='text-center text-2xl'>
                {item.headind}
                </h1>
                <br/>
                <p className='text-center text-base '>
                    {item.paragraph}</p>
                    </div>
                   

    })}

    </div>
    
    </div>

    </div>
  )
}

export default Home1