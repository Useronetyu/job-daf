import { motion } from 'framer-motion';
import { Stethoscope, Clock, BookOpen, Heart, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export type TabType = 'home' | 'diagnosa' | 'riwayat' | 'penyakit' | 'tips';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs = [
  { id: 'diagnosa' as TabType, label: 'Diagnosa', icon: Stethoscope },
  { id: 'riwayat' as TabType, label: 'Riwayat', icon: Clock },
  { id: 'penyakit' as TabType, label: 'Penyakit Gigi', icon: BookOpen },
  { id: 'tips' as TabType, label: 'Tips Kesehatan', icon: Heart },
];

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="sticky top-[73px] z-40 hidden md:block glassmorphism border-b px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 py-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                  activeTab === tab.id
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-primary shadow-md"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <tab.icon className="h-4 w-4" />
                  {tab.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glassmorphism-strong border-t safe-area-bottom">
        <div className="flex items-center justify-around px-2 py-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              whileTap={{ scale: 0.9 }}
              className={cn(
                'flex flex-col items-center gap-1 rounded-xl px-4 py-2 transition-colors',
                activeTab === tab.id
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-lg transition-colors',
                  activeTab === tab.id ? 'bg-primary/10' : ''
                )}
              >
                <tab.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-medium">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </nav>
    </>
  );
}
