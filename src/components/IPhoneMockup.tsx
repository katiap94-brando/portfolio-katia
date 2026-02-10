import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IPhoneMockupProps {
  children: ReactNode;
  delay?: number;
  scale?: number;
}

// Dimensioni reali del mockup iPhone (w=390, h=844 + frame ~24px top/bottom)
const MOCKUP_WIDTH = 416;  // 390 + padding frame
const MOCKUP_HEIGHT = 892; // 844 + padding frame

// Scale finale su mobile — abbastanza piccolo da stare nello scroll orizzontale
const MOBILE_SCALE = 0.38;
// Scale su desktop — usa il valore passato come prop
const DESKTOP_SCALE = 0.7;

export function IPhoneMockup({ children, delay = 0 }: IPhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative flex justify-center"
    >
      {/* Contenitore con altezza fissa pari al mockup scalato
          così non lascia spazio bianco sopra/sotto */}
      <div
        className="relative"
        style={{
          width: MOCKUP_WIDTH * MOBILE_SCALE,
          height: MOCKUP_HEIGHT * MOBILE_SCALE,
        }}
      >
        {/* Il mockup reale, scalato e ancorato in alto */}
        <div
          style={{
            transform: `scale(${MOBILE_SCALE})`,
            transformOrigin: 'top left',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {/* iPhone Frame */}
          <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl" style={{ width: MOCKUP_WIDTH }}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

            {/* Screen */}
            <div className="relative bg-white rounded-[2.5rem] overflow-hidden">
              <div className="relative w-[390px] h-[844px]">
                {children}
              </div>
            </div>

            {/* Power Button */}
            <div className="absolute right-0 top-32 w-1 h-16 bg-gray-800 rounded-l" />

            {/* Volume Buttons */}
            <div className="absolute left-0 top-28 w-1 h-8 bg-gray-800 rounded-r" />
            <div className="absolute left-0 top-40 w-1 h-12 bg-gray-800 rounded-r" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}