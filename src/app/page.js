'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

import Header from '../components/Header';
import Introduction from '@/components/Introduction';
import HowItWorks from '@/components/HowItWorks';
import PropertiesList from '@/components/PropertiesList';
import AddPropertySection from '@/components/AddPropertySection';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { PropertiesProvider } from '@/context/PropertiesContext';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <PropertiesProvider>
            <Header />
            <Introduction />
            <HowItWorks />
            <PropertiesList />
            <AddPropertySection />
            <FAQ />
            <Testimonials />
            <Footer />
        </PropertiesProvider>
    );
}
