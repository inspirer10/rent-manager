import Link from 'next/link';
import React from 'react';
import { HiMiniCubeTransparent } from 'react-icons/hi2';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa6';

function Footer() {
    const handleSectionRouting = (e, section) => {
        e.preventDefault();

        document
            .getElementById(`${section}`)
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className='footer-section'>
            <div className='footer-main'>
                <div className='footer-brand'>
                    <h2>
                        <HiMiniCubeTransparent className='icon' /> RentHub
                    </h2>
                    <p>
                        Modern property management made simple for landlords and
                        renters.
                    </p>
                </div>

                <nav className='footer-links'>
                    <span>Quick Links</span>
                    <a
                        href='#propertiesList'
                        onClick={(e) =>
                            handleSectionRouting(e, 'propertiesList')
                        }
                    >
                        Properties
                    </a>
                    <a
                        href='#rentals'
                        onClick={(e) => handleSectionRouting(e, 'rentals')}
                    >
                        Rentals
                    </a>
                    <a
                        href='#income'
                        onClick={(e) => handleSectionRouting(e, 'income')}
                    >
                        Income Reports
                    </a>
                    <a
                        href='#faq'
                        onClick={(e) => handleSectionRouting(e, 'faq')}
                    >
                        FAQs
                    </a>
                    <a
                        href='#testimonials'
                        onClick={(e) => handleSectionRouting(e, 'testimonials')}
                    >
                        Testimonials
                    </a>
                </nav>

                <div className='footer-contact'>
                    <span>Contact</span>
                    <a href='mailto:support@renthub.com'>support@renthub.com</a>
                    <a href='tel:+48123456789'>+48 123 456 789</a>
                    <address>ul. Przykładowa 12, 00-000 Gdańsk</address>
                </div>
                <div className='footer-social'>
                    <span>Follow Us</span>
                    <div className='footer-social-icons'>
                        <a
                            href='https://facebook.com'
                            aria-label='Facebook'
                            target='_blank'
                            rel='noopener'
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href='https://instagram.com'
                            aria-label='Instagram'
                            target='_blank'
                            rel='noopener'
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href='https://linkedin.com'
                            aria-label='LinkedIn'
                            target='_blank'
                            rel='noopener'
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href='https://youtube.com'
                            aria-label='YouTube'
                            target='_blank'
                            rel='noopener'
                        >
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            <div className='footer-legal'>
                <div className='footer-legal-links'>
                    <Link href='/'>Privacy Policy</Link>
                    <Link href='/'>Terms of Service</Link>
                </div>
                <span className='footer-legal-copy'>
                    © 2025 RentHub. All rights reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
