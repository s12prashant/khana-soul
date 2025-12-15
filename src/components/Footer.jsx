export default function Footer() {
  return (
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
          <p className="font-sans text-sm text-cream/60">
            © 2024 Aurora Bakery. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}