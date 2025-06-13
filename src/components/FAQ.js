'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const faqData = [
    {
        question: 'How do I add a new property?',
        answer: 'Go to the "Add Property" section, fill in all required details, and click "Add Rental." Your property will then appear in your Properties List.',
    },
    {
        question: 'Can I edit or delete a property after adding it?',
        answer: 'Yes, you can edit or remove any property from your list by clicking the edit or delete button next to each property in the Properties List.',
    },
    {
        question: 'How do I assign or update a tenant for a property?',
        answer: 'You can assign or update tenants directly from the rental agreement form or by editing the property details in your dashboard.',
    },
    {
        question: 'How can I filter properties by rent amount or date?',
        answer: 'Use the filters at the top of the Properties List to narrow down properties by status, rent start date, end date, or rent amount.',
    },
    {
        question: 'Is my data secure on this platform?',
        answer: 'Yes, we use industry-standard encryption and security practices to keep your data safe and private at all times.',
    },
    {
        question: 'What should I do if I encounter a technical issue?',
        answer: 'If you experience any technical problems, please contact our support team using the contact form or email provided in the Support section. We are here to help!',
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };
    return (
        <section className='faq-section'>
            <h2 className='heading'>Frequently Asked Questions</h2>
            <p className='subHeading'>
                Find answers to the most common questions about managing your
                properties.
            </p>
            <div className='faq-container'>
                {faqData.map((item, idx) => (
                    <div className='faq-item' key={idx}>
                        <div
                            className={`faq-question${
                                openIndex === idx ? ' open' : ''
                            }`}
                            onClick={() => toggleFaq(idx)}
                            aria-expanded={openIndex === idx}
                            aria-controls={`faq-content-${idx}`}
                        >
                            <p>{item.question}</p>
                            <FaChevronDown
                                className={`faq-icon${
                                    openIndex === idx ? ' open' : ''
                                }`}
                                aria-hidden='true'
                            />
                        </div>
                        <div
                            className={`faq-answer${
                                openIndex === idx ? ' open' : ''
                            }`}
                            id={`faq-content-${idx}`}
                            role='region'
                            aria-hidden={openIndex !== idx}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
