export default function MenuGrid() {
  const menuItems = [
    { name: "Sourdough", description: "Naturally fermented", category: "Breads" },
    { name: "Croissants", description: "Buttery and flaky", category: "Pastries" },
    { name: "Focaccia", description: "Herb-infused artisan bread", category: "Breads" },
    { name: "Danish", description: "Sweet morning pastries", category: "Pastries" },
    { name: "Baguette", description: "Classic French bread", category: "Breads" },
    { name: "Scones", description: "Traditional afternoon treats", category: "Pastries" },
    { name: "Multigrain", description: "Wholesome and hearty", category: "Breads" },
    { name: "Tarts", description: "Seasonal fruit selections", category: "Desserts" }
  ];

  return (
    <section id="menu" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-4">
            Daily Fresh Menu
          </h2>
          <p className="font-sans text-base text-cocoa leading-relaxed max-w-2xl mx-auto">
            Each item is carefully crafted using time-honored techniques and the finest ingredients.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
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
  );
}