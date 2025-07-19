import React from 'react'
import contact_img from '../assets/contact_img2.png'
import { TiSocialLinkedin } from "react-icons/ti";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import BlurElement from '../components/BlurElement';

export default function Contact() {
  return (
    <div className='m-auto ms:px-6 px-3 h-screen min-h-fit text-white w-fit'>
        <BlurElement
      elements={[
          
          <p className='text-[#FF0105] font-bold font-poppins ml:text-6xl text-4xl max-[24rem]:text-3xl lg:p-4 pb-4 mb-4 relative left-2'>How Can We Help You ?</p>,
        <div className='bg-[#1A1A1A] relative lg:pl-16 pt-8 flex justify-between rounded-2xl p-4 min-w-fit min-h-fit lg:w-full w-fit'>
            <div className=''>
            <p className='w-80 font-medium font-syne text-4xl text-white'>
                We’re here to connect and assist you
            </p>
            <br />
            <p className='py-4 w-60'>
                Have questions, need assistance, or just want to connect?
                <br/>
                Our team is ready to assist you.
            </p>
            <div className='grid md:grid-cols-2 ms:grid-cols-1 grid-cols-2 max-[25rem]:grid-cols-1 max-[25rem]:gap-6 gap-12 gap-x-3 w-full mt-10'>
                <div>
                    <div className='text-[#FF0105] font-[600] text-2xl'>CONTACT US</div>
                    <br/>
                    <div>+91 9174563894</div>
                </div>
                <div>
                    <div className='text-[#FF0105]  font-[600] text-2xl'>
                        EVENT LOCATION
                    </div>
                    <br/>
                    <div className='ms:w-[15vw]'>2nd floor, IT lab IT Building,Jabalpur Engineering College </div>
                </div>
                <div>
                    <div className='text-[#FF0105] font-[600] text-2xl'>EMAIL</div>
                    <br/>
                    <div>team.matrix.jec@gmail.com</div>
                </div>
                <div>
                    <div className='text-[#FF0105] font-[600] text-2xl'></div>
                    <br/>
                    <div className='ml-4 flex gap-4 '>
                       
                    </div>
                    </div>
                </div>

            </div>
            
            <div className='ml:w-90 md:w-60 ms:w-80 w-60 self-end max-ms:hidden'>
                <img src={contact_img} alt="" className='w-full h-full object-cover'/>
                
            </div>
           
        </div>
        ]}
        delay={300}
        direction="top"
        className="flex flex-col justify-around max-ml:flex-col gap-2 items-center w-full"
      />
      
    </div>
  )
}
