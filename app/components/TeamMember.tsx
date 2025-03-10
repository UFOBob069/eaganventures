'use client'

import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  console.log('Rendering TeamMember:', { name, role, image, bio });

  return (
    <div className="text-center hover:scale-105 transition-transform bg-white p-6 rounded-lg">
      <div className="relative w-48 h-48 mx-auto mb-4">
        <Image
          src={image}
          alt={name}
          width={192}
          height={192}
          className="rounded-full object-cover"
          onError={(e: any) => {
            console.log('Image error, using placeholder');
            e.target.src = '/team/placeholder.jpg'
          }}
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
      <p className="text-indigo-600 mb-4 font-medium">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
} 