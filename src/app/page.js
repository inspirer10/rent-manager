'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

import Introduction from '@/components/Introduction';
import Header from '../components/Header';
import PropertiesList from '@/components/PropertiesList';
import AddPropertySection from '@/components/AddPropertySection';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

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
        <>
            <Header />
            <Introduction />
            <PropertiesList />
            <AddPropertySection />
            <FAQ />
            <Testimonials />
            <Footer />
        </>
    );
}
