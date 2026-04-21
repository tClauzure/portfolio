'use client';

import { Project } from '@/lib/type';
import { useState } from 'react';
import Image from 'next/image';

type Status = 'idle' | 'error';

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const [urlStatus, setUrlStatus] = useState<Status>('idle');

  const handleProjectUrl = () => {
    if (project.url === undefined) {
      setUrlStatus('error');
      setTimeout(() => setUrlStatus('idle'), 1500);
      return;
    }
    window.open(project.url, '_blank');
  };

  return (
    <div className='flex flex-col'>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleProjectUrl}
        className='glass w-full overflow-hidden text-left transition-all duration-300'
        style={{
          border: hovered
            ? '1px solid var(--text-accent)'
            : '1px solid rgba(255,255,255,0.08)',
          boxShadow: hovered ? '0 0 20px rgba(110, 231, 183, 0.15)' : 'none',
          cursor: 'pointer',
        }}
      >
        {/* image */}
        <div className='relative h-48 w-full overflow-hidden'>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className='object-cover transition-transform duration-500'
            style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          />
        </div>

        {/* Content */}
        <div className='p-5'>
          <h3
            className='mb-2 font-mono text-lg font-semibold transition-colors duration-300'
            style={{
              color: hovered ? 'var(--text-accent)' : 'var(--text-primary)',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{ color: 'var(--text-muted)' }}
            className='text-sm leading-relaxed'
          >
            {project.description}
          </p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {project.tags.map(tag => (
              <span
                key={tag}
                className='rounded-full px-2 py-1 font-mono text-xs'
                style={{
                  color: 'var(--text-accent)',
                  border: '1px solid var(--text-accent)',
                  opacity: 0.7,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>
      {/* Feedback */}
      {urlStatus === 'error' && (
        <p
          className='mt-2 text-center font-mono text-sm'
          style={{ color: '#f87171', height: '20px' }}
        >
          ✗ Projet non déployé.
        </p>
      )}
    </div>
  );
}
