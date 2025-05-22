
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AdBannerProps {
  position: 'top' | 'side' | 'bottom';
  className?: string;
  adClient?: string;
  adSlot?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ 
  position, 
  className,
  adClient = "ca-pub-9893011429707159", // Updated with your actual AdSense publisher ID
  adSlot = "XXXXXXXXXX" // Replace with your actual ad slot ID
}) => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  
  // Define styles and ad sizes based on position
  const styles = {
    top: 'w-full h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20',
    side: 'h-full w-[250px] bg-gradient-to-b from-green-500/20 to-blue-500/20',
    bottom: 'w-full h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20',
  };
  
  const adSizes = {
    top: [728, 90],      // Leaderboard
    side: [300, 600],    // Large Skyscraper
    bottom: [728, 90],   // Leaderboard
  };
  
  // Initialize Google AdSense ads
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Check if AdSense script is loaded
    if (window.adsbygoogle) {
      try {
        // Clear previous ad if exists
        if (adContainerRef.current) {
          adContainerRef.current.innerHTML = '';
        }

        // Insert ad
        const adElement = document.createElement('ins');
        adElement.className = 'adsbygoogle';
        adElement.style.display = 'block';
        adElement.style.width = `${adSizes[position][0]}px`;
        adElement.style.height = `${adSizes[position][1]}px`;
        adElement.setAttribute('data-ad-client', adClient);
        adElement.setAttribute('data-ad-slot', adSlot);
        
        if (adContainerRef.current) {
          adContainerRef.current.appendChild(adElement);
          // Push the ad to AdSense
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, [position, adClient, adSlot]);
  
  return (
    <div 
      className={cn(
        "flex items-center justify-center rounded-lg border border-dashed",
        styles[position],
        className
      )}
    >
      <div ref={adContainerRef} className="w-full h-full flex items-center justify-center">
        {/* Fallback content while ads are loading */}
        <div className="text-muted-foreground text-center">
          <p className="text-sm font-medium">Advertisement</p>
          <p className="text-xs">
            {position === 'top' && '728×90 Banner Ad'}
            {position === 'side' && '300×600 Skyscraper Ad'}
            {position === 'bottom' && '728×90 Banner Ad'}
          </p>
        </div>
      </div>
    </div>
  );
};

// Add window.adsbygoogle type declaration
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default AdBanner;
