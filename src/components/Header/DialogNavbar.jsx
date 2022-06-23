import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline'


const DialogNavbar = ({ open, setOpen }) => {

    return (
        <Transition show={open} >
            <Dialog className="relative z-10" onClose={() => setOpen(false)}>
                <Transition.Child
                    enter="ease-in duration-300 sm:duration-700"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-700"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className='w-full h-screen bg-zinc-800/40 backdrop-blur-sm z-10 transition-opacity' />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                enter="transform transition ease-out duration-500 "
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in duration-500 sm:ease"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full">
                                <Transition.Child
                                    enter="ease-in duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Dialog.Panel className='relative w-[305px] h-screen py-7 px-6 bg-white sm:w-[285px]'>
                                        <div className='mb-6 w-11/12 flex items-center items-between justify-end'>
                                            <button className='outline-none'>
                                                <XIcon className='w-6 cursor-pointer' aria-label='Close menu' onClick={() => setOpen(false)} />
                                            </button>
                                        </div>
                                        <section>
                                            <ul>
                                                <li className='navItem leading-7'>Red Bull Racing</li>
                                                <li className='navItem leading-7'>AlphaTauri </li>
                                                <li className='navItem leading-7'>McLaren </li>
                                                <li className='navItem leading-7'>Haas</li>
                                                <li className='navItem leading-7'>Ferrari <span className='italic'>(Soon available)</span></li>
                                                <li className='navItem leading-7'>Alpine <span className='italic'>(Soon available)</span></li>
                                                <li className='navItem leading-7'>Mercedes<span className='italic'>(Soon available)</span></li>
                                                <li className='navItem leading-7'>Alfa Romeo <span className='italic'>(Soon available)</span></li>
                                                <li className='navItem leading-7'>Aston Martin <span className='italic'>(Soon available)</span></li>
                                                <li className='navItem leading-7'>Williams <span className='italic'>(Soon available)</span></li>
                                                <br />
                                                <li className='navItem leading-7'>Store</li>
                                            </ul>
                                        </section>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition >


    )
};

export default DialogNavbar;