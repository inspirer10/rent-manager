import React from 'react';

function AddPropertySection() {
    return (
        <section className='addProperty-section'>
            <h2>Add Property</h2>
            <p className='subHeading'>
                Fill in the form to add your rental property in just a few
                steps.
            </p>

            <button>Add Property</button>

            <h5>New position</h5>

            <label htmlFor=''>
                NAJEMCA
                <input type='text' />
            </label>

            <label htmlFor=''>
                TYP NIERUCHOMOŚCI
                <select name='' id=''>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </label>

            <label htmlFor=''>
                POCZĄTEK
                <input type='date' />
            </label>

            <label htmlFor=''>
                koniec
                <input type='date' />
            </label>

            <label htmlFor=''>
                Kaucja
                <input type='number' />
            </label>

            <label htmlFor=''>
                Opłata miesięczna
                <input type='number' />
            </label>

            <label htmlFor=''>
                Opłata administracyjna
                <input type='number' />
            </label>
        </section>
    );
}

export default AddPropertySection;
