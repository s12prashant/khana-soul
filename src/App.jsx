export default function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
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

      {/* Hero */}
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

      {/* USP */}
      <section className="bg-beige py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-serif text-lg text-espresso mb-2">Baked Fresh</h3>
              <p className="font-sans text-sm text-cocoa leading-relaxed">Every morning at dawn</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-espresso mb-2">Natural Ingredients</h3>
              <p className="font-sans text-sm text-cocoa leading-relaxed">No preservatives or additives</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-espresso mb-2">Small Batch</h3>
              <p className="font-sans text-sm text-cocoa leading-relaxed">Limited quantities daily</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-espresso mb-2">Handcrafted</h3>
              <p className="font-sans text-sm text-cocoa leading-relaxed">Traditional artisan methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">Daily Fresh Menu</h2>
            <p className="font-sans text-base text-cocoa leading-relaxed max-w-2xl mx-auto">
              Each item is carefully crafted using time-honored techniques and the finest ingredients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Sourdough", description: "Naturally fermented", category: "Breads" },
              { name: "Croissants", description: "Buttery and flaky", category: "Pastries" },
              { name: "Focaccia", description: "Herb-infused artisan bread", category: "Breads" },
              { name: "Danish", description: "Sweet morning pastries", category: "Pastries" },
              { name: "Baguette", description: "Classic French bread", category: "Breads" },
              { name: "Scones", description: "Traditional afternoon treats", category: "Pastries" },
              { name: "Multigrain", description: "Wholesome and hearty", category: "Breads" },
              { name: "Tarts", description: "Seasonal fruit selections", category: "Desserts" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square bg-beige rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-cocoa text-xs">{item.category}</span>
                </div>
                <h4 className="font-serif text-lg text-espresso mb-1">{item.name}</h4>
                <p className="font-sans text-sm text-cocoa">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="bg-beige py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-6">Our Story</h2>
              <p className="font-sans text-base text-cocoa leading-relaxed mb-6">
                Aurora Bakery began with a simple belief: that bread should be made the way it was meant to be made. Slowly, carefully, and with respect for tradition.
              </p>
              <p className="font-sans text-base text-cocoa leading-relaxed mb-6">
                Every morning before dawn, our bakers begin the ancient ritual of mixing, kneading, and shaping dough by hand. We use only natural ingredients, allowing time and patience to create the complex flavors that define true artisan bread.
              </p>
              <p className="font-sans text-base text-cocoa leading-relaxed">
                This is more than baking—it's a craft passed down through generations, preserved in every loaf we create.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-cream rounded-xl flex items-center justify-center">
                <span className="text-cocoa text-sm">Story Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal */}
      <section id="seasonal" className="bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-6">Seasonal Specialties</h2>
          <p className="font-sans text-base text-cocoa leading-relaxed mb-12 max-w-2xl mx-auto">
            We celebrate the seasons with limited-time offerings made from the finest seasonal ingredients.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-beige p-8 rounded-xl">
              <h3 className="font-serif text-xl text-espresso mb-3">Winter Collection</h3>
              <p className="font-sans text-sm text-cocoa mb-4">
                Warm spices and rich flavors to comfort you through the cold months.
              </p>
              <ul className="font-sans text-sm text-cocoa space-y-1">
                <li>Cinnamon Swirl Bread</li>
                <li>Spiced Apple Tarts</li>
                <li>Gingerbread Cookies</li>
              </ul>
            </div>
            <div className="bg-beige p-8 rounded-xl">
              <h3 className="font-serif text-xl text-espresso mb-3">Spring Awakening</h3>
              <p className="font-sans text-sm text-cocoa mb-4">
                Fresh herbs and light flavors to welcome the new season.
              </p>
              <ul className="font-sans text-sm text-cocoa space-y-1">
                <li>Lemon Herb Focaccia</li>
                <li>Strawberry Danish</li>
                <li>Lavender Shortbread</li>
              </ul>
            </div>
            <div className="bg-beige p-8 rounded-xl">
              <h3 className="font-serif text-xl text-espresso mb-3">Summer Harvest</h3>
              <p className="font-sans text-sm text-cocoa mb-4">
                Bright, fresh flavors celebrating the abundance of summer.
              </p>
              <ul className="font-sans text-sm text-cocoa space-y-1">
                <li>Peach Galettes</li>
                <li>Tomato Basil Bread</li>
                <li>Berry Scones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-espresso py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-xl text-cream mb-4">Aurora Bakery</h3>
              <p className="font-sans text-sm text-cream/80 leading-relaxed">
                Handcrafted breads and pastries made fresh daily using traditional methods and natural ingredients.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-cream mb-4">Visit Us</h4>
              <div className="font-sans text-sm text-cream/80 space-y-2">
                <p>123 Artisan Street<br />Bakery District<br />City, State 12345</p>
                <p>Phone: (555) 123-BREAD</p>
                <p>Email: hello@aurorabakery.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-lg text-cream mb-4">Hours</h4>
              <div className="font-sans text-sm text-cream/80 space-y-1">
                <p>Tuesday - Saturday: 7:00 AM - 6:00 PM</p>
                <p>Sunday: 8:00 AM - 4:00 PM</p>
                <p>Monday: Closed</p>
              </div>
              <button className="bg-caramel text-white px-4 py-2 text-sm rounded mt-4 hover:bg-caramel/90 transition-colors">
                Order via WhatsApp
              </button>
            </div>
          </div>
          <div className="border-t border-cream/20 pt-8 text-center">
            <p className="font-sans text-sm text-cream/60">© 2024 Aurora Bakery. Crafted with care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}