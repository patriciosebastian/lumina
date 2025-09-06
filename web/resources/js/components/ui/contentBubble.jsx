import React from 'react';

export default function ContentBubble({ className, children }) {
  return (
    <div className={`w-[70%] text-lg font-normal leading-normal text-foreground -tracking-[2%] bg-[#00AFFF14] rounded-2xl border border-primary-950 p-4 md:w-[60%] lg:w-[34.375rem] lg:px-5 lg:py-6 ${className}`}>
        {children}
    </div>
  );
}
