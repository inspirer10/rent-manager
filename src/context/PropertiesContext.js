'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Akcje
const ACTIONS = {
    SET_PROPERTIES: 'SET_PROPERTIES',
    ADD_PROPERTY: 'ADD_PROPERTY',
    DELETE_PROPERTY: 'DELETE_PROPERTY',
};

// Domyślne dane
const defaultProperties = [
    {
        id: 1,
        status: 'Active',
        property: 'Parking Space',
        tenant: 'Basia Basiowa',
        rentStart: '2025-01-01',
        rentEnd: '2026-06-01',
        rentAmount: 500,
    },
    {
        id: 2,
        status: 'Inactive',
        property: 'Flat',
        tenant: 'Kacper Kowalski',
        rentStart: '2023-01-01',
        rentEnd: '2024-06-01',
        rentAmount: 2500,
    },
    {
        id: 3,
        status: 'Active',
        property: 'House',
        tenant: 'Adam Nowak',
        rentStart: '2025-01-01',
        rentEnd: '2027-06-01',
        rentAmount: 4500,
    },
    {
        id: 4,
        status: 'Inactive',
        property: 'Garage',
        tenant: 'Francis Underwood',
        rentStart: '2013-01-01',
        rentEnd: '2015-06-01',
        rentAmount: 1500,
    },
];

// Stan początkowy
const initialState = {
    properties: [],
};

// Reducer
function propertiesReducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_PROPERTIES:
            return {
                ...state,
                properties: action.payload,
            };

        case ACTIONS.ADD_PROPERTY:
            return {
                ...state,
                properties: [
                    ...state.properties,
                    {
                        ...action.payload,
                        id: Date.now(),
                        monthlyFee: Number(action.payload.monthlyFee),
                        administrativeFee: Number(
                            action.payload.administrativeFee
                        ),
                        rentAmount:
                            Number(action.payload.monthlyFee) +
                            Number(action.payload.administrativeFee),
                    },
                ],
            };

        case ACTIONS.DELETE_PROPERTY:
            return {
                ...state,
                properties: state.properties.filter(
                    (property) => property.id !== action.payload
                ),
            };

        default:
            return state;
    }
}

// Context
const PropertiesContext = createContext();

// Provider
export function PropertiesProvider({ children }) {
    const [state, dispatch] = useReducer(propertiesReducer, initialState);

    // Inicjalizacja z localStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('renthub-properties');
            if (saved) {
                try {
                    const parsedData = JSON.parse(saved);
                    dispatch({
                        type: ACTIONS.SET_PROPERTIES,
                        payload: parsedData,
                    });
                } catch (error) {
                    console.error('Error parsing localStorage data:', error);
                    dispatch({
                        type: ACTIONS.SET_PROPERTIES,
                        payload: defaultProperties,
                    });
                }
            } else {
                dispatch({
                    type: ACTIONS.SET_PROPERTIES,
                    payload: defaultProperties,
                });
            }
        }
    }, []);

    // Zapisywanie do localStorage przy każdej zmianie
    useEffect(() => {
        if (state.properties.length > 0 && typeof window !== 'undefined') {
            localStorage.setItem(
                'renthub-properties',
                JSON.stringify(state.properties)
            );
        }
    }, [state.properties]);

    // Action creators
    const actions = {
        addProperty: (property) => {
            dispatch({ type: ACTIONS.ADD_PROPERTY, payload: property });
        },
        deleteProperty: (id) => {
            dispatch({ type: ACTIONS.DELETE_PROPERTY, payload: id });
        },
    };

    return (
        <PropertiesContext.Provider value={{ ...state, ...actions }}>
            {children}
        </PropertiesContext.Provider>
    );
}

// Custom hook
export function useProperties() {
    const context = useContext(PropertiesContext);
    if (!context) {
        throw new Error('useProperties must be used within PropertiesProvider');
    }
    return context;
}
