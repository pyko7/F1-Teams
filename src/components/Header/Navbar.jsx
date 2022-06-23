import React from 'react';
import { MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import DialogNavbar from './DialogNavbar'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className='w-full '>
                <div className='flex items-center items-between justify-between xl:justify-end	 '>
                    <ul className='w-1/2 flex justify-evenly xl:hidden '>
                        <Link to='RedBull' smooth={true} duration={1000}>
                            <li className='navItem'>Red Bull Racing</li>
                        </Link>
                        <Link to='AlphaTauri' smooth={true} duration={1000}>
                            <li className='navItem'>AlphaTauri</li>
                        </Link>
                        <Link to='McLaren' smooth={true} duration={1000}>
                            <li className='navItem'>McLaren</li>
                        </Link>
                        <Link to='Mercedes' smooth={true} duration={1000}>
                            <li className='navItem'>Haas</li>
                        </Link>
                    </ul>
                    <ul className='w-[10%] min-w-[100px] flex items-center items-between justify-between xl:hidden' >
                        <li className='navItem'>Store</li>
                        <li className='navItem' onClick={() => setOpen(true)}>Menu</li>
                    </ul>
                    <MenuIcon className='w-8 hidden cursor-pointer  bg-white/30 backdrop-opacity-95 rounded-[12px] p-1 xl:block' aria-label='Menu icon' onClick={() => setOpen(true)} />
                </div>
            </nav >
            <DialogNavbar open={open} setOpen={setOpen} />
        </>
    );
};

export default Navbar;