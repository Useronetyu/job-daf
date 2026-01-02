import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Stethoscope, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface HeroSectionProps {
  onStartDiagnosis: () => void;
}

const features = [
  { icon: Stethoscope, title: 'Diagnosa Cepat', desc: 'Hasil dalam hitungan detik' },
  { icon: Shield, title: 'Terpercaya', desc: 'Berbasis pengetahuan ahli' },
  { icon: Sparkles, title: 'Gratis', desc: 'Tanpa biaya apapun' },
];

export function HeroSection({ onStartDiagnosis }: HeroSectionProps) {
  const { user } = useAuth();

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient dark:hero-gradient-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl dark:bg-accent/20"
        />
      </div>

      <div className="container relative mx-auto px-4 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-semibold text-primary md:text-base"
              >
                Hello {user?.name || 'Guest'}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl"
              >
                Selamat Datang di{' '}
                <span className="text-primary">SmileDetect</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              SmileDetect adalah platform cerdas yang dirancang untuk membantu Anda
              melakukan diagnosa awal penyakit gigi secara mandiri. Cukup masukkan
              gejala yang Anda rasakan, dan dapatkan rekomendasi perawatan serta
              akses ke informasi kesehatan gigi yang lengkap dan terpercaya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-2"
            >
              <p className="mb-4 text-sm font-medium text-primary/80">
                Ambil kendali penuh atas kesehatan gigi Anda. Mulai diagnosa gejala
                yang Anda rasakan sekarang.
              </p>
              <Button
                onClick={onStartDiagnosis}
                size="lg"
                className="gap-2 shadow-lg hover:shadow-xl transition-all hover-scale"
              >
                Mulai Diagnosa Sekarang
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Illustration & Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Illustration Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl dark:bg-primary/20" />
              <div className="relative overflow-hidden rounded-2xl bg-card card-shadow-xl border border-border/50">
                <svg
                  viewBox="0 0 400 280"
                  className="w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background */}
                  <rect width="400" height="280" className="fill-secondary" />
                  
                  {/* Decorative circles */}
                  <circle cx="50" cy="40" r="60" className="fill-primary/5" />
                  <circle cx="350" cy="240" r="80" className="fill-accent/5" />
                  
                  {/* Dentist illustration */}
                  <ellipse cx="140" cy="240" rx="70" ry="15" className="fill-primary/20" />
                  
                  {/* Dentist body */}
                  <path d="M110 240 L110 180 Q110 165 130 165 L150 165 Q170 165 170 180 L170 240" className="fill-card stroke-primary" strokeWidth="2" />
                  
                  {/* Dentist head */}
                  <circle cx="140" cy="140" r="25" className="fill-orange-200 dark:fill-orange-300" />
                  
                  {/* Dentist mask */}
                  <rect x="125" y="145" width="30" height="15" rx="4" className="fill-accent/30" />
                  
                  {/* Stethoscope */}
                  <path d="M110 180 Q95 195 102 210" className="stroke-primary" strokeWidth="3" fill="none" />
                  <circle cx="102" cy="215" r="6" className="fill-primary" />
                  
                  {/* Patient chair */}
                  <ellipse cx="280" cy="240" rx="60" ry="12" className="fill-accent/20" />
                  <path d="M230 240 L230 200 Q230 185 255 175 L305 175 Q330 185 330 200 L330 240" className="fill-accent/30" />
                  
                  {/* Patient */}
                  <circle cx="280" cy="155" r="22" className="fill-orange-200 dark:fill-orange-300" />
                  <ellipse cx="280" cy="195" rx="30" ry="35" className="fill-accent/40" />
                  
                  {/* Dental light */}
                  <circle cx="200" cy="60" r="18" className="fill-yellow-300/80" />
                  <line x1="200" y1="78" x2="200" y2="40" className="stroke-muted-foreground" strokeWidth="3" />
                  
                  {/* Tooth icon */}
                  <path d="M50 55 Q42 40 50 32 Q58 24 66 32 Q74 24 82 32 Q90 40 82 55 Q78 70 74 85 Q70 92 66 85 Q62 78 58 85 Q54 92 50 85 Q46 70 50 55" className="fill-card stroke-primary" strokeWidth="2" />
                  
                  {/* Sparkles */}
                  <circle cx="40" cy="45" r="3" className="fill-primary" />
                  <circle cx="95" cy="35" r="2" className="fill-primary" />
                  <circle cx="320" cy="90" r="3" className="fill-accent" />
                  <circle cx="360" cy="60" r="2" className="fill-primary" />
                </svg>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-3 px-4 md:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 rounded-xl bg-card px-3 py-2 card-shadow border border-border/50 md:gap-3 md:px-4 md:py-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 md:h-10 md:w-10">
                    <feature.icon className="h-4 w-4 text-primary md:h-5 md:w-5" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-xs font-semibold text-foreground md:text-sm">{feature.title}</p>
                    <p className="text-[10px] text-muted-foreground md:text-xs">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
