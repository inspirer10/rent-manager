'use client';

import { useState, useEffect } from 'react';
import { HiMiniCubeTransparent } from 'react-icons/hi2';
import { FaArrowRightLong } from 'react-icons/fa6';

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsVisible(false); //Scrolling down
            } else {
                setIsVisible(true); //Scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
            <h2>
                <HiMiniCubeTransparent className='icon' /> RentHub
            </h2>
            <nav>
                <p>Properties</p>
                <p>Rentals</p>
                <p>Income Reports</p>
                <p>FAQs</p>
            </nav>
            <button>
                Get Started <FaArrowRightLong className='icon' />
            </button>
        </header>
    );
}

export default Header;
