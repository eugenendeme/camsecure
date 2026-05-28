import Navbar from './Sub_components/Landing_sub_components/Navbar.jsx';
import Hero from './Sub_components/Landing_sub_components/Hero.jsx';
import Features from './Sub_components/Landing_sub_components/Features.jsx';
import HowItWorks from './Sub_components/Landing_sub_components/HowItWorks.jsx';
import Hardware from './Sub_components/Landing_sub_components/Hardware.jsx';
import Layers from './Sub_components/Landing_sub_components/Layers.jsx';
import Pricing from './Sub_components/Landing_sub_components/Pricing.jsx';
import Support from './Sub_components/Landing_sub_components/Support.jsx';
import FAQ from './Sub_components/Landing_sub_components/FAQ.jsx';
import Footer from './Sub_components/Landing_sub_components/Footer.jsx';

export default function LandingScreen() {
    return (
        <div className="bg-transparent text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed antialiased font-sans">
            <Navbar />
            <main className="pt-[72px]">
                <Hero />
                <Features />
                <HowItWorks />
                <Hardware />
                <Layers />
                <Pricing />
                <Support />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
