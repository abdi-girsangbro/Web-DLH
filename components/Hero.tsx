import { Button } from './ui/button';
import { ArrowRight, Shield, Users, Award, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-100/20"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full border border-emerald-200/50 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
                <span className="text-sm text-emerald-700 font-medium">Melayani dengan Dedikasi</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Dinas Lingkungan Hidup
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
                  Kota Medan
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Melayani masyarakat dalam pengelolaan dan perlindungan lingkungan hidup 
                untuk mewujudkan Kota Medan yang <span className="text-emerald-600 font-semibold">bersih, hijau, dan berkelanjutan</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 group"
              >
                Lihat Layanan
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                Hubungi Kami
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { icon: Shield, value: '6', label: 'Layanan Utama', color: 'from-emerald-500 to-green-500' },
                { icon: Users, value: '1000+', label: 'Masyarakat Terlayani', color: 'from-cyan-500 to-blue-500' },
                { icon: Award, value: '15+', label: 'Tahun Pengalaman', color: 'from-purple-500 to-pink-500' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} p-4 mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl text-gray-900 font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Image */}
          <div className="relative z-10">
            <div className="relative group">
              {/* Glowing backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-2 border border-white/20 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop"
                  alt="Lingkungan Hidup Medan"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-2 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-2xl"></div>
                
                {/* Floating badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-800">Aktif Melayani</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}