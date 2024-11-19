import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import ProjectGallery from './components/ProjectGallery';
import WhyChooseUs from './components/WhyChooseUs';
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <ProjectGallery />
      <WhyChooseUs />
      <TeamSection />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;