'use client';

export default function Navbar() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav
      className='w-full'
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-end gap-6 px-6'>
        {/* Contact */}
        <button
          onClick={scrollToContact}
          className='font-mono text-sm transition-colors duration-200'
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={e =>
            (e.currentTarget.style.color = 'var(--text-accent)')
          }
          onMouseLeave={e =>
            (e.currentTarget.style.color = 'var(--text-muted)')
          }
        >
          Contact
        </button>
        <button
          onClick={() => window.open('/CV.pdf', '_blank')}
          className='inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-sm transition-all duration-200'
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
            width={14}
            height={14}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
            <polyline points='7 10 12 15 17 10' />
            <line x1='12' y1='15' x2='12' y2='3' />
          </svg>
          Accèder à mon CV
        </button>
      </div>
    </nav>
  );
}
