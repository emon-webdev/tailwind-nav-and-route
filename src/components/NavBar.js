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
        <div>
            {
                open ?
                    <XMarkIcon onClick={() => { setOpen(!open) }} className="h-6 w-6 " />
                    :
                    <Bars3Icon onClick={() => { setOpen(!open) }} className="h-6 w-6 " />
            }
            <span>{open ? 'open' : 'close'}</span>
            <ul className='md:flex justify-center '>
                {
                    routes.map(route => <Link
                        route={route}
                        key={route.id}
                    />)
                }
            </ul>
        </div>
    );
};

export default NavBar;