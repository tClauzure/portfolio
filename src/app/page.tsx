export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--color-background)" }} className="min-h-screen p-12">
      <h1 className="text-(--color-text-accent) text-4xl">Titre H1</h1>
      <p className="text-(--color-text-muted) mt-4">Texte secondaire</p>
      <div className="glass mt-8 p-6 w-64">
        Carte glassmorphism
      </div>
    </main>
  );
}
