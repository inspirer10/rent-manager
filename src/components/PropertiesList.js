'use client';

import React, { useState } from 'react';

import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { FaList } from 'react-icons/fa6';
import { useProperties } from '@/context/PropertiesContext';

function PropertiesList() {
    const { properties } = useProperties();

    // Filter states
    const [status, setStatus] = useState('');
    const [minAmount, setMinAmount] = useState('');
    const [maxAmount, setMaxAmount] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [isSortingByAmount, setIsSortingByAmount] = useState(false);
    const [sortDirection, setSortDirection] = useState('asc'); //'asc' or 'desc'

    // Filtering logic
    const filteredData = properties.filter((item) => {
        const matchStatus = status ? item.status === status : true;
        const matchType = propertyType ? item.property === propertyType : true;
        const matchMinAmount = minAmount
            ? item.rentAmount >= parseFloat(minAmount)
            : true;
        const matchMaxAmount = maxAmount
            ? item.rentAmount <= parseFloat(maxAmount)
            : true;
        return matchStatus && matchType && matchMinAmount && matchMaxAmount;
    });

    // Sorting logic
    const sortedDataX = [...filteredData].sort((a, b) => {
        if (sortDirection === 'asc') {
            return a.rentAmount - b.rentAmount;
        } else {
            return b.rentAmount - a.rentAmount;
        }
    });

    const sortedData = [...filteredData].sort((a, b) => {
        if (isSortingByAmount) {
            return sortDirection === 'asc'
                ? a.rentAmount - b.rentAmount
                : b.rentAmount - a.rentAmount;
        }

        // Domyślne sortowanie (najpierw status, potem cena)
        if (a.status === b.status) {
            return a.rentAmount - b.rentAmount;
        }
        return a.status === 'Active' ? -1 : 1;
    });

    // Toggle sort direction
    const handleSortToggle = () => {
        if (!isSortingByAmount) {
            setIsSortingByAmount(true);
            setSortDirection('asc');
        } else {
            if (sortDirection === 'asc') {
                setSortDirection('desc');
            } else {
                setIsSortingByAmount(false);
            }
        }
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
                <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    aria-label='Filter by property type'
                >
                    <option value=''>All Types</option>
                    <option value='Garage'>Garage</option>
                    <option value='Flat'>Flat</option>
                    <option value='House'>House</option>
                    <option value='Parking Space'>Parking Space</option>
                </select>
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
                        title={`${
                            isSortingByAmount
                                ? `Sorted by amount (${sortDirection})`
                                : 'Click to sort by amount'
                        }`}
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
