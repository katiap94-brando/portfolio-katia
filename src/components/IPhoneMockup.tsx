import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IPhoneMockupProps {
  children: ReactNode;
  delay?: number;
  scale?: number;
}

export function IPhoneMockup({ children, delay = 0, scale = 1 }: IPhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative"
      style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
    >
      {/* iPhone Frame */}
      <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
        
        {/* Screen Border */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
          {/* Screen Content */}
          <div className="relative w-[390px] h-[844px]">
            {children}
          </div>
        </div>
        
        {/* Power Button */}
        <div className="absolute right-0 top-32 w-1 h-16 bg-gray-800 rounded-l"></div>
        
        {/* Volume Buttons */}
        <div className="absolute left-0 top-28 w-1 h-8 bg-gray-800 rounded-r"></div>
        <div className="absolute left-0 top-40 w-1 h-12 bg-gray-800 rounded-r"></div>
      </div>
    </motion.div>
  );
}