import React from 'react'
import rulesPng from '/rules.png'
import rewardsPng from '/rewards.png'
import { FlipCard } from './FlipCard'

const content = [
  {
    heading: "Rules",
    img: rulesPng,
    textContent: (
      <ul className="list-disc list-inside text-white text-sm font-sans space-y-2 text-left">
        <li>Only JEC students are eligible to participate.</li>
        {/* <li>Participants can compete individually or in a team of 2.</li> */}
        <li>Each team must build a tool or software based on the problem statement provided.</li>
        {/* <li>Usage of AI tools or AI-powered IDEs is allowed.</li> */}
        <li>Plagiarism will result in immediate disqualification.</li>
        <li>Submission must be made before the deadline.</li>
        <li>All decisions by the jury will be final and binding.</li>
        <li>Maintain decorum and a professional attitude throughout the event.</li>
      </ul>
    )
  },
  {
    heading: "Rewards",
    img: rewardsPng,
    textContent: (
      <p className="text-white text-sm font-sans text-center">
        Exciting rewards await the winners!
        <br /><br />
         Winner: ₹5000* + Certificate <br /><br />
         1st Runner-up: ₹3000* + Certificate<br /><br />
         2nd Runner-up: ₹2000* + Certificate<br /><br />
         All participants get participation certificates.<br />
         Special recognition for innovative solutions.
         <br /><br />
         Internship opportunities<br />
      </p>
    )
  }
];


const FrontOfCard = ({ heading, img }) => {
    return <div className="card bg-[#1C1A1A] rounded-2xl w-80 h-96 flex items-center justify-between py-6 flex-col">
        <h2 className='text-[#FF3B30] font-syne font-bold text-2xl'>{heading}</h2>
        <img src={img} alt="" className='w-64' />
    </div>
}

const BackOfCard = ({ heading, textContent }) => {
    return <div className="card bg-[#1C1A1A] rounded-2xl w-80 h-96 flex items-center justify-between py-6 flex-col">
        <h2 className='text-[#FF3B30] font-syne font-bold text-2xl'>{heading}</h2>
        <div className='w-60 h-72 flex items-center justify-center'>{textContent}</div>
    </div>
}

const RulesAndRewards = () => {
    return (
        <section className='flex gap-10 w-full items-center justify-center my-8 max-[48rem]:flex-col'>
            {content.map((ele, index) => {
                return (<div className='w-80 h-fit' key={index}>
                    <FlipCard frontOfCard={<FrontOfCard img={ele.img} heading={ele.heading} />} backOfCard={<BackOfCard heading={ele.heading} textContent={ele.textContent}/>} />
                </div>)
            })}
        </section>
    )
}

export default RulesAndRewards