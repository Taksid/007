import { ArrowLeft } from 'lucide-react';

interface LegalViewProps {
  title: string;
  content: React.ReactNode;
  onBack: () => void;
}

export default function LegalView({ title, content, onBack }: LegalViewProps) {
  return (
    <div className="min-h-screen bg-[#0F1C2E] text-[#F5F5F5] font-sans p-12">
      <button 
        onClick={onBack} 
        className="flex items-center gap-2 mb-8 text-[#0088CC] hover:text-white transition"
      >
        <ArrowLeft size={20} /> Back
      </button>
      <h1 className="text-4xl font-bold mb-8 uppercase tracking-tight">{title}</h1>
      <div className="prose prose-invert max-w-4xl text-white/70">
        {content}
      </div>
    </div>
  );
}
