import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';

export default function Home() {
  return (
    <main
      style={{ backgroundColor: 'var(--background)' }}
      className='relative min-h-screen'
    >
      <Hero />
      <ProjectGrid />
    </main>
  );
}
