import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send, Heart } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const services = [
    'Persetujuan Lingkungan',
    'AMDAL',
    'SKKL',
    'UKL-UPL',
    'PKPLH',
    'SPPL'
  ];

  const quickLinks = [
    'Tentang Kami',
    'Layanan',
    'Berita',
    'Kontak',
    'FAQ',
    'Panduan'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="bg-gradient-to-br from-emerald-500 to-green-500 p-3 rounded-2xl shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all duration-300 group-hover:scale-105">
                <Leaf className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Dinas Lingkungan Hidup
                </h3>
                <p className="text-gray-400 text-sm">Kota Medan</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Berkomitmen untuk menjaga kelestarian lingkungan hidup dan memberikan 
              pelayanan terbaik kepada masyarakat Kota Medan dengan standar internasional.
            </p>
            
            <div className="space-y-3">
              {[
                { icon: MapPin, text: 'Jl. Kapten Muslim No.16, Medan' },
                { icon: Phone, text: '+62 61 4567890' },
                { icon: Mail, text: 'info@dlh.pemkomedan.go.id' }
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 text-sm text-gray-300 hover:text-emerald-400 transition-colors duration-300 group cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <span>{contact.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Layanan Kami
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Tautan Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Tetap Terhubung
            </h4>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Dapatkan update terbaru tentang program dan kebijakan lingkungan hidup langsung ke email Anda.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 hover:shadow-lg`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Enhanced Newsletter */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-200">Newsletter</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="w-full px-4 py-3 text-sm bg-gray-800/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300"
                />
                <Button 
                  size="sm" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 rounded-lg shadow-lg"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                * Kami menghormati privasi Anda dan tidak akan mengirim spam.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Footer */}
        <div className="py-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© 2024 Dinas Lingkungan Hidup Kota Medan.</span>
              <span>Dibuat dengan</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>untuk lingkungan yang lebih baik.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              {['Kebijakan Privasi', 'Syarat & Ketentuan', 'Sitemap'].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-emerald-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}