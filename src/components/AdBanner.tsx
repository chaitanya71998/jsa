
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AdBannerProps {
  position: 'top' | 'side' | 'bottom';
  className?: string;
  adClient?: string;
  adSlot?: string;
  responsive?: boolean;
  showAd?: boolean;
  hasContent?: boolean;
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  position, 
  className,
  adClient = "ca-pub-9893011429707159",
  adSlot, // Remove default placeholder
  responsive = true,
  showAd = true,
  hasContent = false
}) => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  
  // Don't render ads if content requirements aren't met
  if (!showAd || !hasContent || !adSlot) {
    return null;
  }
  
  // Define styles based on position
  const styles = {
    top: 'w-full h-auto min-h-[90px] mb-6',
    side: 'h-auto min-h-[250px] w-full md:w-[300px] lg:w-[336px]',
    bottom: 'w-full h-auto min-h-[90px] mt-6',
  };
  
  // Initialize Google AdSense ads
  useEffect(() => {
    if (typeof window === 'undefined' || !hasContent || !adSlot) return;
    
    if (window.adsbygoogle) {
      try {
        if (adContainerRef.current) {
          adContainerRef.current.innerHTML = '';
        }

        const adElement = document.createElement('ins');
        adElement.className = 'adsbygoogle';
        adElement.style.display = 'block';
        
        if (responsive) {
          adElement.setAttribute('data-ad-format', 'auto');
          adElement.setAttribute('data-full-width-responsive', 'true');
        }
        
        adElement.setAttribute('data-ad-client', adClient);
        adElement.setAttribute('data-ad-slot', adSlot);
        
        if (adContainerRef.current) {
          adContainerRef.current.appendChild(adElement);
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, [position, adClient, adSlot, responsive, hasContent]);
  
  return (
    <div 
      className={cn(
        "flex items-center justify-center",
        styles[position],
        className
      )}
      aria-label="Advertisement"
    >
      <div ref={adContainerRef} className="w-full h-full" />
    </div>
  );
};

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default AdBanner;
