import { motion } from 'motion/react';
import { useState } from 'react';

interface ContactFormProps {
  t: any;
}

export default function ContactForm({ t }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message.');
    }
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/10"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-6">
        <input 
          type="text" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder={t.namePlaceholder}
          className="w-full bg-[#0F1C2E] border border-white/20 p-4 rounded-lg text-white placeholder-white/40 focus:border-[#0088CC] outline-none transition"
        />
        <input 
          type="email" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder={t.emailPlaceholder}
          className="w-full bg-[#0F1C2E] border border-white/20 p-4 rounded-lg text-white placeholder-white/40 focus:border-[#0088CC] outline-none transition"
        />
        <textarea 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder={t.messagePlaceholder}
          rows={4}
          className="w-full bg-[#0F1C2E] border border-white/20 p-4 rounded-lg text-white placeholder-white/40 focus:border-[#0088CC] outline-none transition"
        />
        <button 
          type="submit"
          className="w-full py-4 bg-[#0088CC] text-white font-bold uppercase tracking-widest hover:opacity-90 transition rounded-lg"
        >
          {t.submitButton}
        </button>
      </div>
    </motion.form>
  );
}
