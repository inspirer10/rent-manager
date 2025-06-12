'use client';

import React, { useState } from 'react';

import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { FaList } from 'react-icons/fa6';

function PropertiesList() {
    const data = [
        {
            status: 'Inactive',
            property: 'Apartment 1',
            tenant: 'Kacper Kowalski',
            rentStart: '2023-01-01',
            rentEnd: '2024-06-01',
            rentAmount: 2500,
        },
        {
            status: 'Active',
            property: 'Apartment 2',
            tenant: 'Basia Basiowa',
            rentStart: '2025-01-01',
            rentEnd: '2026-06-01',
            rentAmount: 3500,
        },
        {
            status: 'Active',
            property: 'Apartment 3',
            tenant: 'Adam Nowak',
            rentStart: '2025-01-01',
            rentEnd: '2027-06-01',
            rentAmount: 4500,
        },
    ];

    // Filter states
    const [status, setStatus] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [minAmount, setMinAmount] = useState('');
    const [maxAmount, setMaxAmount] = useState('');

    // Filtering logic
    const filteredData = data.filter((item) => {
        const matchStatus = status ? item.status === status : true;
        const matchStart = startDate ? item.rentStart >= startDate : true;
        const matchEnd = endDate ? item.rentEnd <= endDate : true;
        const matchMinAmount = minAmount
            ? item.rentAmount >= parseFloat(minAmount)
            : true;
        const matchMaxAmount = maxAmount
            ? item.rentAmount <= parseFloat(maxAmount)
            : true;
        return (
            matchStatus &&
            matchStart &&
            matchEnd &&
            matchMinAmount &&
            matchMaxAmount
        );
    });

    return (
        <section className='propertiesList-section' id='propertiesList'>
            {/*
            <p className='subHeading'>
                Keep track of your apartments, houses, and garages with ease
            </p>
            <p className='subHeading'>
                Simplify your rental management—view all properties at a glance
            </p>
            */}

            <div className='section-header'>
                <div className='header-wrapper'>
                    <h2>Properties List</h2>
                    <p className='subHeading'>
                        A clear, concise list of your current rental properties.
                    </p>
                </div>

                <FaList className='icon' />
            </div>

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

                {/* FILTER CONTROLS */}
                <div className='filters-row'>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        aria-label='Filter by status'
                    >
                        <option value=''>All Statuses</option>
                        <option value='Active'>Active</option>
                        <option value='Inactive'>Inactive</option>
                    </select>
                    <input
                        type='date'
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        aria-label='Filter by rent start date'
                        placeholder='Start date'
                    />
                    <input
                        type='date'
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        aria-label='Filter by rent end date'
                        placeholder='End date'
                    />
                    <input
                        type='number'
                        value={minAmount}
                        onChange={(e) => setMinAmount(e.target.value)}
                        aria-label='Min rent amount'
                        placeholder='Min amount'
                    />
                    <input
                        type='number'
                        value={maxAmount}
                        onChange={(e) => setMaxAmount(e.target.value)}
                        aria-label='Max rent amount'
                        placeholder='Max amount'
                    />
                </div>

                {/*   {data.map((item, index) => (
                    <div className='list-position'>{index}</div>
                ))}  */}

                {filteredData.length === 0 ? (
                    <div className='list-position empty'>
                        <p>No properties match your filters.</p>
                    </div>
                ) : (
                    filteredData.map((item, index) => (
                        <div className='list-position' key={index}>
                            <p>{item.status}</p>
                            <p>{item.property}</p>
                            <p>{item.tenant}</p>
                            <p>
                                {item.rentStart.split('-').reverse().join('/')}
                            </p>
                            <p>{item.rentEnd.split('-').reverse().join('/')}</p>
                            <p>{item.rentAmount.toFixed(2)}</p>
                        </div>
                    ))
                )}
            </main>
        </section>
    );
}

export default PropertiesList;
