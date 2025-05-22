
import React, { useState } from 'react';
import JsonViewer from '@/components/JsonViewer';
import AdBanner from '@/components/AdBanner';

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
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Ad Banner */}
      <div className="w-full p-4">
        <AdBanner position="top" />
      </div>
      
      <div className="flex flex-col lg:flex-row flex-1 gap-4 p-4">
        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight mb-2">JSON Viewer</h1>
            <p className="text-muted-foreground">
              A beautiful and interactive JSON viewer with syntax highlighting and formatting capabilities.
            </p>
          </div>
          
          <JsonViewer defaultJson={sampleJson} />
        </div>
        
        {/* Side Ad Banner */}
        <div className="hidden lg:block">
          <AdBanner position="side" className="sticky top-4" />
        </div>
      </div>
      
      {/* Bottom Ad Banner */}
      <div className="w-full p-4">
        <AdBanner position="bottom" />
      </div>
    </div>
  );
};

export default Index;
