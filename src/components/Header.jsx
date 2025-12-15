export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-cream/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-serif text-xl text-espresso">Aurora</h1>
        <nav className="hidden md:flex gap-8 text-sm text-cocoa">
          <a href="#menu" className="hover:text-espresso transition-colors">Menu</a>
          <a href="#story" className="hover:text-espresso transition-colors">Story</a>
          <a href="#seasonal" className="hover:text-espresso transition-colors">Seasonal</a>
          <a href="#contact" className="hover:text-espresso transition-colors">Contact</a>
        </nav>
        <button className="bg-caramel text-white px-4 py-2 text-sm rounded hover:bg-caramel/90 transition-colors">
          Order Fresh
        </button>
      </div>
    </header>
  );
}