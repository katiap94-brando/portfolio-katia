import { ReactNode } from 'react';

interface MacBookMockupProps {
  children: ReactNode;
  className?: string;
}

export function MacBookMockup({ children, className = '' }: MacBookMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* MacBook Body */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl">
        {/* Screen Bezel */}
        <div className="relative bg-black rounded-lg p-2">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
          
          {/* Screen Content */}
          <div className="relative bg-white rounded-md overflow-hidden aspect-[16/10]">
            {children}
          </div>
        </div>
        {/* Camera */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full z-20" />
      </div>
      {/* MacBook Base */}
      <div className="relative h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl mx-auto" style={{ width: '110%', marginLeft: '-5%' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50" />
      </div>
      {/* MacBook Shadow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[95%] h-8 bg-black/20 blur-2xl rounded-full" />
    </div>
  );
}