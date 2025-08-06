import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  FileCheck, 
  BarChart3, 
  CheckCircle, 
  Settings, 
  FileText, 
  ClipboardList,
  ArrowUpRight
} from 'lucide-react';
import { Button } from './ui/button';

export function Services() {
  const services = [
    {
      icon: FileCheck,
      title: 'Persetujuan Lingkungan',
      description: 'Penerbitan persetujuan untuk kegiatan yang berpotensi menimbulkan dampak lingkungan.',
      features: ['Evaluasi dokumen', 'Verifikasi lapangan', 'Penerbitan surat persetujuan'],
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-50 to-green-50',
      borderGradient: 'from-emerald-200 to-green-200'
    },
    {
      icon: BarChart3,
      title: 'AMDAL',
      description: 'Analisis Mengenai Dampak Lingkungan Hidup untuk kegiatan besar yang berpotensi menimbulkan dampak penting.',
      features: ['Penyusunan ANDAL', 'RKL-RPL', 'Komisi penilai AMDAL'],
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50',
      borderGradient: 'from-cyan-200 to-blue-200'
    },
    {
      icon: CheckCircle,
      title: 'SKKL',
      description: 'Keputusan Kelayakan Lingkungan Hidup sebagai hasil penilaian AMDAL.',
      features: ['Penilaian kelayakan', 'Penetapan persyaratan', 'Monitoring berkala'],
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50',
      borderGradient: 'from-purple-200 to-indigo-200'
    },
    {
      icon: Settings,
      title: 'UKL-UPL',
      description: 'Upaya Pengelolaan dan Pemantauan Lingkungan Hidup untuk kegiatan dengan dampak penting tidak besar.',
      features: ['Formulir UKL-UPL', 'Evaluasi dampak', 'Rekomendasi pengelolaan'],
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      borderGradient: 'from-orange-200 to-red-200'
    },
    {
      icon: FileText,
      title: 'PKPLH',
      description: 'Pernyataan Kesanggupan Pengelolaan Lingkungan Hidup untuk usaha atau kegiatan tertentu.',
      features: ['Formulir pernyataan', 'Komitmen pengelolaan', 'Pemantauan mandiri'],
      gradient: 'from-teal-500 to-emerald-500',
      bgGradient: 'from-teal-50 to-emerald-50',
      borderGradient: 'from-teal-200 to-emerald-200'
    },
    {
      icon: ClipboardList,
      title: 'SPPL',
      description: 'Surat Pernyataan Kesanggupan Pengelolaan dan Pemantauan Lingkungan Hidup.',
      features: ['Registrasi online', 'Self assessment', 'Laporan berkala'],
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      borderGradient: 'from-pink-200 to-rose-200'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-100/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full border border-emerald-200/50 backdrop-blur-sm">
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-700 to-cyan-700 bg-clip-text text-transparent">
              ✨ Layanan Unggulan Kami
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Layanan Lingkungan Hidup
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Kami menyediakan berbagai layanan perizinan dan pengelolaan lingkungan hidup 
            untuk mendukung pembangunan berkelanjutan di Kota Medan dengan standar profesional terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)'
                }}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}></div>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-900">Fitur Layanan:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full mt-6 group/button hover:bg-transparent"
                  >
                    <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover/button:text-white transition-colors duration-300`}>
                      Pelajari Lebih Lanjut
                    </span>
                    <ArrowUpRight className={`ml-2 h-4 w-4 text-gray-400 group-hover/button:text-white transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1`} />
                  </Button>
                </CardContent>
                
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`}></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}