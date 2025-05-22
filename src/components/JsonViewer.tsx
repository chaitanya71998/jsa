
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JsonNode from './JsonNode';
import { toast } from 'sonner';
import { Copy, FileJson, Code, Check } from 'lucide-react';

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
      toast.success('JSON formatted successfully');
    }
  };

  const copyToClipboard = () => {
    if (parsedJson) {
      navigator.clipboard.writeText(JSON.stringify(parsedJson, null, 2));
      setCopied(true);
      toast.success('JSON copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`bg-card rounded-lg shadow-lg ${className}`}>
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center">
          <FileJson className="mr-2 h-5 w-5" />
          <h2 className="text-lg font-semibold">JSON Viewer</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={formatJson} 
            disabled={!parsedJson || activeTab !== 'input'}
          >
            <Code className="w-4 h-4 mr-1" /> Format
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
        </div>
      </div>
      
      <Tabs 
        defaultValue="viewer" 
        className="w-full" 
        onValueChange={(val) => setActiveTab(val)}
      >
        <div className="p-4">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="viewer">Viewer</TabsTrigger>
            <TabsTrigger value="input">JSON Input</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="viewer" className="p-0">
          {error ? (
            <div className="p-4 text-red-500 bg-red-50 dark:bg-red-900/20 rounded m-4">
              <p className="font-semibold">Error parsing JSON:</p>
              <p className="font-code text-sm">{error}</p>
            </div>
          ) : parsedJson ? (
            <div className="json-viewer p-4 m-4 font-code text-sm overflow-auto max-h-[60vh]">
              <JsonNode data={parsedJson} isRoot={true} />
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
      </Tabs>
    </div>
  );
};

export default JsonViewer;
