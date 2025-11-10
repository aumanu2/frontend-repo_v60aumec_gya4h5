import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="font-semibold text-gray-900">MindQuest</div>
            <a
              href="mailto:mindquest@college.edu"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              mindquest@college.edu
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="rounded text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">© {year} MindQuest. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
