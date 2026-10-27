import React, { useState } from 'react';
import { translations } from './i18n/translations';
import { Globe, ShieldCheck, Truck, Award, MessageCircle, Send, ShoppingBag, Menu, X, ChevronRight, Edit3 } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'fr' | 'en' | 'pt' | 'ar' | 'es'>('fr');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedJacket, setSelectedJacket] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<string>("jacket_pack");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = translations[lang];
  const isRtl = lang === 'ar';

  const jackets = [
    { id: 1, name: "Brésil / Brasil", image: "jackets/1.png", category: "Unisex", price: "90 €", desc: "Design vert et or, carte du Brésil au dos." },
    { id: 2, name: "Mali", image: "jackets/2.png", category: "Unisex", price: "90 €", desc: "Drapeau tricolore vertical, finition premium." },
    { id: 3, name: "Suisse / Switzerland", image: "jackets/aa.png", category: "Unisex", price: "90 €", desc: "Rouge éclatant, croix suisse intégrée." },
    { id: 4, name: "Pakistan / پاکستان", image: "jackets/ara.png", category: "Unisex", price: "90 €", desc: "Croissant et étoile, vert et blanc d'élite." },
    { id: 5, name: "Australie / Australia", image: "jackets/aus.png", category: "Unisex", price: "90 €", desc: "Bleu océan, constellation de la Croix du Sud." },
    { id: 6, name: "Cameroun", image: "jackets/c.png", category: "Unisex", price: "90 €", desc: "Vert, rouge, jaune avec étoile dorée centrale." },
    { id: 7, name: "RD Congo", image: "jackets/congo.png", category: "Unisex", price: "90 €", desc: "Bleu royal traversé d'or et de rouge." },
    { id: 8, name: "Cabo Verde (Face)", image: "jackets/cv.png", category: "Unisex", price: "90 €", desc: "Bande rouge et blanche, cercle d'étoiles dorées." },
    { id: 9, name: "Cabo Verde (Dos)", image: "jackets/cvv.png", category: "Unisex", price: "90 €", desc: "Archipel doré au dos, élégance atlantique." },
  ];

  return (
    <div className={`min-h-screen bg-[#070707] text-gray-100 bg-cosmic-grid ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-md border-b gold-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="logo.png" alt="DFLAG Logo" className="h-12 w-auto object-contain rounded-lg gold-glow" />
            <div>
              <span className="text-2xl font-black tracking-wider gold-gradient-text">DFLAG</span>
              <span className="block text-[10px] tracking-widest text-amber-400 uppercase">World Elite Fashion</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#catalog" className="text-sm font-medium hover:text-amber-400 transition">{t.catalogTitle}</a>
            <a href="#features" className="text-sm font-medium hover:text-amber-400 transition">Prestige</a>
            <a href="#order" className="text-sm font-medium hover:text-amber-400 transition">{t.ctaOrder}</a>

            <div className="flex items-center space-x-2 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
              <Globe className="w-4 h-4 text-amber-400" />
              {(['fr', 'en', 'pt', 'ar', 'es'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs uppercase px-1.5 py-0.5 rounded transition ${lang === l ? 'bg-amber-500 text-black font-bold' : 'text-gray-400 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="https://wa.me/33668829932?text=Bonjour%2C%20je%20souhaite%20commander%20une%20veste%20DFLAG%20(90€)%20ou%20un%20stylo%20textile%20(5€)."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              aria-label="Sélectionner la langue"
              className="bg-neutral-900 text-amber-400 text-xs px-2 py-1 rounded border border-neutral-700"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="pt">PT</option>
              <option value="ar">AR</option>
              <option value="es">ES</option>
            </select>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu" className="text-gray-300">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0B0B] border-b border-neutral-800 px-4 pt-2 pb-4 space-y-3">
            <a href="#catalog" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium">{t.catalogTitle}</a>
            <a href="#order" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium">{t.ctaOrder}</a>
            <a href="https://wa.me/33668829932?text=Bonjour%2C%20je%20souhaite%20commander%20chez%20DFLAG." target="_blank" rel="noopener noreferrer" className="block py-2 text-sm font-bold text-emerald-400">WhatsApp Direct</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border gold-border text-amber-400 text-xs font-semibold uppercase tracking-widest mb-6">
            {t.brandSubtitle}
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto">
            {t.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#catalog"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold px-8 py-4 rounded-full shadow-lg flex items-center justify-center space-x-2 transition"
            >
              <span>{t.ctaExplore}</span>
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#order"
              className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 border gold-border text-amber-400 font-bold px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>{t.ctaOrder}</span>
            </a>
          </div>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section id="catalog" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 gold-gradient-text">{t.catalogTitle}</h2>
          <p className="text-gray-400 max-w-xl mx-auto">{t.catalogSubtitle}</p>
        </div>

        <div className="mb-12 bg-neutral-900/80 border gold-border p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gold-glow">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="p-3 bg-amber-500/20 rounded-2xl border gold-border">
              <Edit3 className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{t.penPrice}</h3>
              <p className="text-sm text-gray-400">Caneta especial permanente para personalizar o teu casaco e vestuários com assinatura única.</p>
            </div>
          </div>
          <a
            href="#order"
            onClick={() => setSelectedOption("pen_only")}
            className="bg-amber-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-amber-400 transition whitespace-nowrap"
          >
            Encomendar Caneta (5 €)
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jackets.map((j) => (
            <div key={j.id} className="group bg-neutral-900/70 rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-500/50 transition duration-300 flex flex-col">
              <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden flex items-center justify-center p-4">
                <img src={j.image} alt={j.name} className="object-contain h-full w-full group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full border gold-border">
                  {j.price}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{j.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{j.desc}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedJacket(j);
                    setSelectedOption("jacket_pack");
                    const element = document.getElementById('order');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black font-bold py-3 rounded-xl border gold-border transition flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Encomendar (90 €)</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ORDER FORM SECTION */}
      <section id="order" className="py-20 bg-neutral-950/80 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3 gold-gradient-text">{t.formTitle}</h2>
            <p className="text-gray-400">{t.formDesc}</p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-950/40 border border-emerald-500/50 p-8 rounded-2xl text-center space-y-4">
              <h3 className="text-2xl font-bold text-emerald-400">Commande Transmise !</h3>
              <p className="text-gray-300">{t.successMsg}</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 bg-amber-500 text-black font-bold px-6 py-2 rounded-full"
              >
                Nouvelle commande
              </button>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/dflagcontact@gmail.com"
              method="POST"
              onSubmit={() => setIsSubmitted(true)}
              className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 space-y-6 shadow-2xl"
            >
              <div>
                <label className="block text-xs uppercase tracking-wider text-amber-400 mb-2 font-bold">{t.productLabel}</label>
                <select
                  name="product_selection"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-full bg-neutral-950 border gold-border rounded-xl px-4 py-3 text-amber-300 font-bold focus:outline-none"
                >
                  <option value="jacket_pack">{t.packPrice}</option>
                  <option value="jacket_only">{t.jacketPrice}</option>
                  <option value="pen_only">{t.penPrice}</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">{t.namePlaceholder}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex. Jean Dupont"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">{t.emailPlaceholder}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jean@example.com"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">{t.phonePlaceholder}</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+33 6 00 00 00 00"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">{t.countryLabel}</label>
                  <input
                    type="text"
                    name="country_flag"
                    defaultValue={selectedJacket ? selectedJacket.name : ''}
                    placeholder="Ex. Brésil / Cabo Verde / France"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">{t.sizeLabel}</label>
                  <select
                    name="size"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">{t.genderLabel}</label>
                  <select
                    name="category"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Homme">{t.men}</option>
                    <option value="Femme">{t.women}</option>
                    <option value="Enfant">{t.kids}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">{t.colorLabel}</label>
                  <input
                    type="text"
                    name="color"
                    placeholder="Ex. Couleurs officielles"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">{t.addressPlaceholder}</label>
                <textarea
                  name="address"
                  rows={3}
                  required
                  placeholder="Rue, Ville, Code Postal, Pays"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-400 hover:from-amber-500 hover:to-amber-300 text-black font-extrabold py-4 rounded-xl shadow-xl flex items-center justify-center space-x-2 transition"
              >
                <Send className="w-5 h-5" />
                <span>{t.submitBtn}</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/33668829932?text=Bonjour%2C%20je%20souhaite%20commander%20une%20veste%20DFLAG%20(90€)%20ou%20un%20stylo%20textile%20(5€)."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 gold-glow animate-bounce"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* FOOTER */}
      <footer className="py-12 bg-black border-t border-neutral-900 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <img src="logo.png" alt="Logo" className="h-8 w-auto opacity-75" />
            <span className="font-bold text-gray-300">DFLAG</span>
          </div>
          <p>{t.footerText}</p>
          <div className="text-xs text-amber-500/80">
            Contact Direct: dflagcontact@gmail.com | +33 6 68 82 99 32
          </div>
        </div>
      </footer>

    </div>
  );
}