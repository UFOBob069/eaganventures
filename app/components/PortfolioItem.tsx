'use client'

import Image from 'next/image';
import { useState } from 'react';

interface PortfolioItemProps {
  name: string;
  logo: string;
  description: string;
}

export default function PortfolioItem({ name, logo, description }: PortfolioItemProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col h-full">
      <div className="h-32 sm:h-40 relative mb-4 sm:mb-6 flex items-center justify-center">
        <Image
          src={imageError ? '/logos/placeholder.png' : logo}
          alt={name}
          width={160}
          height={80}
          className="object-contain max-h-28 sm:max-h-36"
          onError={() => setImageError(true)}
        />
      </div>
      
      <div className="border-t pt-4 mt-auto">
        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{name}</h4>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
} 