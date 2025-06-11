import Introduction from '@/components/Introduction';
import Header from '../components/Header';
import PropertiesList from '@/components/PropertiesList';
import AddPropertySection from '@/components/AddPropertySection';

export default function Home() {
    return (
        <>
            <Header />
            <Introduction />
            <PropertiesList />
            <AddPropertySection />
        </>
    );
}
