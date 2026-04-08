'use client';
import { useEffect, useState } from 'react';

export default function hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className='mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6'
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease' }}
    >
      {/* Halo décoratif */}
      <div
        className='pointer-events-none absolute top-1/3 left-1/4 h-96 w-96 rounded-full'
        style={{
          background:
            'radial-gradient(circle, rgba(110,231,183,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Contenu */}
      <div className='relative z-10'>
        <p
          className='mb-4 font-mono text-sm tracking-widest uppercase'
          style={{
            color: 'var(--text-accent)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
          }}
        >
          Bienvenue sur mon portfolio
        </p>

        <h1
          className='mb-4 font-mono text-5xl leading-tight font-bold md:text-7xl'
          style={{
            color: 'var(--text-primary)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
          }}
        >
          Théo <span style={{ color: 'var(--text-accent)' }}>CLAUZURE</span>
        </h1>

        <h2
          className='mb-8 font-mono text-xl md:text-2xl'
          style={{
            color: 'var(--text-muted)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.6s, transform 0.6s ease 0.6s',
          }}
        >
          Développeur Full Stack
        </h2>

        {/* CTA GitHub */}
        <button
          onClick={() => window.open('https://github.com/tClauzure', '_blank')}
          className='inline-flex items-center gap-3 rounded-full px-6 py-3 font-mono text-sm transition-all duration-300'
          style={{
            border: '1px solid var(--text-accent)',
            color: 'var(--text-accent)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'var(--text-accent)';
            e.currentTarget.style.color = 'var(--background)';
            e.currentTarget.style.boxShadow =
              '0 0 20px rgba(110, 231, 183, 0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--text-accent)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <svg
            width={18}
            height={18}
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z' />
          </svg>
          Voir mon GitHub
        </button>
      </div>
    </section>
  );
}
