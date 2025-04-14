
import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PlacementSection from '@/components/PlacementSection';
import StudentCorner from '@/components/StudentCorner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <Hero />
      <main>
        <AboutSection />
        <PlacementSection />
        <StudentCorner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
