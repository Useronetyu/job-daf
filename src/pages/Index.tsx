import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Navigation, type TabType } from '@/components/Navigation';
import { DiagnosaTab } from '@/components/tabs/DiagnosaTab';
import { RiwayatTab } from '@/components/tabs/RiwayatTab';
import { PenyakitTab } from '@/components/tabs/PenyakitTab';
import { TipsTab } from '@/components/tabs/TipsTab';
import { Footer } from '@/components/Footer';
import { type DiagnosisHistory } from '@/data/dentalData';

const STORAGE_KEY = 'smiledetect-history';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>('diagnosa');
  const [history, setHistory] = useState<DiagnosisHistory[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse history:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const handleSaveHistory = (newHistory: DiagnosisHistory) => {
    setHistory((prev) => [newHistory, ...prev]);
  };

  const handleDeleteHistory = (id: string) => {
    setHistory((prev) => prev.filter((h) => h.id !== id));
  };

  const handleStartDiagnosis = () => {
    setActiveTab('diagnosa');
    setTimeout(() => {
      document.querySelector('main')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'diagnosa':
        return <DiagnosaTab onSaveHistory={handleSaveHistory} />;
      case 'riwayat':
        return <RiwayatTab history={history} onDeleteHistory={handleDeleteHistory} />;
      case 'penyakit':
        return <PenyakitTab />;
      case 'tips':
        return <TipsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onStartDiagnosis={handleStartDiagnosis} />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
