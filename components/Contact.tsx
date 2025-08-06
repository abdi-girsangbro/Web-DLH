import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  MessageCircle,
  Send,
  Star
} from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Kantor',
      content: 'Jl. Kapten Muslim No.16, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20112',
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50'
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 61 4567890',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@dlh.pemkomedan.go.id',
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Jumat: 08:00 - 16:00 WIB\nSabtu - Minggu: Tutup',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  const quickLinks = [
    { label: 'Portal Perizinan Online', href: '#', icon: ExternalLink },
    { label: 'Pengaduan Lingkungan', href: '#', icon: MessageCircle },
    { label: 'Download Formulir', href: '#', icon: ExternalLink },
    { label: 'Panduan Layanan', href: '#', icon: ExternalLink }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-100/20"></div>
        </div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full border border-emerald-200/50 backdrop-blur-sm">
            <MessageCircle className="h-4 w-4 text-emerald-600 mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-700 to-cyan-700 bg-clip-text text-transparent">
              Hubungi Kami
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Informasi Kontak
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hubungi kami untuk informasi lebih lanjut mengenai layanan atau konsultasi 
            terkait pengelolaan lingkungan hidup. Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:scale-105"
                    style={{
                      boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)'
                    }}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    <CardHeader className="relative z-10 pb-3">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} p-4 mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-lg text-gray-900">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">{info.content}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Enhanced Map */}
            <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-sm" style={{
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)'
            }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 p-2">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  Lokasi Kantor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl h-80 flex items-center justify-center overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 right-4 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"></div>
                  
                  <div className="relative text-center text-gray-600 z-10">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 p-5 shadow-lg">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Peta Lokasi Kantor</h3>
                    <p className="text-sm text-gray-600">Dinas Lingkungan Hidup Kota Medan</p>
                    <Button className="mt-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
                      Lihat di Google Maps
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Quick Links & Actions */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-sm" style={{
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)'
            }}>
              <CardHeader>
                <CardTitle className="text-xl">Akses Cepat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-between group hover:bg-gradient-to-r hover:from-emerald-50 hover:to-cyan-50 transition-all duration-300"
                      asChild
                    >
                      <a href={link.href}>
                        <span className="flex items-center">
                          <IconComponent className="mr-3 h-4 w-4 text-emerald-600" />
                          {link.label}
                        </span>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-white/70 backdrop-blur-sm" style={{
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)'
            }}>
              <CardHeader>
                <CardTitle className="text-xl">Butuh Bantuan?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tim customer service kami siap membantu Anda dengan pertanyaan atau 
                  masalah terkait layanan lingkungan hidup.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group">
                    <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Chat dengan Kami
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300 group">
                    <Phone className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Telepon Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-gradient-to-br from-emerald-50 to-cyan-50 backdrop-blur-sm" style={{
              boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.2), 0 0 0 1px rgba(255,255,255,0.5)'
            }}>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="text-emerald-800 font-semibold">Layanan 24/7</h4>
                  <p className="text-sm text-emerald-700 leading-relaxed">
                    Untuk pengaduan darurat lingkungan, hubungi hotline kami kapan saja.
                  </p>
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent">
                    0800-1234-5678
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white shadow-lg"
                  >
                    <Send className="mr-1 h-3 w-3" />
                    Hubungi Sekarang
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}