import React ,{useState} from "react";
import "./home.css";
import { FaFileAlt } from "react-icons/fa";
import { LuSchool2 } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';

const Home = () => {
    const [counterState, setCounterState] = useState(false)
  return (
    <div >
      <img src="/Frame 23.jpg" alt="" width="100%" />
      <div className=" md:mx-10 relative font-cormorant">
        <div>
          <img
            src="/OBJECTS.png"
            alt=""
            className=" absolute mt-4 max-lg:hidden"
          />
          <h1 className="text-center text-4xl mt-6 ">
            700+ Students Saved , and counting
          </h1>
          <h2 className="text-center text-1xl mt-5  max-sm:mx-10">
            50K new study notes added every day form the world's most active
            student <br />
            communitea
          </h2>
        </div>
        

        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>

        <div className=" flex justify-around mt-8 max-sm:mx-3 shadow-lg shadow-gray-300 pb-5">
     
          <div>
            <div className=" text-4xl">    <h1 className=" text-4xl">{ counterState &&
                  <CountUp start={0} end={350} duration={20}></CountUp>
                }+</h1></div>
            <p className=" flex mt-3">
              {" "}
              <FaFileAlt className="mr-2" /> Study resourccs
            </p>
          </div>

         


          <div>
          
            <div className=" text-4xl">{ counterState &&
                  <CountUp start={0} end={115} duration={20}></CountUp>
                }+</div>
            <p className=" flex mt-3">
              {" "}
              <LuSchool2 className="mr-2 mt-1" /> institutions
            </p>
          </div>
          <div>
            <div className=" text-4xl">    <h1 className=" text-4xl">{ counterState &&
                  <CountUp start={0} end={700} duration={20}></CountUp>
                }+</h1></div>
            <p className=" flex mt-3">
              {" "}
              <FaUserLarge className="mr-2 mt-1" /> users
            </p>
          </div>
        

          <img
            src="/OBJECTS (1).png"
            alt=""
            className=" max-md:hidden w-16   "
          />
        </div>
        </ScrollTrigger>
      </div>

      <div className="relative mt-10 font-cormorant md:mx-6 ">
        <img src="/Rectangle 98.png" alt="" className="w-full  " />
        <div className=" absolute flex justify-between inset-5  items-start ">
          <div className="max-sm:mr-6">
            <p className="text-deeppurpal max-sm:-mt-5 sm:text-2xl md:text-3xl lg:text-7xl lg:ml-20 lg:mt-20">
              IELTS Preparation{" "}
            </p>{" "}
            <br />
            <p className="max-sm:-mt-7 sm:text-2xl md:text-3xl lg:text-7xl lg:ml-20 lg:mt-6 sm:-m-6 md:ml-1 text-purpal">
              Online Best Learning{" "}
            </p>{" "}
            <br />
            <p className="max-sm:-mt-7 sm:text-2xl md:text-3xl lg:text-7xl lg:ml-20 lg:mt-6 md:ml-1 text-lightpurpal ">
              opportunities in the world
            </p>
            <div className="text-xs md:text-xl md:mr-20 lg:m-auto sm:mt-4 md:leading-tight max-sm:leading-none lg:mt-10 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              unde sint dolorum fugit! Non voluptate quisquam itaque dignissimos
              ipsa excepturi necessitatibus.
            </div>
            <button className="px-3 py-2 mt-2 sm:px-6 sm:py-4 bg-purple-800 lg:mt-12 lg:ml-60 lg:px-16 lg:py-6 rounded-lg lg:text-2xl duration-700 hover:scale-[1.1]  hover:bg-purpal text-white">
              {" "}
              Enroll Now
            </button>
          </div>
          <div>
            <img
              src="/layer.png"
              alt=""
              className=" max-sm:h-20 h-36 w-full lg:mt-20  lg:h-60"
            />
            <img
              src="/Group 1984.png"
              alt=""
              className=" h-36 max-sm:h-20 lg:ml-30   -mt-10   lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
