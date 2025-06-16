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
            <div className='waitlist-badge' aria-label='Join waitlist'>
                <div className='waitlist-avatars'>
                    <Image
                        src='/avatars/person1.jpg'
                        alt='User 1'
                        height={50}
                        width={50}
                    />
                    <Image
                        src='/avatars/person2.jpg'
                        alt='User 2'
                        height={50}
                        width={50}
                    />
                    <Image
                        src='/avatars/person5.jpg'
                        alt='User 3'
                        height={50}
                        width={50}
                    />
                </div>
                <p>Join 3 million other satisfied users</p>
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

            <div className='thumbnails-wrapper'>
                {cardsData.map(({ image, text }, index) => (
                    <div className='card' key={index}>
                        <Image src={image} alt='' height={300} width={300} />
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Introduction;
