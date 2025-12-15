export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-cream pt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-serif text-5xl md:text-6xl text-espresso mb-6 leading-tight">
            Freshly Baked.<br />Slowly Crafted.
          </h1>
          <p className="font-sans text-base text-cocoa leading-relaxed mb-8">
            Handmade breads and pastries baked fresh every morning using traditional methods and the finest natural ingredients.
          </p>
          <button className="bg-caramel text-white px-6 py-3 rounded hover:bg-caramel/90 transition-colors">
            View Menu
          </button>
        </div>
        <div className="relative">
          <div className="aspect-square bg-beige rounded-xl flex items-center justify-center">
            <span className="text-cocoa text-sm">Hero Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}