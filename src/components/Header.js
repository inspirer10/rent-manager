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

    const handleSectionRouting = (e, section) => {
        e.preventDefault();

        // Jeśli jesteśmy już na stronie głównej, przewiń do sekcji
        document
            .getElementById(`${section}`)
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
            <h2>
                <HiMiniCubeTransparent className='icon' /> RentHub
            </h2>
            <nav>
                <a
                    href='#propertiesList'
                    onClick={(e) => handleSectionRouting(e, 'propertiesList')}
                >
                    Properties
                </a>
                <a href='#' onClick={(e) => handleSectionRouting(e, '')}>
                    Rentals
                </a>
                <a
                    href='#aboutUs'
                    onClick={(e) => handleSectionRouting(e, 'aboutUs')}
                >
                    About Us
                </a>
                <a href='#faq' onClick={(e) => handleSectionRouting(e, 'faq')}>
                    FAQ
                </a>
            </nav>
            <button>
                Get Started <FaArrowRightLong className='icon' />
            </button>
        </header>
    );
}

export default Header;
