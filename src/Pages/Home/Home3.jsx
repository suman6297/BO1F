import React from 'react';

const advantages = [
  { title: "No Plagiarism", description: "100% original answers that lessen the possibility of receiving a bad grade." },
  { title: "On-time Submission", description: "We promise to turn in the job ahead of schedule, no matter how difficult it is." },
  { title: "24/7 support", description: "Help for homework is available 24/7; we are always here to assist students with their assignments." },
  { title: "Rewrites that satisfy", description: "Get your schoolwork redone as many times as you like till you are happy." },
];

const Home3 = () => (
  <section className="text-center py-8 font-cormorant md:mx-6">
    <h2 className="text-3xl font-bold font-cormorant mb-4">Our Assistance's advantages</h2>
    <p className="text-gray-600 mb-8 text-xl">The Assigner wants to build a strong foundation that will enable students to soar to achievement.</p>
    <div className=' flex justify-end '>
    <img src="/OBJECTS.png" alt=""  className=' -rotate-90 absolute mr-48  max-lg:hidden'/>
    </div>

    <div className="flex justify-center items-center space-x-10 font-cormorantn max-md:flex-col  max-md:space-y-8   ">
      {advantages.map((adv, index) => (
        <div key={index} className="bg-adbg p-6  w-60 text-center duration-700 hover:scale-[1.1]  font-cormorant border-2 border-gray-500 shadow-gray-500 shadow-md rounded-lg">
          <h3 className=" font-semibold mb-2 text-black text-xl">{adv.title}</h3>
          <p className="text-gray-700">{adv.description}</p>
        </div>
      ))}
    </div>
    <div className=' relative'>
    <img src="/OBJECTS (1).png" alt="" height={300} width={110} className=' rotate-180  text-6xl absolute  ml-72 max-lg:hidden' />
    </div>
  </section>
);

export default Home3;
