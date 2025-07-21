import React from 'react';

export default function ContentBubble({ className, children }) {
  return (
    <div className={`w-[70%] text-lg font-normal leading-normal text-primary-200 -tracking-[2%] bg-[#00AFFF14] rounded-2xl border border-primary-950 px-5 py-6 md:w-[60%] lg:w-[34.375rem] ${className}`}>
        {children}
    </div>
  );
}
