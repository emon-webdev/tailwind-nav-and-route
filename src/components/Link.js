import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='mr-4 py-2'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;