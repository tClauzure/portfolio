import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProjectGrid from '@/components/ProjectGrid';

export default function Home() {
  return (
    <main
      style={{ backgroundColor: 'var(--background)' }}
      className='relative min-h-screen'
    >
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Contact />
    </main>
  );
}
