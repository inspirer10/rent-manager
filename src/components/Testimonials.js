import React from 'react';
import Image from 'next/image';

import { FaUsers } from 'react-icons/fa';
//import { FaUsersViewfinder } from 'react-icons/fa6';
import { FaQuoteLeft } from 'react-icons/fa';
import { PiShareFatFill } from 'react-icons/pi';

const TO_REMOVE = [
    {
        text: 'Managing my properties has never been simpler. I can track rent payments, communicate with tenants, and handle maintenance requests all in one place.',
    },
    {
        text: 'I love how transparent everything is. I always know when my rent is due, and support is quick to respond if I have questions.',
    },
    {
        text: 'The automatic reminders for upcoming lease renewals and payments are a game changer. Highly recommend this platform to other property owners.',
    },
];

const testimonialsData = [
    {
        female: true,
        name: 'Sara P.',
        role: 'Landlord',
        avatar: '/person3.jpg',
        text: 'Managing multiple properties used to be a headache, but now I can track payments and contracts all in one place. Highly recommended for landlords!',
    },
    {
        name: 'David L.',
        role: 'Property Owner',
        avatar: '/person1.jpg',
        text: 'The automatic reminders for upcoming lease renewals and payments are a game changer. My rental business has never run more smoothly.',
    },
    {
        name: 'Michael S.',
        role: 'Landlord',
        avatar: '/person2.jpg',
        text: 'I love being able to update property details and respond to maintenance requests from anywhere. The platform saves me time every month.',
    },
    {
        female: true,
        name: 'Emily R.',
        role: 'Renter',
        avatar: '/person4.jpg',
        text: 'As a renter, I appreciate how transparent everything is. I always know when my rent is due and can easily get in touch with my landlord.',
    },
    {
        name: 'Lucas P.',
        role: 'Renter',
        avatar: '/person5.jpg',
        text: 'Renting my new flat was simple and secure. The whole process was digital, and I could sign my agreement online without any hassle.',
    },
    {
        name: 'Adam G.',
        role: 'Property Owner',
        avatar: '/person6.jpg',
        text: "The dashboard gives me a clear overview of all my properties and rental income. It's the best tool I've used as a property owner.",
    },
];

function Testimonials() {
    return (
        <section className='testimonials-section' id='aboutUs'>
            <div className='section-header'>
                <div className='header-wrapper'>
                    <h2>Trusted by Renters</h2>
                    <p className='subHeading'>
                        Discover how our platform has helped property owners
                        manage rentals with ease
                    </p>
                </div>

                <FaUsers className='icon' aria-hidden='true' />
            </div>

            <div className='testimonials-list'>
                {testimonialsData.map(
                    ({ text, avatar, name, role, female }, index) => (
                        <div
                            className={`testimonial ${female ? 'female' : ''}`}
                            key={name + index}
                        >
                            <div className='testimonial-text'>
                                <FaQuoteLeft
                                    className='quote-icon'
                                    aria-hidden='true'
                                />
                                {text}
                            </div>
                            <div className='testimonial-meta'>
                                <Image
                                    className='testimonial-avatar'
                                    src={'/avatars' + avatar}
                                    width={65}
                                    height={65}
                                    alt={name}
                                />
                                <span className='testimonial-name'>{name}</span>
                                <span className='testimonial-role'>{role}</span>
                            </div>
                        </div>
                    )
                )}
            </div>

            <button>
                Share your experience <PiShareFatFill className='icon' />
            </button>
        </section>
    );
}

export default Testimonials;
