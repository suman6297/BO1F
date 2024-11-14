import Accordion from "./Accordion";


const Home4 = () => {
    const faqItems = [
        {
          question:'What services are available on our website?',
          answer:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nihil perspiciatis voluptatum ab deserunt debitis libero minus voluptates ea velit sapiente aspernatur ut totam nemo, sit odit dolores temporibus doloremque.'
        },
        {
          question:'How can we guarantee the caliber of the assignments?',
          answer:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nihil perspiciatis voluptatum ab deserunt debitis libero minus voluptates ea velit sapiente aspernatur ut totam nemo, sit odit dolores temporibus doloremque.'
        },
        {
          question:'What distinguishes our company from other assignment writing firms?',
          answer:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nihil perspiciatis voluptatum ab deserunt debitis libero minus voluptates ea velit sapiente aspernatur ut totam nemo, sit odit dolores temporibus doloremque.'
        },
        {
          question:'Does utilizing our service have any limitations?',
          answer:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nihil perspiciatis voluptatum ab deserunt debitis libero minus voluptates ea velit sapiente aspernatur ut totam nemo, sit odit dolores temporibus doloremque.'
        },
        {
          question:"How can consumers access our website's news and updates?",
          answer:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nihil perspiciatis voluptatum ab deserunt debitis libero minus voluptates ea velit sapiente aspernatur ut totam nemo, sit odit dolores temporibus doloremque.'
        },
      ]
  return (
    <div className="w-full container mx-auto flex flex-col justify-center items-center py-10">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="w-full flex flex-col justify-center items-center text-center">
          <h1 className="font-bold font-cormorant  text-4xl lg:text-5xl mb-8">FAQs</h1>
          <hr className='w-20 rounded-md'></hr>
        </div>
        <div className="w-full flex justify-center mt-8">
          <div className="p-6 w-full  rounded-sm">
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                title={item.question}
                answer={item.answer}/>
              ))}
              
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home4;