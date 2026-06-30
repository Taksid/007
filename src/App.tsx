/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bot, Zap, ShieldCheck, Headphones, MessageCircle, Languages } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { translations } from './translations';
import LegalView from './components/LegalView';
import Preloader from './components/Preloader';
import ContactForm from './components/ContactForm';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [view, setView] = useState<'home' | 'privacy' | 'terms'>('home');
  const [isLoading, setIsLoading] = useState(true);
  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Preloader />;

  if (view === 'privacy') {
    return <LegalView title="Privacy Policy" onBack={() => setView('home')} content={
        <div className="space-y-4">
            <p className="font-bold">Effective Date: 2026-06-30</p>
            <p>This privacy policy applies to the 007 Filter Master app for mobile devices, together with any related services operated by BENTON XON DEV INC (collectively, the "Application"). BENTON XON DEV INC is hereby referred to as the "Service Provider".</p>
            
            <h3 className="text-xl font-bold mt-4">Information Collection and Use</h3>
            <p>The Application collects information when you download and use it. This information may include information such as: Your device's Internet Protocol address; The pages of the Application that you visit, the time and date of your visit, the time spent on those pages; The time spent on the Application; your mobile operating system you use.</p>

            <h3 className="text-xl font-bold mt-4">Cookies and tracking technologies</h3>
            <p>The Application or its third-party SDKs may use cookies, SDKs, pixels, and similar technologies to support functionality, analytics, or service delivery. Where required by applicable law, the Service Provider will obtain consent before using non-essential tracking technologies.</p>

            <h3 className="text-xl font-bold mt-4">Your Rights</h3>
            <p>You may request access to, correction of, or deletion of your personal data held by the Service Provider. To exercise these rights, or to withdraw consent where processing is based on consent, contact the Service Provider at bhakwbovyab@gmail.com.</p>

            <h3 className="text-xl font-bold mt-4">Your California privacy rights (CCPA/CPRA)</h3>
            <p>If you are a California resident, you have the right to know what personal information is collected, the right to delete personal information, the right to opt out of the sale or sharing of personal information, and the right to non-discrimination for exercising these rights. To exercise your CCPA/CPRA rights, contact the Service Provider at bhakwbovyab@gmail.com.</p>

            <h3 className="text-xl font-bold mt-4">Data Retention Policy</h3>
            <p>The Service Provider retains personal data based on its necessity for the stated purposes. You may request deletion of your personal data, subject to any legal obligation to retain it. If you want the Service Provider to delete User Provided Data submitted through the Application, please contact them at bhakwbovyab@gmail.com.</p>

            <h3 className="text-xl font-bold mt-4">Children</h3>
            <p>The Application is not intended for children under 16 years of age. The Service Provider does not knowingly collect personally identifiable information from children.</p>
            
            <h3 className="text-xl font-bold mt-4">Contact Us</h3>
            <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at bhakwbovyab@gmail.com.</p>
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
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/dw5XQkFd/1782813691283.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" referrerPolicy="no-referrer" />
            <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-bold uppercase">{t.nav}</span>
          </div>
          <div className='flex items-center gap-3 md:gap-6'>
            <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Languages size={18} />
            </button>
            <a
              href="https://t.me/go007_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-3 bg-[#0088CC] text-white font-black uppercase text-xs md:text-sm tracking-widest hover:opacity-90 transition"
            >
              {t.startBot}
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16">
        <section className="py-8 md:py-16 text-center border-b border-white/10">
          <motion.h1
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-6"
          >
            {t.heroTitle1}<br/>
            <span className="text-[#0088CC]">{t.heroTitle2}</span>
          </motion.h1>
          
          <div className="mb-8 md:mb-12">
            <img 
              src="https://i.ibb.co/SD4YF9ZG/b712443f4c644d679f32ac691bebe9db.png" 
              alt="007 Smart Service Platform" 
              className="mx-auto rounded-lg shadow-2xl max-w-full md:max-w-md border border-white/10" 
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-lg md:text-xl text-white/60 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
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
          <div className="flex justify-center px-4">
             <img 
              src="https://i.ibb.co/846Lyt4s/Screenshot-20260630-160453-Telegram.jpg" 
              alt="Channel Collection" 
              className="rounded-lg shadow-2xl w-full max-w-2xl border border-white/10" 
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">{t.contact}</h2>
          <div className="mb-16">
            <ContactForm t={t} />
          </div>
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

      <footer className="px-6 md:px-12 py-8 border-t border-white/10 text-center text-[10px] opacity-40 uppercase tracking-[0.4em]">
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

