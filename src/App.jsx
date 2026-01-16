import { useState } from 'react'
import { ChefHat, Phone, Mail, Instagram, Menu, X, Sparkles, Clock, Users, Star, Languages } from 'lucide-react'
import { translations } from './translations'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  
  const t = translations[language]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">Antonio's Baos</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-red-600 transition">{t.nav.menu}</button>
                <button onClick={() => scrollToSection('chef')} className="text-gray-700 hover:text-red-600 transition">{t.nav.chef}</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition">{t.nav.contact}</button>
              </div>
              
              <button
                onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-red-50 hover:bg-red-100 transition text-red-600 font-medium"
                title={language === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês'}
              >
                <Languages className="h-5 w-5" />
                <span className="text-sm">{language === 'en' ? 'PT' : 'EN'}</span>
              </button>

              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-red-600 transition text-left">{t.nav.menu}</button>
                <button onClick={() => scrollToSection('chef')} className="text-gray-700 hover:text-red-600 transition text-left">{t.nav.chef}</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition text-left">{t.nav.contact}</button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZWY0ZTQiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTMwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMzAgMzBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              {t.hero.title} <span className="text-red-600">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-xl"
              >
                {t.hero.viewMenu}
              </button>
              <button 
                onClick={() => scrollToSection('chef')}
                className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-red-600"
              >
                {t.hero.bookChef}
              </button>
            </div>
          </div>
        </section>

        <section id="menu" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t.menu.title}</h2>
              <p className="text-xl text-gray-600">{t.menu.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80" alt="Chicken Bao" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.menu.chicken.name}</h3>
                  <p className="text-gray-700 mb-4">
                    {t.menu.chicken.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">$8.50</span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80" alt="Pork Bao" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.menu.meat.name}</h3>
                  <p className="text-gray-700 mb-4">
                    {t.menu.meat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">$9.50</span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80" alt="Tofu Bao" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.menu.tofu.name}</h3>
                  <p className="text-gray-700 mb-4">
                    {t.menu.tofu.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">$7.50</span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="chef" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <Sparkles className="h-12 w-12 text-red-600" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t.chef.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.chef.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="mb-8">
                  <img src="./antonio.png" alt="Chef Antonio" className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0 shadow-xl border-4 border-white" />
                  <p className="text-center md:text-left mt-4 text-lg font-semibold text-gray-900">{t.chef.chefName}</p>
                  <p className="text-center md:text-left text-gray-600">{t.chef.chefTitle}</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.chef.customized.title}</h3>
                    <p className="text-gray-700">
                      {t.chef.customized.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.chef.flexible.title}</h3>
                    <p className="text-gray-700">
                      {t.chef.flexible.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <ChefHat className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t.chef.experience.title}</h3>
                    <p className="text-gray-700">
                      {t.chef.experience.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.chef.included.title}</h3>
                <ul className="space-y-4">
                  {t.chef.included.items.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-6 bg-red-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">{t.chef.included.startingFrom}</p>
                  <p className="text-4xl font-bold text-red-600 mb-4">$350</p>
                  <p className="text-sm text-gray-600">{t.chef.included.perEvent}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
              <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.info}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t.contact.phone}</p>
                      <p className="text-lg font-semibold text-gray-900">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t.contact.email}</p>
                      <p className="text-lg font-semibold text-gray-900">antonio@baos.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Instagram</p>
                      <p className="text-lg font-semibold text-gray-900">@antoniosbaos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.inquiry}</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.message}</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition resize-none"
                      placeholder={t.contact.form.messagePlaceholder}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-xl"
                  >
                    {t.contact.form.send}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ChefHat className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold">Antonio's Baos</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2026 Antonio's Baos. {t.footer.rights}</p>
              <p className="text-gray-400 mt-1">{t.footer.crafted}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
