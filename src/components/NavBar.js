import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Link from './Link';

const NavBar = () => {
    const [open, setOpen] = useState(false);


    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Products', path: '/products' },
        { id: 3, name: 'Orders', path: '/orders' },
        { id: 4, name: 'About', path: '/about' },
    ];



    return (
        <div className='p-4 flex justify-between items-center bg-purple-200'>
            <div>
                <h2>Logo</h2>
            </div>
            <nav className=''>
                <ul className={`md:flex absolute md:static bg-purple-200 duration-500 ease-in w-full z-50 px-[20px] left-0 ${open ? 'top-[55px]' : 'top-[-150px]'}`}>
                    {
                        routes.map(route => <Link
                            route={route}
                            key={route.id}
                        />)
                    }
                </ul>
                <div onClick={() => { setOpen(!open) }} className="h-6 w-6 md:hidden"  >
                    {
                        open ?
                            <XMarkIcon />
                            :
                            <Bars3Icon />
                    }
                </div>
            </nav>
        </div>
    );
};

export default NavBar;