'use client'

import Image from 'next/image';
import { useState } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="text-center hover:scale-105 transition-transform bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-3 sm:mb-4">
        <Image
          src={imageError ? '/team/placeholder.jpg' : image}
          alt={name}
          width={192}
          height={192}
          className="rounded-full object-cover w-full h-full"
          onError={() => setImageError(true)}
        />
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{name}</h3>
      <p className="text-indigo-600 mb-2 sm:mb-4 font-medium text-sm sm:text-base">{role}</p>
      <p className="text-gray-600 text-sm sm:text-base">{bio}</p>
    </div>
  );
} 