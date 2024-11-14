import React from "react";

const Home2 = () => {
  const services = [
    {
      id: 1,
      img: "/service1.png",
      title: "Assignment",
      rating: 178,
    },
    {
      id: 2,
      img: "/service2.png",
      title: "Dissertation",
      rating: 150,
    },
    {
      id: 3,
      img: "/service3 (1).png",
      title: "Course work",
      rating: 120,
    },
    {
      id: 4,
      img: "/service4.png",
      title: "Thesis",
      rating: 129,
    },
    {
      id: 5,
      img: "/service5.png",
      title: "Essay",
      rating: 47,
    },
    {
      id: 6,
      img: "/service6.png",
      title: "Research Paper",
      rating: 59,
    },
    {
      id: 7,
      img: "/service7.png",
      title: "Power Point Presentation",
      rating: 89,
    },
    {
      id: 8,
      img: "/service8.png",
      title: "Programming",
      rating: 134,
    },
    {
      id: 9,
      img: "/service9.png",
      title: "Paper Writing",
      rating: 193,
    },
    {
      id: 10,
      img: "/service10.png",
      title: "Case Study",
      rating: 125,
    },
    {
      id: 11,
      img: "/service11.png",
      title: "Speech Writing",
      rating: 100,
    },
    {
      id: 12,
      img: "/service12.png",
      title: "Term Paper Writing",
      rating: 135,
    },
    {
      id: 13,
      img: "/service13.png",
      title: "Cover Letter Writing",
      rating: 120,
    },
    {
      id: 14,
      img: "/service14.png",
      title: "Resume Maker",
      rating: 132,
    },
  ];

  return (
    <div className="md:mx-10 mt-20  bg-pink-200 rounded-md font-cormorant font-bold  ">
      <h3 className="text-center py-3 text-4xl ">Our Services</h3>
      <p className="text-center text-2xl">We offer some fantastic services</p>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 justify-center items-center ml-20 mt-5 font-cormorant ">
        {services.map((item) => (
          <div
            key={item.id}
            className="border-2 border-slate-700 w-64 h-64 mb-10 rounded-2xl duration-700 hover:scale-[1.1]  shadow-md shadow-slate-700 bg-white"
          >
            <img
              src={item.img}
              alt="service-icon"
              className="w-64 h-40 rounded-t-2xl"
            />
            <h4 className="ml-2 text-2xl mt-2 leading-tight">{item.title} </h4>
            <div className="flex items-center ml-2">
              <div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/star.png" alt="star" />
                  ))}
                </div>
              </div>

              <span className="ml-1">({item.rating})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2;
