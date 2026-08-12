'use client';

import React from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  return (
    <div className={`transition-transform duration-300 hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}
