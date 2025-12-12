import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, Phone, Instagram, Facebook, 
  ArrowRight, Star, Calendar, Utensils, Wine, 
  Clock, Mail, ChevronRight, ExternalLink 
} from 'lucide-react';

// --- DATA CONSTANTS ---

const BRAND_COLORS = {
  bg: '#FAF6EE', // Handmade paper
  bgSec: '#FFFDF9',
  head: '#301C0F', // Rich brown
  body: '#332E2B',
  accent: '#D4893A', // Turmeric
  accent2: '#9B3E2B' // Brick red
};

const WEEKLY_OFFERS = [
  { day: "Macher Mondays", title: "Fish & Rice Comfort", desc: "Start the week with the comfort of home. 50% off on all fish curries.", icon: <Utensils className="w-5 h-5" /> },
  { day: "Thali Tuesdays", title: "The Mahabhoj Thali", desc: "Unlimited refills on our grand Bengali thali. A royal feast.", icon: <Utensils className="w-5 h-5" /> },
  { day: "Wine Wednesdays", title: "Park Street Pour", desc: "Half-price bottles to bring back the nostalgia of old Calcutta evenings.", icon: <Wine className="w-5 h-5" /> },
  { day: "Tandoor Thursdays", title: "Kebab & Kathi Night", desc: "Chef's special kebabs and gourmet roll platters.", icon: <Utensils className="w-5 h-5" /> },
  { day: "Fizzy Fridays", title: "Gondhoraj Highballs", desc: "2-for-1 on our signature Gondhoraj Lime & Gin cocktails.", icon: <Wine className="w-5 h-5" /> },
  { day: "Weekend Adda", title: "Breakfast & Chai", desc: "Luchi Alur Dom, Fish Kochuri & endless Cha for your morning Adda.", icon: <Clock className="w-5 h-5" /> },
];

const LOCATIONS = [
  { name: "Khana Park Street", address: "Heritage View, Park Street, Kolkata", phone: "+91 33 2222 0001", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" },
  { name: "Khana Salt Lake", address: "Sector V, Near RDB, Salt Lake, Kolkata", phone: "+91 33 2222 0002", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" },
  { name: "Khana Ballygunge", address: "Sunny Park, Ballygunge, Kolkata", phone: "+91 33 2222 0003", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800" },
];

const TESTIMONIALS = [
  { text: "Finally, a place that does justice to Kolkata's heritage while being modern. The Kosha Mangsho tacos are genius.", author: "Anirban Chatterjee", location: "Salt Lake" },
  { text: "Better than the clubs. The ambience reminds me of old North Calcutta houses but with AC and great wine.", author: "Sreelekha Mitra", location: "Alipore" },
  { text: "The perfect spot for Sunday Adda. Their Gondhoraj Soufflé is the best dessert in the city.", author: "Rohan Sen", location: "Ballygunge" }
];

const MENU_PREVIEW = [
  { category: "Choto Peta (Small)", items: ["Gondhoraj Fried Chicken", "Beetroot Chop Croquettes", "Kathi Roll Sliders"] },
  { category: "Boro Peta (Large)", items: ["Slow-Cooked Kosha Mangsho", "Daab Chingri Thermidor", "Paneer Paturi"] },
  { category: "Rice & Breads", items: ["Basanti Pulao", "Radhaballavi Tacos", "Truffle Kulcha"] },
];

// --- COMPONENTS ---

const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyle = "px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 tracking-wide flex items-center justify-center gap-2";
  const variants = {
    primary: `bg-[#D4893A] text-white hover:bg-[#b06f2b] shadow-sm`,
    secondary: `border border-[#301C0F] text-[#301C0F] hover:bg-[#301C0F] hover:text-[#FAF6EE]`,
    ghost: `text-[#301C0F] hover:text-[#D4893A] underline-offset-4 hover:underline p-0`
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionTitle = ({ subtitle, title, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <span className="block text-[#D4893A] text-sm font-bold uppercase tracking-widest mb-3 font-sans">
      {subtitle}
    </span>
    <h2 className="text-4xl md:text-5xl font-serif text-[#301C0F] leading-tight">
      {title}
    </h2>
    <div className={`h-1 w-16 bg-[#D4893A] mt-6 ${centered ? 'mx-auto' : ''}`} />
  </div>
);

// --- MAIN APP COMPONENT ---

export default function KhanaAndSoul() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Handle Scroll for Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple Router
  const renderContent = () => {
    switch(activeTab) {
      case 'menu': return <MenuPage />;
      case 'locations': return <LocationsPage />;
      default: return <HomePage />;
    }
  };

  const NavLink = ({ tab, label }) => (
    <button 
      onClick={() => { setActiveTab(tab); setIsMenuOpen(false); window.scrollTo(0,0); }}
      className={`text-sm tracking-wide uppercase font-medium hover:text-[#D4893A] transition-colors ${activeTab === tab ? 'text-[#D4893A]' : 'text-[#301C0F]'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-[#D4893A] selection:text-white" style={{ backgroundColor: BRAND_COLORS.bg, color: BRAND_COLORS.body }}>
      
      {/* --- NAVIGATION --- */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#FAF6EE]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('home')}
            className="cursor-pointer z-50 flex flex-col items-center md:items-start"
          >
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#301C0F] leading-none">
              KHANA<span className="text-[#D4893A]">&</span>SOUL
            </h1>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#332E2B] mt-1 hidden md:block">
              Modern Indian Dining
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink tab="home" label="Home" />
            <NavLink tab="menu" label="Menu" />
            <NavLink tab="locations" label="Locations" />
            <button className="text-sm tracking-wide uppercase font-medium text-[#301C0F] hover:text-[#D4893A]">
              Our Story
            </button>
            <Button onClick={() => window.open('#book', '_self')}>Book Table</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#301C0F] z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#FAF6EE] z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
            <NavLink tab="home" label="Home" />
            <NavLink tab="menu" label="Menu" />
            <NavLink tab="locations" label="Locations" />
            <NavLink tab="story" label="Our Story" />
            <Button onClick={() => setIsMenuOpen(false)}>Book a Table</Button>
          </div>
        )}
      </nav>

      {/* --- PAGE CONTENT --- */}
      <main className="pt-0">
        {renderContent()}
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#301C0F] text-[#FAF6EE] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#FAF6EE]/10 pb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif">KHANA<span className="text-[#D4893A]">&</span>SOUL</h2>
              <p className="text-[#FAF6EE]/70 text-sm leading-relaxed max-w-xs">
                Inspired by India. Loved in your neighbourhood. A dining space where tradition meets the contemporary bistro culture.
              </p>
            </div>

            <div>
              <h4 className="text-[#D4893A] uppercase tracking-widest text-xs font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-[#FAF6EE]/80">
                <li><a href="#" className="hover:text-white transition">Our Menu</a></li>
                <li><a href="#" className="hover:text-white transition">Locations</a></li>
                <li><a href="#" className="hover:text-white transition">Catering & Events</a></li>
                <li><a href="#" className="hover:text-white transition">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4893A] uppercase tracking-widest text-xs font-bold mb-6">Connect</h4>
              <ul className="space-y-4 text-sm text-[#FAF6EE]/80">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4893A] uppercase tracking-widest text-xs font-bold mb-6">Newsletter</h4>
              <p className="text-[#FAF6EE]/70 text-sm mb-4">Join our family for secret recipes and exclusive invites.</p>
              <div className="flex border-b border-[#FAF6EE]/20 pb-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-transparent outline-none text-white placeholder-white/40 w-full text-sm"
                />
                <button className="text-[#D4893A] uppercase text-xs font-bold">Join</button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#FAF6EE]/40">
            <p>&copy; 2024 Khana & Soul Hospitality. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Actions */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
         <button className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
           <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
         </button>
      </div>
    </div>
  );
}

// --- SUB-PAGES ---

const HomePage = () => (
  <>
    {/* HERO SECTION */}
    <header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=2000" 
          alt="Indian Feast" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-[#FAF6EE]">
        <span className="block text-[#D4893A] text-sm md:text-base tracking-[0.3em] font-bold uppercase mb-6 animate-in slide-in-from-bottom-4 duration-700">
          Welcome to Khana & Soul
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight animate-in zoom-in-95 duration-1000">
          Calcutta Classics.<br/>Reimagined.
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 text-[#FAF6EE]/90 animate-in slide-in-from-bottom-8 duration-1000 delay-200">
          A tribute to the City of Joy. Inspired by the cabins of North Kolkata, cooked with modern flair, and served with true Bengali warmth.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-in fade-in duration-1000 delay-300">
          <Button>View Menu</Button>
          <Button variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-[#301C0F]">
            Book a Table
          </Button>
        </div>
      </div>
    </header>

    {/* WEEKLY OFFERS SECTION */}
    <section className="py-20 md:py-28 bg-[#FFFDF9]">
      <div className="container mx-auto px-6">
        <SectionTitle 
          subtitle="Weekly Rituals" 
          title="Something Special Every Day" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEEKLY_OFFERS.map((offer, idx) => (
            <div key={idx} className="group p-8 bg-white border border-[#E5E0D8] hover:border-[#D4893A]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-sm cursor-pointer">
              <div className="text-[#D4893A] mb-4 bg-[#FAF6EE] w-12 h-12 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                {offer.icon}
              </div>
              <h3 className="text-xl font-serif text-[#301C0F] mb-2">{offer.day}</h3>
              <p className="font-bold text-[#9B3E2B] text-sm mb-3 uppercase tracking-wide">{offer.title}</p>
              <p className="text-[#332E2B]/80 text-sm leading-relaxed">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* STORY SECTION */}
    <section className="py-20 bg-[#FAF6EE]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#D4893A] z-0 hidden md:block"></div>
             <img 
               src="https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=800" 
               alt="Chef plating food" 
               className="w-full h-[500px] object-cover relative z-10 shadow-xl"
             />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#D4893A] font-bold uppercase tracking-widest text-sm mb-2 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#301C0F] mb-8 leading-tight">
              From North Calcutta<br/>To Your Plate.
            </h2>
            <div className="space-y-6 text-[#332E2B]/90 leading-relaxed text-lg">
              <p>
                It started in a heritage building near College Street, 2018. We wanted to revive the fading charm of old Calcutta 'Cabins' but give them a contemporary soul. A place for 'Adda' that serves more than just tea and toast.
              </p>
              <p>
                From fresh river Hilsa to the mustard fields of Bengal, our menu celebrates the region. We blend the nostalgia of Sunday mutton curry with modern techniques, creating a dining experience that is distinctly Bengali at heart.
              </p>
            </div>
            <div className="mt-10">
              <Button variant="secondary">Read Our Full Story</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* MENU PREVIEW */}
    <section className="py-24 bg-[#301C0F] text-[#FAF6EE] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4893A] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-[#D4893A] font-bold uppercase tracking-widest text-sm mb-3 block">The Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#FAF6EE] leading-tight">
              Bengali Soul, Global Spirit.
            </h2>
          </div>
          <Button variant="primary" className="mt-6 md:mt-0">View Full Menu</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#FAF6EE]/20 pt-12">
          {MENU_PREVIEW.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-serif text-[#D4893A] mb-6">{section.category}</h3>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 group cursor-pointer">
                    <span className="w-1.5 h-1.5 bg-[#FAF6EE]/40 rounded-full group-hover:bg-[#D4893A] transition-colors"></span>
                    <span className="text-[#FAF6EE]/80 group-hover:text-white transition-colors text-lg border-b border-transparent group-hover:border-[#D4893A]/50 pb-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* LOCATIONS PREVIEW */}
    <section className="py-20 bg-[#FFFDF9]">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Visit Us" title="Find Your Local Khana" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, idx) => (
            <div key={idx} className="group bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif text-[#301C0F] mb-2">{loc.name}</h3>
                <p className="text-sm text-[#332E2B]/70 mb-4 px-4">{loc.address}</p>
                <p className="text-[#D4893A] font-medium text-sm mb-6 flex items-center justify-center gap-2">
                  <Phone size={14} /> {loc.phone}
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="secondary" className="px-4 py-2 text-xs">Book Table</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="py-20 bg-[#FAF6EE] border-t border-[#E5E0D8]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <Star className="w-8 h-8 text-[#D4893A] mx-auto mb-8 fill-current" />
        <h3 className="text-3xl md:text-4xl font-serif text-[#301C0F] mb-12 leading-snug italic">
          "{TESTIMONIALS[0].text}"
        </h3>
        <p className="font-bold uppercase tracking-widest text-sm text-[#9B3E2B]">
          {TESTIMONIALS[0].author} — {TESTIMONIALS[0].location}
        </p>
      </div>
    </section>

    {/* CATERING BANNER */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542318451-2292f3972c3d?auto=format&fit=crop&q=80&w=2000" 
          alt="Catering" 
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-[#301C0F]/90" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[#FAF6EE] mb-6">Planning a Pujo Feast?</h2>
        <p className="text-[#FAF6EE]/80 max-w-2xl mx-auto mb-10 text-lg">
          From intimate house warmings in Salt Lake to grand weddings in Alipore, we bring the Khana experience to you. Ask about our special Durga Puja catering menu!
        </p>
        <Button variant="primary">Enquire for Catering</Button>
      </div>
    </section>
  </>
);

const MenuPage = () => (
  <div className="pt-32 pb-20 bg-[#FAF6EE] min-h-screen">
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <span className="text-[#D4893A] font-bold uppercase tracking-widest text-sm mb-3 block">Eat & Drink</span>
        <h1 className="text-5xl md:text-6xl font-serif text-[#301C0F] mb-6">Our Menu</h1>
        <p className="text-[#332E2B]/70 max-w-lg mx-auto">
          We cook seasonally. This menu changes based on what our farmers bring us each week.
        </p>
      </div>

      {["Small Plates", "From The Tandoor", "Large Plates", "Sides & Breads"].map((category, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-3xl font-serif text-[#301C0F] mb-8 border-b border-[#D4893A]/30 pb-4 inline-block pr-12">
            {category}
          </h2>
          <div className="grid gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex justify-between items-start group">
                <div>
                  <h3 className="text-xl font-medium text-[#301C0F] mb-1 group-hover:text-[#D4893A] transition-colors">Dish Name Example {item}</h3>
                  <p className="text-[#332E2B]/60 text-sm">Roasted spices, coconut milk, curry leaf oil, served with crisp flatbread.</p>
                </div>
                <span className="font-serif text-lg text-[#9B3E2B]">₹450</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LocationsPage = () => (
  <div className="pt-32 pb-20 bg-[#FAF6EE] min-h-screen">
    <div className="container mx-auto px-6">
      <SectionTitle title="Our Neighbourhoods" subtitle="Find Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {LOCATIONS.map((loc, idx) => (
          <div key={idx} className="bg-white p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start">
             <img src={loc.image} className="w-full md:w-40 h-40 object-cover" alt={loc.name} />
             <div>
               <h3 className="text-2xl font-serif text-[#301C0F] mb-2">{loc.name}</h3>
               <p className="text-[#332E2B]/70 mb-4 text-sm leading-relaxed">{loc.address}</p>
               <div className="space-y-2 mb-6 text-sm">
                 <p className="flex items-center gap-2"><Clock size={14} className="text-[#D4893A]"/> Mon-Sun: 12pm - 11:30pm</p>
                 <p className="flex items-center gap-2"><Phone size={14} className="text-[#D4893A]"/> {loc.phone}</p>
                 <p className="flex items-center gap-2"><Mail size={14} className="text-[#D4893A]"/> hello@khanaandsoul.com</p>
               </div>
               <div className="flex gap-3">
                 <button className="text-xs uppercase font-bold text-[#D4893A] border-b border-[#D4893A] pb-1">Get Directions</button>
                 <button className="text-xs uppercase font-bold text-[#301C0F] border-b border-[#301C0F] pb-1">Book Table</button>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);