import Image from 'next/image';
import React from 'react';
import {
    FaRegPlusSquare,
    FaUserCheck,
    FaRegMoneyBillAlt,
    FaChartBar,
} from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa6';

const stepsData = [
    {
        icon: <FaRegPlusSquare />,
        title: 'Add Property',
        desc: 'Enter property details to add a new apartment, house, or garage to your portfolio.',
    },
    {
        icon: <FaUserCheck />,
        title: 'Assign Tenant',
        desc: 'Connect tenants to properties and set up rental agreements with ease.',
    },
    {
        icon: <FaRegMoneyBillAlt />,
        title: 'Track Rent',
        desc: 'Monitor payments, send reminders, and keep your income organized automatically.',
    },
    {
        icon: <FaChartBar />,
        title: 'Generate Report',
        desc: 'View income summaries and download reports for your accounting or tax needs.',
    },
];

function HowItWorks() {
    return (
        <section className='how-it-works-section' id='howItWorks'>
            <p className='preHeading'>
                <FaRegStar /> Our Benefits
            </p>

            <h2 className='heading'>
                How <span>RentHub</span> Works
            </h2>
            <p className='subHeading'>
                Manage your rental properties in just a few simple steps.
            </p>

            <div className='how-steps'>
                {stepsData.map(({ icon, title, desc }, index) => (
                    <div className='how-step' key={index}>
                        <div className='how-icon'>{icon}</div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>

            <div className='how-grid'>
                <article aria-labelledby='step1-title'>
                    <aside className='description'>
                        <span className='how-label how-label--pink'>
                            Save time
                        </span>
                        <h3 className='how-title'>Save Time And Effort</h3>
                        <p className='how-desc'>
                            Say goodbye to manual property tracking and
                            complicated spreadsheets. RentHub automates rent
                            collection and tenant management, so you can focus
                            on what matters most.
                        </p>
                    </aside>
                    <aside className='image-wrapper'>
                        <div className='how-img-wrap'>
                            <Image
                                src='/image2.png'
                                alt='Modern property managed by RentHub'
                                width={400}
                                height={300}
                            />
                            <div
                                className='how-notification'
                                aria-label='Notification'
                            >
                                <span
                                    className='how-notif-icon'
                                    aria-hidden='true'
                                >
                                    🏠
                                </span>

                                <p className='how-notif-title'>RentHub</p>
                                <p className='how-notif-desc'>
                                    Your rent has been collected automatically!
                                </p>
                            </div>
                        </div>
                    </aside>
                </article>

                {/* Step 2 */}
                <article aria-labelledby='step2-title'>
                    <aside className='image-wrapper'>
                        <div className='how-img-wrap'>
                            <Image
                                src='/image1.png'
                                alt='Property analytics dashboard'
                                width={400}
                                height={300}
                            />
                            <div
                                className='how-stats-card'
                                aria-label='Income Growth'
                            >
                                <span className='how-stats-value'>+24%</span>
                                <span className='how-stats-label'>
                                    Income Growth
                                </span>
                            </div>
                        </div>
                    </aside>

                    <aside className='description'>
                        <span className='how-label how-label--blue'>
                            Save more
                        </span>
                        <h3 className='how-title'>
                            Make Smarter Property Decisions
                        </h3>
                        <p className='how-desc'>
                            With real-time insights and analytics, track your
                            rental income, monitor property performance, and
                            make data-driven decisions to maximize your returns.
                        </p>
                    </aside>
                </article>

                {/* New Placeholder Article */}
                <article aria-labelledby='step3-title'>
                    <aside className='description'>
                        <span className='how-label how-label--green'>
                            Stay secure
                        </span>
                        <h3 className='how-title'>Secure Online Payments</h3>
                        <p className='how-desc'>
                            Accept rent and deposits safely with integrated,
                            encrypted online payments. RentHub ensures every
                            transaction is protected, so both landlords and
                            tenants can pay and get paid with total peace of
                            mind.
                        </p>
                    </aside>
                    <aside className='image-wrapper'>
                        <div className='how-img-wrap'>
                            <Image
                                src='/image4.png'
                                alt='Modern property managed by RentHub'
                                width={400}
                                height={300}
                            />
                            <div className='how-payment-badge'>
                                <svg
                                    width='22'
                                    height='22'
                                    viewBox='0 0 22 22'
                                    fill='none'
                                >
                                    <circle
                                        cx='11'
                                        cy='11'
                                        r='11'
                                        fill='#16a34a'
                                    />
                                    <path
                                        d='M7 11.5l3 3 5-5'
                                        stroke='#fff'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                                <p className='how-payment-text'>
                                    Payment secured
                                </p>
                            </div>
                        </div>
                    </aside>
                </article>
            </div>
        </section>
    );
}

export default HowItWorks;
