import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import { AboutSection, TeamSection, EventsSection, GallerySection } from './components/Sections.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main id="main">
        <Hero />
        <AboutSection />
        <TeamSection />
        <EventsSection />
        <GallerySection />
        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-4 text-gray-700">
              Email us at{' '}
              <a href="mailto:mindquest@college.edu" className="text-emerald-700 underline underline-offset-4">
                mindquest@college.edu
              </a>
              . Follow us on{' '}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-emerald-700 underline underline-offset-4">Instagram</a>
              {' '}and{' '}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-emerald-700 underline underline-offset-4">LinkedIn</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
