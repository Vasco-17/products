import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-slate-900 text-white py-3'>
            <nav className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Ecom</h1>
                <div className="">

                    <Link to={'/login'}>Login</Link>
                    <Link to={'/signup'}>Signup</Link>

                </div>
            </nav>
        </header>
    );
};

export default Header;