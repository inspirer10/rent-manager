'use client';

import React, { useState } from 'react';

import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { FaList } from 'react-icons/fa6';

function PropertiesList() {
    const data = [
        {
            status: 'Active',
            property: 'Apartment 1',
            tenant: 'Basia Basiowa',
            rentStart: '2025-01-01',
            rentEnd: '2026-06-01',
            rentAmount: 3500,
        },
        {
            status: 'Inactive',
            property: 'Apartment 2',
            tenant: 'Kacper Kowalski',
            rentStart: '2023-01-01',
            rentEnd: '2024-06-01',
            rentAmount: 2500,
        },
        {
            status: 'Active',
            property: 'Apartment 3',
            tenant: 'Adam Nowak',
            rentStart: '2025-01-01',
            rentEnd: '2027-06-01',
            rentAmount: 4500,
        },
        {
            status: 'Inactive',
            property: 'Apartment 4',
            tenant: 'Francis Underwood',
            rentStart: '2013-01-01',
            rentEnd: '2015-06-01',
            rentAmount: 1500,
        },
    ];

    // Filter states
    const [status, setStatus] = useState('');
    const [minAmount, setMinAmount] = useState('');
    const [maxAmount, setMaxAmount] = useState('');
    const [sortDirection, setSortDirection] = useState('asc'); // 'asc' or 'desc'

    // Filtering logic
    const filteredData = data.filter((item) => {
        const matchStatus = status ? item.status === status : true;
        const matchMinAmount = minAmount
            ? item.rentAmount >= parseFloat(minAmount)
            : true;
        const matchMaxAmount = maxAmount
            ? item.rentAmount <= parseFloat(maxAmount)
            : true;
        return matchStatus && matchMinAmount && matchMaxAmount;
    });

    // Sorting logic
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortDirection === 'asc') {
            return a.rentAmount - b.rentAmount;
        } else {
            return b.rentAmount - a.rentAmount;
        }
    });

    // Toggle sort direction
    const handleSortToggle = () => {
        setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    };

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

                <FaList className='icon' aria-hidden='true' />
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

            <main className='list-container'>
                <div className='list-categories'>
                    <p>Status</p>
                    <p>Property</p>
                    <p>TENANT</p>
                    <p>RENT START DATE</p>
                    <p>RENT END DATE</p>
                    <p
                        className='sortable'
                        onClick={handleSortToggle}
                        style={{
                            cursor: 'pointer',
                            userSelect: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35em',
                        }}
                        title={`Sort by amount (${
                            sortDirection === 'asc' ? 'ascending' : 'descending'
                        })`}
                    >
                        RENT AMOUNT
                        <HiOutlineSwitchVertical
                            className={`sort-icon${
                                sortDirection === 'desc' ? ' desc' : ''
                            }`}
                            aria-label={
                                sortDirection === 'asc'
                                    ? 'Sort descending'
                                    : 'Sort ascending'
                            }
                        />
                    </p>
                </div>

                {sortedData.length === 0 ? (
                    <div className='list-position empty'>
                        <p>No properties match your filters.</p>
                    </div>
                ) : (
                    sortedData.map((item, index) => (
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
