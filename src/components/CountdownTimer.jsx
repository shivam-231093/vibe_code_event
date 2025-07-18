import React from 'react'
import { useTimer } from 'react-timer-hook';
import timerIllustrationPng from "/timerIllustration.png"
import { useNavigate } from 'react-router';

const CountdownTimer = () => {
    const navigate = useNavigate();
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
    } = useTimer({ expiryTimestamp: new Date("2025-07-25T00:00:00"), onExpire: () => console.warn('onExpire called'), interval: 20 });
    const clock = (days > 0)
        ? { labels: ["DAYS", "HOURS", "MIN"], values: [days, hours, minutes] }
        : {labels: ["HOURS", "MIN", "SEC"], values: [hours, minutes, seconds]}

    return (
        <section className='w-fit m-auto mb-8'>
            <h2 className='font-syne ml:text-4xl ms:text-3xl text-xl text-center my-6 max-[25rem]:w-72 m-auto'>There's a space for everybody at <span className='text-[#FF0105] font-black font-space-grostesk'>VIBE CODE</span> 2025.</h2>
            <div className='flex font-syne ml:h-75 ms:h-64 h-48 bg-[#1C1A1A] py-4 ml:px-8 px-4 rounded-4xl justify-between items-center w-fit ml:w-full m-auto ml:gap-12 ms:gap-6 gap-2'>
                <div className='justify-center items-center h-full flex flex-col'>
                    <h3 className='text-[#FF3044C9] text-2xl font-bold self-start'>Event starts in</h3>
                    <div className='w-fit flex flex-col items-center mt-2 ms:mb-8 mb-4'>
                        <div className='ml:text-8xl ms:text-6xl text-4xl w-fit mb-4'>
                            {
                                clock.values.map((value, index)=>{
                                    return (<span key={index} className='w-12 ms:w-22 ml:w-28 inline-block text-center'>{(value) < 10 ? "0" : ""}{value}</span>)
                                })
                            }
                        </div>
                        <div className='text-[0.6rem] flex justify-between w-full'>
                            {
                                clock.labels.map((label, index)=>{
                                    return (<span key={index} className='w-12 ms:w-22 ml:w-28 text-center'>{label}</span>)
                                })
                            }
                        </div>
                    </div>
                    <button
                        className='font-inter font-bold text-sm bg-[#FF0000CC] rounded-lg px-8 py-1.5 cursor-pointer'
                        onClick={(e) => { navigate("/register") }}>
                        Register
                    </button>
                </div>
                <img src={timerIllustrationPng} alt="" className='ml:h-full h-4/5' />
            </div>
        </section>
    )
}

export default CountdownTimer