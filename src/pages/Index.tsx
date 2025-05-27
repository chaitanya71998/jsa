
import React, { useState } from 'react';
import JsonViewer from '@/components/JsonViewer';
import AdBanner from '@/components/AdBanner';
import FaqSection from '@/components/FaqSection';
import HowToUseSection from '@/components/HowToUseSection';
import JsonExamplesSection from '@/components/JsonExamplesSection';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const sampleJson = `{
  "name": "JSON Viewer",
  "version": "1.0.0",
  "description": "A beautiful JSON viewer with syntax highlighting",
  "features": [
    "Tree view",
    "Syntax highlighting",
    "Auto-formatting",
    "Copy to clipboard"
  ],
  "settings": {
    "theme": "dark",
    "fontSize": 14,
    "tabSize": 2,
    "expandLevel": 2
  },
  "isOpenSource": true,
  "stats": {
    "stars": 1250,
    "forks": 468,
    "contributors": 32,
    "issues": {
      "open": 15,
      "closed": 203
    }
  },
  "nestedObject": {
    "level1": {
      "level2": {
        "level3": {
          "level4": {
            "value": "Deep nested value"
          }
        }
      }
    }
  }
}`;

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [contentValidation, setContentValidation] = useState({
    hasValidContent: true, // Start with true since we have sample JSON
    isContentSubstantial: true
  });
  
  const handleContentValidationChange = (validation: any) => {
    setContentValidation(validation);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header with theme toggle */}
      <header className="w-full py-4 px-6 border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            JSON<span className="text-primary">Toolbox</span>
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </div>
      </header>
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        {/* Introduction Section with substantial content */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-4">JSON Formatter & Viewer</h1>
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg text-muted-foreground mb-4">
              A powerful, free online JSON formatter, viewer, and validator designed for developers, data analysts, 
              and anyone working with JSON data. Our tool provides an intuitive interface with advanced features 
              including interactive tree view, real-time validation, syntax highlighting, and seamless import/export capabilities.
            </p>
            <p className="text-muted-foreground mb-4">
              Whether you're debugging API responses, analyzing complex data structures, editing configuration files, 
              or learning JSON syntax, our comprehensive toolset makes working with JSON data effortless and efficient. 
              Format messy JSON with proper indentation, validate syntax errors in real-time, and explore nested 
              structures with our interactive tree viewer.
            </p>
          </div>
        </div>

        {/* Top Ad Banner - only show with substantial content */}
        {contentValidation.isContentSubstantial && (
          <AdBanner 
            position="top" 
            hasContent={contentValidation.hasValidContent}
            showAd={contentValidation.isContentSubstantial}
            adSlot="1234567890" // Replace with actual ad slot ID
          />
        )}
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <JsonViewer 
              defaultJson={sampleJson} 
              onContentValidationChange={handleContentValidationChange}
            />
            
            <div className="mt-12">
              <JsonExamplesSection />
            </div>
            
            <div className="mt-12">
              <HowToUseSection />
            </div>
            
            <div className="mt-12">
              <FaqSection />
            </div>
          </div>
          
          {/* Side Ad Banner - only show with substantial content and on larger screens */}
          {contentValidation.isContentSubstantial && (
            <div className="hidden lg:block">
              <AdBanner 
                position="side" 
                className="sticky top-24" 
                hasContent={contentValidation.hasValidContent}
                showAd={contentValidation.isContentSubstantial}
                adSlot="0987654321" // Replace with actual ad slot ID
              />
            </div>
          )}
        </div>
      </main>
      
      {/* Bottom Ad Banner - only show with substantial content */}
      {contentValidation.isContentSubstantial && (
        <AdBanner 
          position="bottom" 
          hasContent={contentValidation.hasValidContent}
          showAd={contentValidation.isContentSubstantial}
          adSlot="1122334455" // Replace with actual ad slot ID
        />
      )}
      
      {/* Footer */}
      <footer className="w-full py-6 px-4 border-t bg-card/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JSONToolbox. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            A powerful online JSON formatter, viewer, and validator tool for developers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
