export default function Seasonal() {
  return (
    <section id="seasonal" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-6">
          Seasonal Specialties
        </h2>
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
  );
}