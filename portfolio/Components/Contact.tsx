import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/16/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import Footer from './Footer';

type Props = {}
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:akuls18@my.yorku.ca?subject=${formData.subject}&body=Hi, I'm ${formData.name}. ${formData.message}`;
    }

    return (
        <div className='h-auto md:h-[110vh] flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-[5rem] sm:top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-5 sm:space-y-10 pt-[8rem] sm:pt-[10rem]'>
                <div className='text-2xl sm:text-4xl font-semibold text-center'>
                    <h4>I have got what you need.{" "}
                        <span className='decoration-[#F7AB0A]/50 underline'>Let`&apos;`s Connect</span>
                    </h4>

                    <div className='mt-5 sm:mt-[1rem] mb-5 sm:mb-[2rem] space-y-5'>
                        <div className='flex items-center space-x-5 justify-center'>
                            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                            <p className='text-lg sm:text-2xl'>+14379704218</p>
                        </div>

                        <div className='flex items-center space-x-5 justify-center'>
                            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                            <p className='text-lg sm:text-2xl'>akuls18@my.yorku.ca</p>
                        </div>

                        <div className='flex items-center space-x-5 justify-center'>
                            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                            <p className='text-lg sm:text-2xl'>Vaughan, Ontario</p>
                        </div>
                    </div>

                    <div className='m-5 sm:m-[5rem]'>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full sm:w-fit mx-auto'>
                            <div className='flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0'>
                                <input {...register('name')} placeholder='Name' className='contactInput' type='text' />
                                <input {...register('email')} placeholder='Email' className='contactInput' type='email' />
                            </div>
                            <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />
                            <textarea {...register('message')} placeholder='Message' className='contactInput' />
                            <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
