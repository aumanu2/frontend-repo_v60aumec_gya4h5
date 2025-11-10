import React from 'react';

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 bg-white">
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h2>
      <div className="mt-6 text-gray-700">{children}</div>
    </div>
  </section>
);

export const AboutSection = () => (
  <Section id="about" title="About">
    <p>
      We champion mental wellness on campus through peer support, workshops,
      and community events. Our mission is to make care and conversation
      accessible, stigma-free, and student-led.
    </p>
    <ul className="mt-4 list-disc pl-6 text-gray-700">
      <li>Peer circles and listening sessions</li>
      <li>Skill-building workshops</li>
      <li>Awareness campaigns and fun hangouts</li>
    </ul>
  </Section>
);

export const TeamSection = () => (
  <Section id="team" title="Team">
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {[1,2,3,4,5,6].map((i) => (
        <div key={i} className="rounded-xl border border-gray-200 p-4 shadow-sm">
          <div className="h-28 w-full rounded-lg bg-gray-100" aria-hidden />
          <div className="mt-3 font-medium text-gray-900">Member {i}</div>
          <div className="text-sm text-gray-600">Role</div>
        </div>
      ))}
    </div>
  </Section>
);

export const EventsSection = () => (
  <Section id="events" title="Events">
    <ol className="relative border-l border-gray-200">
      {[{date:'2025-01-20',title:'Mindful Start',desc:'Kickoff with guided meditation.'},{date:'2025-02-10',title:'Peer Support 101',desc:'Active listening basics.'}].map((e,idx) => (
        <li key={idx} className="mb-8 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-emerald-500" />
          <time className="text-xs text-gray-500">{e.date}</time>
          <h3 className="text-base font-semibold text-gray-900">{e.title}</h3>
          <p className="text-gray-700">{e.desc}</p>
        </li>
      ))}
    </ol>
  </Section>
);

export const GallerySection = () => (
  <Section id="gallery" title="Gallery">
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100" aria-hidden />
      ))}
    </div>
  </Section>
);

export default Section;
