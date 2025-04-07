'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import JobApplicationForm from '../../components/JobApplicationForm';

const jobs = [
  {
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-Time',
    description: 'Work with React, Tailwind, and Next.js to build sleek interfaces.',
  },
  {
    title: 'AI/ML Engineer',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description: 'Develop AI models and solutions using Python and TensorFlow.',
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-20 relative">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-primary">Join Our Team</h1>

        {/* Back to Home button (top) */}
        <Link href="/">
          <span className="inline-block text-sm bg-primary text-black font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition mb-6">
            ⬅ Back to Home
          </span>
        </Link>

        <p className="text-gray-300 mb-12">
          Be part of our innovative and growing family at <span className="text-accent">Maverick Ignite</span>. We believe in creating opportunities and growing together.
        </p>

        <div className="grid gap-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-xl shadow-md border border-white/10">
              <h2 className="text-2xl font-semibold text-accent">{job.title}</h2>
              <p className="text-sm text-gray-300 mt-1">
                {job.location} • {job.type}
              </p>
              <p className="mt-3 text-gray-200">{job.description}</p>
              <button
                onClick={() => setSelectedJob(job.title)}
                className="mt-4 px-4 py-2 bg-primary hover:brightness-125 text-black rounded-lg transition font-semibold"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {selectedJob && (
          <div className="mt-12">
            <JobApplicationForm jobTitle={selectedJob} onClose={() => setSelectedJob(null)} />
          </div>
        )}
      </div>

      {/* Floating return button (bottom right) */}
      <Link href="/">
        <span className="fixed bottom-6 right-6 bg-primary text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform font-semibold">
          ⬅ Home
        </span>
      </Link>
    </div>
  );
}
