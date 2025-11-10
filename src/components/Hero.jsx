import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            MindQuest — your campus mental wellness community
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-600">
            A safe, supportive space to learn, share, and grow together. Join
            events, meet mentors, and explore behind-the-scenes moments that make
            our club special.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#about"
              className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              About Us
            </a>
            <a
              href="#events"
              className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
