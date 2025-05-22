
import React from 'react';
import { cn } from '@/lib/utils';

interface AdBannerProps {
  position: 'top' | 'side' | 'bottom';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ position, className }) => {
  // Define styles based on position
  const styles = {
    top: 'w-full h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20',
    side: 'h-full w-[250px] bg-gradient-to-b from-green-500/20 to-blue-500/20',
    bottom: 'w-full h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20',
  };
  
  return (
    <div 
      className={cn(
        "flex items-center justify-center rounded-lg border border-dashed",
        styles[position],
        className
      )}
    >
      <div className="text-muted-foreground text-center">
        <p className="text-sm font-medium">Advertisement</p>
        <p className="text-xs">
          {position === 'top' && '728×90 Banner Ad'}
          {position === 'side' && '300×600 Skyscraper Ad'}
          {position === 'bottom' && '728×90 Banner Ad'}
        </p>
      </div>
    </div>
  );
};

export default AdBanner;
