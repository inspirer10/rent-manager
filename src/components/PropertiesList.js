import React from 'react';

import { HiOutlineSwitchVertical } from 'react-icons/hi';

function PropertiesList() {
    const data = [{}, {}, {}];

    return (
        <section className='propertiesList-section' id='propertiesList'>
            <h2>Properties List</h2>
            {/*
            <p className='subHeading'>
                Keep track of your apartments, houses, and garages with ease
            </p>
            <p className='subHeading'>
                Simplify your rental management—view all properties at a glance
            </p>
            */}

            <p className='subHeading'>
                A clear, concise list of your current rental properties.
            </p>
            <main className='list-container'>
                <div className='list-categories'>
                    <p>Status</p>
                    <p>Property</p>
                    <p>TENANT</p>
                    <p>RENT START DATE</p>
                    <p>RENT END DATE</p>
                    <p>
                        RENT AMOUNT
                        <HiOutlineSwitchVertical className='icon' />
                    </p>
                </div>

                {/*   {data.map((item, index) => (
                    <div className='list-position'>{index}</div>
                ))}  */}

                <div className='list-position'>
                    <p>Active</p>
                    <p>Apartment 1</p>
                    <p>Kacper Kowalski</p>
                    <p>01/01/2023</p>
                    <p>01/06/2024</p>
                    <p>2500.00</p>
                </div>
                <div className='list-position'>
                    <p>Active</p>
                    <p>Apartment 1</p>
                    <p>Kacper Kowalski</p>
                    <p>01/01/2023</p>
                    <p>01/06/2024</p>
                    <p>2500.00</p>
                </div>
                <div className='list-position'>
                    <p>Active</p>
                    <p>Apartment 1</p>
                    <p>Kacper Kowalski</p>
                    <p>01/01/2023</p>
                    <p>01/06/2024</p>
                    <p>2500.00</p>
                </div>
            </main>
        </section>
    );
}

export default PropertiesList;
