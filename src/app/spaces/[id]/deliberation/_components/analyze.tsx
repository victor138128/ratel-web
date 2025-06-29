'use client';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { useDeliberationSpaceContext } from '../provider.client';

export default function AnalyzePage() {
  const { handleGoBack } = useDeliberationSpaceContext();
  return (
    <div className="flex flex-col w-full">
      <div
        className="cursor-pointer w-fit h-fit mb-[20px]"
        onClick={() => {
          handleGoBack();
        }}
      >
        <ArrowLeft width={24} height={24} />
      </div>

      <div>Analyze</div>
    </div>
  );
}
