import React from 'react'
import faq_img from '../assets/faq_img.png'
import BlurElement from '../components/BlurElement';

export default function FAQpage() {

  const [openIndex, setOpenIndex] = React.useState(null);
  
  const faqs = [
    {
      id: "01",
      que: "Do projects need to be related to the theme?",
      ans: "All submitted projects must strictly adhere to the designated theme or problem statement.",
    },
    {
      id: "02",
      que: "How many team members do I need?",
      ans: "Teams can have at most 2 members. Teams can form across different academic years. Cross-specialization teams are allowed.",
    },
    {
      id: "03",
      que: "How do I register ?",
      ans: "Register online via the event’s website, with applications opening from July 18, 2025. Ready to dive in?",
    },
    {
      id: "04",
      que: "Can we bring a pre-built project to the hackathon?",
      ans: "It’s all about that on-the-spot magic. Projects with work outside of the hackathon duration will be disqualified.",
    },
    {
      id: "05",
      que: "What are the prerequisites to participate in this hackathon ?",
      ans: "Participants are expected to come with innovative ideas, a passion for coding, and a problem-solving, creative mindset.",
    },
    {
      id: "06",
      que: "How much are the participation fees?",
      ans: "Free. No fees—just pure fun and awesome vibes.",
    },
    {
      id: "07",
      que: "Will the Hackathon be in person or online ?",
      ans: "The hackathon will be conducted in-person (offline).",
    },
    {
      id: "08",
      que: "What is the venue for vibe coding 2025 ?",
      ans: "Venue: 2nd Floor IT Lab, IT Building, Jabalpur Engineering College, Jabalpur",
    },
  ]

  return (
    <div className='ms:px-6 px-3 lg:w-[60rem] w-full  min-h-screen lg:m-auto'>
      <BlurElement
        elements={[
          <p className='text-[#FF0105] font-bold font-poppins ms:text-6xl text-4xl text-center lg:p-4'>GOT QUESTIONS ?</p>,
          <p className='text-white font-medium font-poppins ms:text-xl text-lg text-center lg:mx-20 mb-8 mt-4'>
            We’ve answered the most common queries about the event—rules, registration, participation, and more. If you're still unsure, we’ve got your back!
          </p>,
          <div className='flex items-center justify-between mb-20'>
            <div>
              <p className='text-white font-bold ms:text-6xl text-4xl font-poppins p-4'>FAQS</p>
              <p className='text-white px-4 font-inter'>
                Got questions about the hackathon?
                <br />
                We’ve got all the info you need to get started
                <br /><br />
                Still curious?
                <br />
                Ping us anytime at&nbsp;
                <span className='text-[#FF0105]'>team.matrix.jec@gmail.com</span>
                <br />
                — we’re all ears (and keyboards)! 👨‍💻👩‍💻
              </p>
            </div>
            <img src={faq_img} alt="faq_img" className='md:w-80 w-60 self-end max-ms:hidden' />
          </div>
        ]}
        delay={300}
        direction="top"
        className="flex justify-evenly h-screen items-center lg:mx-12 ms:mx-6 mx-2 my-1"
      />

      <div className='space-y-4'>
        {faqs.map((faq, idx) => (
          <BlurElement
            key={faq.id}
            elements={[
              <div
                className={`${openIndex === idx ? 'bg-[#FF3B30]' : 'bg-white'} transition-all duration-300 w-full px-4 ml:px-8 py-2 text-black rounded-4xl`}
              >
                <div className='flex items-center w-[55rem] justify-between gap-2'>
                  <div className='flex font-bold gap-2 flex-1'>
                    <p className='text-3xl font-[500] py-2 text-center'>{faq.id}</p>
                    <p className='ml:p-2 my-auto ml:text-xl ms:text-lg font-semibold flex-1'>{faq.que}</p>
                  </div>
                  {openIndex === idx ? (
                    <button
                      onClick={() => setOpenIndex(null)}
                      className='border border-black cursor-pointer rounded-full w-12 h-12 text-4xl text-center pb-2 font-extrabold bg-white'
                    >
                      &minus;
                    </button>
                  ) : (
                    <button
                      onClick={() => setOpenIndex(idx)}
                      className='cursor-pointer rounded-full border bg-white border-black w-12 h-12 text-4xl text-center pb-2 font-extrabold'
                    >
                      &#x2B;
                    </button>
                  )}
                </div>

                {/* Animated Answer */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <hr className='mb-2 mt-2' />
                  <p className='p-2 flex flex-wrap gap-1'>
                    {openIndex === idx &&
                      faq.ans.split(" ").map((word, i) => (
                        <span
                          key={i}
                          className='inline-block opacity-0 animate-fade-in-word'
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          {word}
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            ]}
            delay={200}
            direction="bottom"
          />
        ))}
      </div>
    </div>
  )
}
