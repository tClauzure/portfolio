import ProjectGrid from '@/components/ProjectGrid';

export default function Home() {
  return (
    <main
      style={{ backgroundColor: 'var(--background)' }}
      className='min-h-screen'
    >
      <ProjectGrid />
    </main>
  );
}
