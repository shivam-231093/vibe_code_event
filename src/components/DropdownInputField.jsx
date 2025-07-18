import { useState } from 'react';
import downArrow from '/downArrow.svg';

const DropdownInputField = ({ placeholder, value, options, setValue }) => {
    const [displayOptions, setDisplayOptions] = useState(false)

    return (
        <>
            <div
                onClick={(e) => { setDisplayOptions(displayOptions => !displayOptions) }}
                className='relative w-full h-fit flex flex-col text-black'>
                <div
                    className='bg-[#D4D4D4] rounded-lg text-sm px-2 py-2 h-9'
                    style={{ borderColor: (displayOptions) ? 'black' : '#D9D9D9', color: value ? 'black' : '#00000066' }}>
                    {value ? value : placeholder}
                </div>
                <img src={downArrow} alt="" className='w-4 absolute right-1 top-3' />


                {displayOptions && (<>
                    <div
                        className='absolute w-11/12 self-center bottom-full bg-white rounded-lg z-10 border border-gray-400 text-[15px] overflow-hidden'>
                        {options?.map((option) => {
                            return (<div
                                className='py-[3px] px-2 hover:bg-blue-700 hover:text-white'
                                style={(value == option) ? { backgroundColor: '#7171e7', color: 'white' } : {}}
                                onClick={(e) => { setValue(option) }}
                                key={option}>
                                {option}
                            </div>)
                        })}
                    </div>
                    <div className='w-dvw h-dvh bg-transparent z-5 fixed top-0 left-0'>
                    </div>
                </>
                )}
            </div>
        </>
    )
}

export default DropdownInputField