'use client';

import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { BsBuildingAdd } from 'react-icons/bs';

function AddPropertySection() {
    const today = new Date().toISOString().split('T')[0];
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState('');

    const [form, setForm] = useState({
        tenant: '',
        property: '',
        monthlyFee: '',
        adminFee: '',
        deposit: '',
        paymentDay: '',
    });

    //!
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Accessibility: all fields required, aria-required, aria-invalid
    const requiredProps = {
        required: true,
        'aria-required': true,
    };

    // Validation function
    const validate = () => {
        const newErrors = {};
        if (!form.tenant.trim()) newErrors.tenant = 'Tenant name is required.';
        if (!form.property) newErrors.property = 'Property type is required.';
        if (!startDate) newErrors.startDate = 'Start date is required.';
        if (!endDate) newErrors.endDate = 'End date is required.';
        if (endDate && endDate < startDate)
            newErrors.endDate = 'End date cannot be before start date.';
        if (!form.monthlyFee) newErrors.monthlyFee = 'Monthly fee is required.';
        if (!form.adminFee)
            newErrors.adminFee = 'Administrative fee is required.';
        if (!form.deposit) newErrors.deposit = 'Deposit is required.';
        if (!form.paymentDay) newErrors.paymentDay = 'Payment day is required.';
        return newErrors;
    };

    // Handle input changes
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle start date change
    const handleStartDateChange = (e) => {
        const selectedStartDate = e.target.value;
        setStartDate(selectedStartDate);

        // If end date exists and is earlier than new start date, reset it
        if (endDate && endDate < selectedStartDate) {
            setEndDate(selectedStartDate);
        }
    };

    // Handle end date change
    const handleEndDateChange = (e) => {
        const selectedEndDate = e.target.value;
        setEndDate(selectedEndDate);
    };

    // Calculate minimum end date (max between today and start date)
    const minEndDate = startDate > today ? startDate : today;

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSubmitted(false);

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            setForm({
                tenant: '',
                property: '',
                monthlyFee: '',
                adminFee: '',
                deposit: '',
                paymentDay: '',
            });
            setStartDate(today);
            setEndDate('');
        }, 1200);
    };

    return (
        <section className='addProperty-section'>
            <div className='section-header'>
                <div className='header-wrapper'>
                    <h2>Add New Rental</h2>
                    <p className='subHeading'>
                        Fill in the form to add your rental property in just a
                        few steps.
                    </p>
                </div>

                <BsBuildingAdd className='icon' aria-hidden='true' />
            </div>

            <form className='rental-form' onSubmit={handleSubmit} noValidate>
                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='tenant'>
                            Tenant{' '}
                            <span aria-hidden='true' className='required'>
                                *
                            </span>
                        </label>
                        <input
                            type='text'
                            id='tenant'
                            name='tenant'
                            placeholder='Enter tenant name'
                            value={form.tenant}
                            onChange={handleInputChange}
                            {...requiredProps}
                            aria-invalid={!!errors.tenant}
                        />
                        {errors.tenant && (
                            <div className='form-error' role='alert'>
                                {errors.tenant}
                            </div>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='property'>
                            Property{' '}
                            <span aria-hidden='true' className='required'>
                                *
                            </span>
                        </label>
                        <select
                            id='property'
                            name='property'
                            value={form.property}
                            onChange={handleInputChange}
                            {...requiredProps}
                            aria-invalid={!!errors.property}
                        >
                            <option value=''>Select property type</option>
                            <option value='flat'>Flat</option>
                            <option value='house'>House</option>
                            <option value='garage'>Garage</option>
                            <option value='parking'>Parking Space</option>
                        </select>
                        {errors.property && (
                            <div className='form-error' role='alert'>
                                {errors.property}
                            </div>
                        )}
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='start-date'>
                            Start Date{' '}
                            <span aria-hidden='true' className='required'>
                                *
                            </span>
                        </label>
                        <input
                            type='date'
                            id='start-date'
                            name='start-date'
                            value={startDate}
                            min={today}
                            onChange={handleStartDateChange}
                            {...requiredProps}
                            aria-invalid={!!errors.startDate}
                        />
                        {errors.startDate && (
                            <div className='form-error' role='alert'>
                                {errors.startDate}
                            </div>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='end-date'>
                            End Date{' '}
                            <span aria-hidden='true' className='required'>
                                *
                            </span>
                        </label>
                        <input
                            type='date'
                            id='end-date'
                            name='end-date'
                            value={endDate}
                            min={minEndDate}
                            onChange={handleEndDateChange}
                            {...requiredProps}
                            aria-invalid={!!errors.endDate}
                        />
                        {errors.endDate && (
                            <div className='form-error' role='alert'>
                                {errors.endDate}
                            </div>
                        )}
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='monthly-fee'>
                            Monthly Fee (PLN){' '}
                            <span aria-hidden='true' className='required'>
                                *
                            </span>
                        </label>
                        <input
                            type='number'
                            id='monthly-fee'
                            name='monthlyFee'
                            min='0'
                            step='1'
                            placeholder='Amount in PLN'
                            value={form.monthlyFee}
                            onChange={handleInputChange}
                            {...requiredProps}
                            aria-invalid={!!errors.monthlyFee}
                            pattern='[0-9]*'
                        />
                        {errors.monthlyFee && (
                            <div className='form-error' role='alert'>
                                {errors.monthlyFee}
                            </div>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='admin-fee'>
                            Administrative Fee (PLN){' '}
                            <span aria-hidden='true' className='required'>
                                *
                            </span>
                        </label>
                        <input
                            type='number'
                            id='admin-fee'
                            name='adminFee'
                            min='0'
                            step='1'
                            placeholder='Amount in PLN'
                            value={form.adminFee}
                            onChange={handleInputChange}
                            {...requiredProps}
                            aria-invalid={!!errors.adminFee}
                            pattern='[0-9]*'
                        />
                        {errors.adminFee && (
                            <div className='form-error' role='alert'>
                                {errors.adminFee}
                            </div>
                        )}
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='deposit'>
                            Deposit (PLN){' '}
                            <span aria-hidden='true' className='required'>
                                *
                            </span>
                        </label>
                        <input
                            type='number'
                            id='deposit'
                            name='deposit'
                            min='0'
                            step='1'
                            placeholder='Amount in PLN'
                            value={form.deposit}
                            onChange={handleInputChange}
                            {...requiredProps}
                            aria-invalid={!!errors.deposit}
                            pattern='[0-9]*'
                        />
                        {errors.deposit && (
                            <div className='form-error' role='alert'>
                                {errors.deposit}
                            </div>
                        )}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='payment-day'>
                            Payment Day{' '}
                            <span aria-hidden='true' className='required'>
                                *
                            </span>
                        </label>
                        <select
                            id='payment-day'
                            name='paymentDay'
                            value={form.paymentDay}
                            onChange={handleInputChange}
                            {...requiredProps}
                            aria-invalid={!!errors.paymentDay}
                        >
                            <option value=''>Select day</option>
                            {[...Array(31)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                        {errors.paymentDay && (
                            <div className='form-error' role='alert'>
                                {errors.paymentDay}
                            </div>
                        )}
                    </div>
                </div>
                <button
                    type='submit'
                    className='submit-btn'
                    disabled={submitting}
                    aria-busy={submitting}
                >
                    {submitting ? (
                        <span className='spinner' aria-label='Adding...'></span>
                    ) : (
                        <>
                            Add Rental <FaArrowRightLong className='icon' />
                        </>
                    )}
                </button>
                {submitted && (
                    <div className='form-success' role='status'>
                        Rental added successfully!
                    </div>
                )}
            </form>
        </section>
    );
}

export default AddPropertySection;
