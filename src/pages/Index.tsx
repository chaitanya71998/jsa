
import React, { useState } from 'react';
import JsonViewer from '@/components/JsonViewer';
import AdBanner from '@/components/AdBanner';
import FaqSection from '@/components/FaqSection';
import HowToUseSection from '@/components/HowToUseSection';
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
      
      {/* Top Ad Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-6">
        <AdBanner position="top" />
      </div>
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight mb-2">JSON Formatter & Viewer</h1>
              <p className="text-muted-foreground">
                A free online tool to format, beautify, and validate your JSON data with an interactive tree view, syntax highlighting, and advanced features.
              </p>
            </div>
            
            <JsonViewer defaultJson={sampleJson} />
            
            <div className="mt-12">
              <HowToUseSection />
            </div>
            
            <div className="mt-12">
              <FaqSection />
            </div>
          </div>
          
          {/* Side Ad Banner */}
          <div className="hidden lg:block">
            <AdBanner position="side" className="sticky top-24" />
          </div>
        </div>
      </main>
      
      {/* Bottom Ad Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 pb-6">
        <AdBanner position="bottom" />
      </div>
      
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
