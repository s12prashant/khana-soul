export default function USP() {
  const features = [
    { title: "Baked Fresh", description: "Every morning at dawn" },
    { title: "Natural Ingredients", description: "No preservatives or additives" },
    { title: "Small Batch", description: "Limited quantities daily" },
    { title: "Handcrafted", description: "Traditional artisan methods" }
  ];

  return (
    <section className="bg-beige py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="font-serif text-lg text-espresso mb-2">{feature.title}</h3>
              <p className="font-sans text-sm text-cocoa leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}