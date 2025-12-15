export default function Story() {
  return (
    <section id="story" className="bg-beige py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso mb-6">
              Our Story
            </h2>
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
  );
}