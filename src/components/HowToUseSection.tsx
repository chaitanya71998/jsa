
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson, Upload, Globe, Eye, Download, Code } from 'lucide-react';

const HowToUseSection: React.FC = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">How to Use Our JSON Formatter & Viewer</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <FileJson className="mr-2 h-5 w-5" />
              Input Your JSON
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Paste your JSON directly into the input field. Our tool will automatically validate it and show any errors.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Upload className="mr-2 h-5 w-5" />
              Upload a File
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Upload a .json file from your computer by clicking the "Import" tab and selecting your file.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              Fetch from URL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Enter a URL that returns JSON data and click "Fetch JSON" to import it directly.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              View and Explore
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Use the tree view to expand and collapse sections. Click on any node to see its path.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Code className="mr-2 h-5 w-5" />
              Format or Minify
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Use the format button to beautify your JSON with proper indentation or minify it to remove whitespace.
            </CardDescription>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Download className="mr-2 h-5 w-5" />
              Save Your Work
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Copy the formatted JSON to clipboard or download it as a file for later use.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowToUseSection;
