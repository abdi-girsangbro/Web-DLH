import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Target, Eye, Users, Award, Leaf } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Misi Kami',
      description: 'Melindungi dan melestarikan lingkungan hidup Kota Medan melalui pengelolaan yang berkelanjutan.',
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50'
    },
    {
      icon: Eye,
      title: 'Visi Kami',
      description: 'Menjadi dinas terdepan dalam pengelolaan lingkungan hidup yang bersih dan berkelanjutan.',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50'
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Didukung oleh tim ahli lingkungan yang berpengalaman dan berdedikasi tinggi.',
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50'
    },
    {
      icon: Award,
      title: 'Standar Tinggi',
      description: 'Menerapkan standar internasional dalam setiap layanan pengelolaan lingkungan.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50/20 to-cyan-50/30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full border border-emerald-200/50 backdrop-blur-sm">
            <Leaf className="h-4 w-4 text-emerald-600 mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-700 to-cyan-700 bg-clip-text text-transparent">
              Tentang Kami
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Dinas Lingkungan Hidup
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Kota Medan
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Berkomitmen untuk menjaga kelestarian lingkungan hidup dan memberikan pelayanan terbaik 
            kepada masyarakat Kota Medan dalam bidang pengelolaan lingkungan hidup.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <h3 className="text-3xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Melayani dengan Integritas dan Profesionalisme
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Dinas Lingkungan Hidup Kota Medan adalah institusi pemerintah yang bertanggung jawab 
                dalam pengelolaan, perlindungan, dan pelestarian lingkungan hidup di wilayah Kota Medan.
              </p>
              <p className="text-lg">
                Kami berkomitmen untuk memberikan pelayanan prima dalam berbagai aspek pengelolaan 
                lingkungan hidup, mulai dari perizinan, pengawasan, hingga pembinaan kepada masyarakat 
                dan dunia usaha.
              </p>
              <p className="text-lg">
                Dengan dukungan teknologi terkini dan tim profesional yang berpengalaman, kami terus 
                berinovasi untuk memberikan layanan yang lebih baik dan efisien.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { number: '99%', label: 'Kepuasan Masyarakat' },
                { number: '24/7', label: 'Layanan Darurat' },
                { number: '50+', label: 'Program Aktif' },
                { number: '5★', label: 'Rating Pelayanan' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100/50">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image */}
          <div className="relative">
            <div className="relative group">
              {/* Glowing backdrop */}
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              {/* Main image container */}
              <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-3 border border-white/30 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&h=500&fit=crop"
                  alt="Tim Dinas Lingkungan Hidup"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-3 bg-gradient-to-t from-emerald-900/30 via-transparent to-cyan-900/10 rounded-2xl"></div>
                
                {/* Achievement badges */}
                <div className="absolute top-8 right-8 space-y-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                    <div className="text-sm font-semibold text-emerald-600">ISO 9001:2015</div>
                    <div className="text-xs text-gray-600">Certified</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                    <div className="text-sm font-semibold text-blue-600">Green Award</div>
                    <div className="text-xs text-gray-600">2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:scale-105"
                style={{
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)'
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                <CardContent className="relative z-10 pt-8 text-center">
                  <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${value.gradient} p-5 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-lg text-gray-900 mb-3 font-semibold">{value.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`}></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}