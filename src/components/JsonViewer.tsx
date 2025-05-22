
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import JsonNode from './JsonNode';
import { toast } from 'sonner';
import { Copy, FileJson, Code, Check, Download, Upload, Globe, Minimize, Expand, Eye } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

interface JsonViewerProps {
  defaultJson?: string;
  className?: string;
}

const JsonViewer: React.FC<JsonViewerProps> = ({ defaultJson = '', className = '' }) => {
  const [jsonInput, setJsonInput] = useState(defaultJson);
  const [parsedJson, setParsedJson] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('viewer');
  const [copied, setCopied] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [isMinified, setIsMinified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPath, setSelectedPath] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (jsonInput) {
      tryParseJson(jsonInput);
    }
  }, []);

  const tryParseJson = (input: string) => {
    try {
      const trimmed = input.trim();
      if (!trimmed) {
        setParsedJson(null);
        setError(null);
        return;
      }
      
      const parsed = JSON.parse(trimmed);
      setParsedJson(parsed);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setParsedJson(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setJsonInput(value);
    tryParseJson(value);
  };

  const formatJson = () => {
    if (parsedJson) {
      const formatted = JSON.stringify(parsedJson, null, 2);
      setJsonInput(formatted);
      setIsMinified(false);
      toast.success('JSON formatted successfully');
    }
  };

  const minifyJson = () => {
    if (parsedJson) {
      const minified = JSON.stringify(parsedJson);
      setJsonInput(minified);
      setIsMinified(true);
      toast.success('JSON minified successfully');
    }
  };

  const copyToClipboard = () => {
    if (parsedJson) {
      const textToCopy = isMinified 
        ? JSON.stringify(parsedJson) 
        : JSON.stringify(parsedJson, null, 2);
      
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      toast.success('JSON copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const downloadJson = () => {
    if (parsedJson) {
      const textToDownload = isMinified 
        ? JSON.stringify(parsedJson) 
        : JSON.stringify(parsedJson, null, 2);
      
      const blob = new Blob([textToDownload], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'formatted-json.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success('JSON file downloaded');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setJsonInput(content);
      tryParseJson(content);
      setIsLoading(false);
      setActiveTab('viewer');
      toast.success(`File "${file.name}" loaded successfully`);
    };
    
    reader.onerror = () => {
      setIsLoading(false);
      toast.error('Error reading file');
    };
    
    reader.readAsText(file);
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const fetchJsonFromUrl = async () => {
    if (!urlInput.trim()) {
      toast.error('Please enter a URL');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(urlInput);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const content = await response.text();
      setJsonInput(content);
      tryParseJson(content);
      setActiveTab('viewer');
      toast.success('JSON fetched from URL successfully');
    } catch (err) {
      toast.error(`Error fetching JSON: ${(err as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNodeSelect = (path: string) => {
    setSelectedPath(path);
  };

  return (
    <div className={`bg-card rounded-lg shadow-lg ${className}`}>
      <div className="p-4 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center">
          <FileJson className="mr-2 h-5 w-5" />
          <h1 className="text-lg font-semibold">JSON Formatter & Viewer</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle 
            aria-label="Toggle minified view"
            pressed={isMinified}
            onPressedChange={setIsMinified}
            className="mr-2"
          >
            <Minimize className="h-4 w-4 mr-1" /> Minify
          </Toggle>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={formatJson} 
            disabled={!parsedJson || (activeTab !== 'input' && activeTab !== 'viewer')}
          >
            <Code className="w-4 h-4 mr-1" /> Format
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={minifyJson} 
            disabled={!parsedJson || (activeTab !== 'input' && activeTab !== 'viewer')}
          >
            <Minimize className="w-4 h-4 mr-1" /> Minify
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={copyToClipboard} 
            disabled={!parsedJson}
          >
            {copied ? (
              <><Check className="w-4 h-4 mr-1" /> Copied</>
            ) : (
              <><Copy className="w-4 h-4 mr-1" /> Copy</>
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={downloadJson}
            disabled={!parsedJson}
          >
            <Download className="w-4 h-4 mr-1" /> Download
          </Button>
        </div>
      </div>
      
      <Tabs 
        defaultValue="viewer" 
        className="w-full" 
        onValueChange={(val) => setActiveTab(val)}
      >
        <div className="p-4">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="viewer"><Eye className="w-4 h-4 mr-1" /> Viewer</TabsTrigger>
            <TabsTrigger value="input"><Code className="w-4 h-4 mr-1" /> JSON Input</TabsTrigger>
            <TabsTrigger value="import"><Upload className="w-4 h-4 mr-1" /> Import</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="viewer" className="p-0">
          {selectedPath && (
            <div className="px-4 py-2 bg-muted/40 border-b font-code text-sm overflow-x-auto">
              <span className="text-muted-foreground mr-2">Path:</span>
              <span>{selectedPath}</span>
            </div>
          )}
          
          {error ? (
            <div className="p-4 text-red-500 bg-red-50 dark:bg-red-900/20 rounded m-4">
              <p className="font-semibold">Error parsing JSON:</p>
              <p className="font-code text-sm">{error}</p>
            </div>
          ) : parsedJson ? (
            <div className="json-viewer p-4 m-4 font-code text-sm overflow-auto max-h-[60vh]">
              <JsonNode 
                data={parsedJson} 
                isRoot={true} 
                onSelect={handleNodeSelect}
              />
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              <p>Enter valid JSON in the input tab to view it here.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="input" className="p-4">
          <Textarea 
            placeholder="Paste your JSON here..."
            className="font-code min-h-[300px]"
            value={jsonInput}
            onChange={handleInputChange}
          />
          {error && (
            <div className="text-red-500 mt-2 text-sm">
              {error}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="import" className="p-4">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-2">Upload JSON File</h2>
              <div className="flex items-center gap-2">
                <Button onClick={triggerFileUpload} disabled={isLoading}>
                  <Upload className="w-4 h-4 mr-1" /> Select File
                </Button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileUpload} 
                  accept=".json" 
                  className="hidden" 
                />
                <span className="text-sm text-muted-foreground">Accepts .json files</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h2 className="text-lg font-medium mb-2">Import from URL</h2>
              <div className="flex flex-col md:flex-row gap-2">
                <Input
                  placeholder="https://example.com/data.json"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={fetchJsonFromUrl} disabled={isLoading}>
                  <Globe className="w-4 h-4 mr-1" /> Fetch JSON
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JsonViewer;
