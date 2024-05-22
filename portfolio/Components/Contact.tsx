import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid';

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <div className='text-4xl font-semibold text-center'>
                <h4>I have got, what you need.{" "}
                    <span className='decoration-[#F7AB0A]/50 underline'>Let's Talk</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl' >+14379704218</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl' >akuls18@my.yorku.ca</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl' >5 Buttermill Avenue, Vaughan</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input className='contactInput' type='text' /><input className='contactInput' type='text' />
                    </div>
                    <input className='contactInput' type='text'/>
                    <textarea className='contactInput'/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact