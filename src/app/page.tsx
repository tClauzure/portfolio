export default function Home() {
  return (
    <main
      style={{ backgroundColor: 'var(--color-background)' }}
      className='min-h-screen p-12'
    >
      <h1 className='text-4xl text-(--color-text-accent)'>Titre H1</h1>
      <p className='mt-4 text-(--color-text-muted)'>Texte secondaire</p>
      <div className='glass mt-8 w-64 p-6'>Carte glassmorphism</div>
    </main>
  );
}
