import { motion } from 'motion/react';

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F1C2E]">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 border-4 border-[#0088CC] border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
        />
        <img 
          src="https://i.ibb.co/Ps3JZPGH/1782813691283.png" 
          alt="Logo" 
          className="w-16 h-16 rounded-full object-cover" 
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
