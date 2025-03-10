'use client'

import Image from 'next/image';

interface PortfolioItemProps {
  name: string;
  logo: string;
  description: string;
}

export default function PortfolioItem({ name, logo, description }: PortfolioItemProps) {
  console.log('Rendering PortfolioItem:', { name, logo, description });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col h-full">
      <div className="h-40 relative mb-6 flex items-center justify-center">
        <Image
          src={logo}
          alt={name}
          width={160}
          height={80}
          className="object-contain max-h-36"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            console.log('Logo error, using placeholder');
            e.currentTarget.src = '/logos/placeholder.png';
          }}
        />
      </div>
      
      <div className="border-t pt-4 mt-auto">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{name}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
} 