/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bot, Zap, ShieldCheck, Headphones, MessageCircle, Languages } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { translations } from './translations';
import LegalView from './components/LegalView';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');
  const t = translations[lang];

  if (view === 'privacy') {
    return <LegalView title="Privacy Policy" onBack={() => setView('home')} content={
        <div>
            <p className="mb-4">Developer: BENTON XON DEV INC</p>
            <p className="mb-4">Company: MUSA JEWELLERS</p>
            <p className="mb-4">Email: bhakwbovyab@gmail.com</p>
            <p>This privacy policy applies to the 007 Smart Service Platform application...</p>
        </div>
    } />;
  }
  
  if (view === 'terms') {
    return <LegalView title="Terms and Conditions" onBack={() => setView('home')} content={
        <p>By using the 007 Smart Service Platform, you agree to these terms...</p>
    } />;
  }

  return (
    <div className="min-h-screen bg-[#0F1C2E] text-[#F5F5F5] font-sans">
      {/* Hero Section */}
      <header className="border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-12 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/dw5XQkFd/1782813691283.png" alt="Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
            <span className="text-sm tracking-[0.3em] font-bold uppercase">{t.nav}</span>
          </div>
          <div className='flex items-center gap-6'>
            <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Languages size={20} />
            </button>
            <a
              href="https://t.me/go007_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0088CC] text-white font-black uppercase text-sm tracking-widest hover:opacity-90 transition"
            >
              {t.startBot}
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-12 py-16">
        <section className="py-16 text-center border-b border-white/10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl font-black tracking-tighter uppercase mb-6"
          >
            {t.heroTitle1}<br/>
            <span className="text-[#0088CC]">{t.heroTitle2}</span>
          </motion.h1>
          
          <div className="mb-12">
            <img 
              src="https://i.ibb.co/cKv1414r/IMG-20260630-154933-463.jpg" 
              alt="007 Smart Service Platform" 
              className="mx-auto rounded-lg shadow-2xl max-w-md border border-white/10" 
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {t.heroSubtitle}
          </p>
          <a
            href="https://t.me/go007_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#0088CC] text-white text-sm font-black uppercase tracking-widest hover:opacity-90 transition"
          >
            <Bot size={20} />
            {t.useBot}
          </a>
        </section>

        {/* Features Section */}
        <section className="py-16 border-b border-white/10">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight uppercase">{t.features}</h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            <FeatureCard
              icon={<Zap size={32} className="text-[#0088CC]" />}
              title={t.feat1Title}
              description={t.feat1Desc}
              number="01"
            />
            <FeatureCard
              icon={<ShieldCheck size={32} className="text-[#0088CC]" />}
              title={t.feat2Title}
              description={t.feat2Desc}
              number="02"
            />
            <FeatureCard
              icon={<Headphones size={32} className="text-[#0088CC]" />}
              title={t.feat3Title}
              description={t.feat3Desc}
              number="03"
            />
          </div>
        </section>

        {/* Collection Section */}
        <section className="py-16 border-b border-white/10">
          <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-tight">{t.collection}</h2>
          <div className="flex justify-center">
             <img 
              src="https://i.ibb.co/846Lyt4s/Screenshot-20260630-160453-Telegram.jpg" 
              alt="Channel Collection" 
              className="rounded-lg shadow-2xl max-w-2xl border border-white/10" 
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">{t.contact}</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <a href="https://t.me/s8s8s" target="_blank" className="flex flex-col items-center gap-2 text-white/60 hover:text-[#0088CC] transition">
              <span className="text-[10px] uppercase opacity-40">{t.tgId}</span>
              <span className="text-xl font-bold">s8s8s</span>
            </a>
            <a href="https://t.me/go007_bot" target="_blank" className="flex flex-col items-center gap-2 text-white/60 hover:text-[#0088CC] transition">
              <span className="text-[10px] uppercase uppercase opacity-40">{t.tgBot}</span>
              <span className="text-xl font-bold">@go007_bot</span>
            </a>
            <a href="tel:+88803427659" className="flex flex-col items-center gap-2 text-white/60 hover:text-[#0088CC] transition">
              <span className="text-[10px] uppercase opacity-40">{t.phone}</span>
              <span className="text-xl font-bold">+888 0342 7659</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="px-12 py-8 border-t border-white/10 text-center text-[10px] opacity-40 uppercase tracking-[0.4em]">
        <div className="mb-4 space-x-4">
          <button onClick={() => setView('privacy')} className="hover:text-white">Privacy Policy</button>
          <button onClick={() => setView('terms')} className="hover:text-white">Terms and Conditions</button>
        </div>
        &copy; {t.footer}
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, number }: { icon: React.ReactNode, title: string, description: string, number: string }) {
  return (
    <div className="bg-[#0F1C2E] p-10 flex flex-col justify-center">
      <div className="flex justify-between items-start mb-6">
        <div className="text-[#0088CC]">{icon}</div>
        <span className="text-3xl text-white/10 font-serif italic">{number}</span>
      </div>
      <h3 className="text-2xl font-bold uppercase tracking-tight italic mb-4">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed">{description}</p>
    </div>
  );
}

