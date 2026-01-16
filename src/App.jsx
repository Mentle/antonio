import { useState } from 'react'
import { ChefHat, Phone, Mail, Instagram, Menu, X, Sparkles, Clock, Users, Star } from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-red-600 transition">Menu</button>
              <button onClick={() => scrollToSection('chef')} className="text-gray-700 hover:text-red-600 transition">Private Chef</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition">Contact</button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-red-600 transition text-left">Menu</button>
                <button onClick={() => scrollToSection('chef')} className="text-gray-700 hover:text-red-600 transition text-left">Private Chef</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-600 transition text-left">Contact</button>
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
              Authentic <span className="text-red-600">Asian Baos</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Handcrafted steamed buns filled with love and flavor. Experience the art of traditional bao-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-xl"
              >
                View Menu
              </button>
              <button 
                onClick={() => scrollToSection('chef')}
                className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-red-600"
              >
                Book Private Chef
              </button>
            </div>
          </div>
        </section>

        <section id="menu" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Signature Baos</h2>
              <p className="text-xl text-gray-600">Fluffy steamed buns with incredible fillings</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                  <div className="text-8xl">🍗</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Chicken Bao</h3>
                  <p className="text-gray-700 mb-4">
                    Tender marinated chicken with crispy vegetables, hoisin sauce, and fresh herbs in a pillowy soft bun.
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
                <div className="h-64 bg-gradient-to-br from-red-200 to-pink-300 flex items-center justify-center">
                  <div className="text-8xl">🥩</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Meat Bao</h3>
                  <p className="text-gray-700 mb-4">
                    Slow-braised pork belly with pickled vegetables, scallions, and our secret glaze. A customer favorite!
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
                <div className="h-64 bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center">
                  <div className="text-8xl">🥬</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Tofu Bao</h3>
                  <p className="text-gray-700 mb-4">
                    Crispy tofu with Asian slaw, sesame seeds, and spicy mayo. Perfect for vegetarians and vegans alike!
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
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Private Chef Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bring the authentic taste of Asian cuisine to your home. Perfect for dinner parties, special occasions, or intimate gatherings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Menus</h3>
                    <p className="text-gray-700">
                      Tailored menus designed around your preferences, dietary needs, and occasion. From baos to full multi-course Asian feasts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-700">
                      Available for lunch, dinner, or weekend events. Book Antonio for intimate dinners or parties up to 20 guests.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <ChefHat className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Experience</h3>
                    <p className="text-gray-700">
                      Years of experience in Asian cuisine with a passion for authentic flavors and modern presentation techniques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Menu planning consultation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Fresh ingredient sourcing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">On-site preparation and cooking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Beautiful plating and presentation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700">Kitchen cleanup</span>
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-red-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-2">Starting from</p>
                  <p className="text-4xl font-bold text-red-600 mb-4">$350</p>
                  <p className="text-sm text-gray-600">per event (4-6 guests)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">Ready to order or book a private chef experience?</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="text-lg font-semibold text-gray-900">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows="4" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your order or event..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg hover:shadow-xl"
                  >
                    Send Message
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
              <p className="text-gray-400">© 2026 Antonio's Baos. All rights reserved.</p>
              <p className="text-gray-400 mt-1">Crafted with ❤️ and authentic flavors</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
