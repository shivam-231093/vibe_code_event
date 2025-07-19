import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import logoPng from '/logo.png'
import stclogo from "/stclogo.png"
import BlurElement from './BlurElement'

const navList = [
  { label: "Home", path: "/" },
  // { label: "Sponsers", path: "/sponsers" },
  // { label: "Humans", path: "/humans" },
  { label: "FAQs", path: "/faqs" },
  { label: "Contact us", path: "/contact" },
  { label: "Register", path: "/register" },
]

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='flex w-full justify-evenly gap-6 items-center lg:mx- ms:mx mx- my-1 z-10'>
     <BlurElement
      elements={[
      <div className='ms:w-30 w-24 h-fit'>
      <img src={stclogo} alt="" className='h-16' />
      </div>,
      <nav className='flex gap-2 font-space-grostesk font-normal items-center max-ml:hidden'>
        {navList.map((ele) => {
          return (<NavLink key={ele.label} to={ele.path} className={"px-2 rounded-full"} style={({ isActive }) => { return { backgroundColor: isActive ? "rgb(0 156 255 / 50%)" : "transparent" } }} end>{ele.label}</NavLink>)
        })}
      </nav>,
      <ProfileLogo />,
      <button className='font-inter font-bold text-sm bg-[#FF0000CC] rounded-lg px-5 py-1.5 cursor-pointer'
      onClick={(e)=>{navigate("/register")}}>
        Register
      </button>,
      ]}
      delay={300}
      direction="top"
      className="flex justify-evenly items-center  w-full lg:mx-12   ms:mx-6 mx-2 my-1"
     
        />
    </header>
  )
}

export default Header


const ProfileLogo = () => {

  const [display, setDisplay] = useState(false);
  const [currPage, setCurrPage] = useState("Home");

  return (
    <>
      <div className='relative w-fit block ml:hidden text-white'
        onClick={() => { setDisplay((display) => !display) }}>
        <div className='px-2 rounded-full bg-[#009cff80] w-24 text-center'>{currPage}</div>
        {display && <nav className='absolute flex-col min-w-fit flex py-2 rounded-lg mt-0.5 z-101 w-48 -left-12 overflow-hidden bg-[#000000c7]' style={{ backdropFilter: "blur(3px)" }}>
          {navList.map((ele) => {
            return (<NavLink key={ele.label} to={ele.path} onClick={(e)=>{setCurrPage(ele.label)}} className={"px-2 rounded-full text-center"} style={({ isActive }) => { return { backgroundColor: isActive ? "rgb(0 156 255 / 50%)" : "transparent" } }} end>
              {ele.label}
              </NavLink>)
          })}
        </nav>
        }
      </div>
      {!!display && <div className='w-dvw h-dvh absolute z-100 -top-6 bg-transparent -left-[50dvw]' onClick={(e) => { setDisplay((display) => !display) }}></div>}
    </>
  )
}