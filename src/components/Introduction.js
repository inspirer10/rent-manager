import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

function Introduction() {
    const cardsData = [
        { image: '/image2.png', text: 'Flat' },
        { image: '/image11.png', text: 'House' },
        { image: '/image4.png', text: 'Garage' },
        { image: '/image3.jpg', text: 'Parking Space' },
    ];

    return (
        <section className='introduction-section'>
            <div className='thumbnails-wrapper'>
                {cardsData.map(({ image, text }, index) => (
                    <div className='card' key={index}>
                        <Image src={image} alt='' height={300} width={300} />
                        <p>{text}</p>
                    </div>
                ))}
            </div>
            <h2 className='heading'>
                All your <span>rentals</span> in one place!
            </h2>
            <p className='subHeading'>
                Add, edit, and track your apartments, houses, and garages—all in
                one platform
            </p>

            <button>
                Add Property <FaArrowRightLong className='icon' />
            </button>
        </section>
    );
}

export default Introduction;
