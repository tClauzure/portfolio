'use client';

import { projects } from '@/data/projects';
import { Tags } from '@/lib/type';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({}) {
  const [activeTag, setActiveTag] = useState<Tags | null>(null);

  const filtered = activeTag
    ? projects.filter(p => p.tags.includes(activeTag))
    : projects;

  return (
    <section className='mx-auto max-w-6xl px-6 py-16'>
      <h2
        className='mb-10 font-mono text-3xl font-semibold'
        style={{ color: 'var(--text-primary)' }}
      >
        Projets
      </h2>

      {/* Filtres */}
      <div className='mb-10 flex flex-wrap gap-3'>
        <button
          onClick={() => setActiveTag(null)}
          className='rounded-full px-4 py-1.5 font-mono text-sm transition-all duration-200'
          style={{
            backgroundColor:
              activeTag === null ? 'var(--text-accent)' : 'transparent',
            color:
              activeTag === null ? 'var(--background)' : 'var(--text-muted)',
            border: `1px solid ${activeTag === null ? 'var(--text-accent)' : 'rgba(255,255,255,0.1)'}`,
            cursor: 'pointer',
          }}
        >
          Tous
        </button>

        {Object.values(Tags).map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className='rounded-full px-4 py-1.5 font-mono text-sm transition-all duration-200'
            style={{
              backgroundColor:
                activeTag === tag ? 'var(--text-accent)' : 'transparent',
              color:
                activeTag === tag ? 'var(--background)' : 'var(--text-muted)',
              border: `1px solid ${activeTag === tag ? 'var(--text-accent)' : 'rgba(255,255,255,0.1)'}`,
              cursor: 'pointer',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grille */}
      {filtered.length > 0 ? (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p
          className='py-16 text-center font-mono'
          style={{ color: 'var(--text-muted)' }}
        >
          Aucun projet pour ce filtre.
        </p>
      )}
    </section>
  );
}
