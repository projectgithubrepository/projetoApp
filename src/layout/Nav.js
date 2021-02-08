import React from 'react';
import { NavLink } from 'react-router-dom';

const navs = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/about',
        name: 'About',
    },
    {
        path: '/contact',
        name: 'Contact',
    },
];

const Nav = () => (
    <nav className='bg-green-600 p-4 text-white shadow'>
        <img className='max-h-12 -mb-7 -mt-5 animate-ping' src='https://i2.wp.com/alternativehealthatlanta.com/wp-content/uploads/2019/09/Anxiety_and_Depression.png?resize=271%2C268&amp;ssl=1'></img>
        <ul className='flex space-x-6 justify-end'>
            {navs.map((navItem) => (
                <li>
                    <NavLink exact to={navItem.path} activeClassName='text-green-400 animate-pulse cursor-wait'>{navItem.name}</NavLink>
                </li>
            ))}            
        </ul>
    </nav>
);

export default Nav;