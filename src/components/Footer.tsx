import { motion } from 'framer-motion';
import { Smile, Facebook, Twitter, Instagram, Home, Stethoscope, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { icon: Home, href: '/', label: 'Home' },
    { icon: Stethoscope, href: '/', label: 'Diagnosa' },
    { icon: User, href: '/profile', label: 'Profile' },
  ];

  return (
    <footer className="border-t border-border bg-card/50 px-4 py-8 md:px-8 md:py-12 pb-24 md:pb-12">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Smile className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">SmileDetect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sistem Pakar Diagnosa Penyakit Gigi berbasis Forward Chaining. Membantu
              Anda memahami kondisi kesehatan gigi secara cepat dan akurat.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">Tautan Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">Ikuti Kami</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SmileDetect. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Aplikasi ini bersifat informatif dan tidak menggantikan konsultasi dengan dokter gigi profesional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
