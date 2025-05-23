
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface JsonNodeProps {
  data: any;
  name?: string | number;
  isRoot?: boolean;
  level?: number;
  path?: string;
  onSelect?: (path: string) => void;
}

const JsonNode: React.FC<JsonNodeProps> = ({ 
  data, 
  name, 
  isRoot = false, 
  level = 0,
  path = '', 
  onSelect
}) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  
  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  // Calculate current node path
  const currentPath = isRoot 
    ? '$' 
    : path 
      ? (typeof name === 'number' || !isNaN(Number(name)) 
          ? `${path}[${name}]` 
          : `${path}.${name}`)
      : name !== undefined 
        ? (typeof name === 'number' || !isNaN(Number(name)) 
            ? `$[${name}]` 
            : `$.${name}`)
        : '$';

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelect) {
      onSelect(currentPath);
    }
  };

  // Determine the type of data
  const type = Array.isArray(data) ? 'array' : typeof data;
  const isEmpty = type === 'array' || type === 'object' ? Object.keys(data).length === 0 : false;
  
  // Get count of items for arrays/objects
  const itemCount = type === 'array' || type === 'object' ? Object.keys(data).length : 0;
  
  // Render based on data type
  if (type === 'object' || type === 'array') {
    const bracketOpen = type === 'array' ? '[' : '{';
    const bracketClose = type === 'array' ? ']' : '}';
    
    return (
      <div className="relative" onClick={handleClick}>
        <div 
          onClick={toggleExpand} 
          className="cursor-pointer hover:bg-muted/50 rounded px-1 py-0.5 -ml-1 flex items-center"
        >
          {!isRoot && name !== undefined && (
            <>
              <span className="json-key">{typeof name === 'string' ? `"${name}"` : name}</span>
              <span className="json-colon">:</span>
            </>
          )}
          
          <span className="json-toggle mr-1">
            {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
          </span>
          
          <span className="json-bracket">{bracketOpen}</span>
          
          {!isExpanded && (
            <span className="opacity-60 ml-1">
              {isEmpty ? '' : (
                <span className="text-muted-foreground text-xs">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </span>
              )}
              <span className="json-bracket ml-1">{bracketClose}</span>
            </span>
          )}
        </div>
        
        {isExpanded && (
          <>
            <div className={cn("pl-6", !isEmpty && "border-l border-gray-700/30 ml-2")}>
              {Object.keys(data).map((key, index) => (
                <div key={key} className="py-0.5">
                  <JsonNode 
                    data={data[key]} 
                    name={type === 'object' ? key : index} 
                    level={level + 1}
                    path={currentPath}
                    onSelect={onSelect}
                  />
                </div>
              ))}
            </div>
            <div>
              <span className="json-bracket">{bracketClose}</span>
            </div>
          </>
        )}
      </div>
    );
  } else {
    // Primitive types rendering
    return (
      <div 
        className="inline-flex items-start hover:bg-muted/50 rounded px-1 py-0.5 -ml-1" 
        onClick={handleClick}
      >
        {name !== undefined && (
          <>
            <span className="json-key">{typeof name === 'string' ? `"${name}"` : name}</span>
            <span className="json-colon">:</span>
          </>
        )}
        
        {type === 'string' ? (
          <span className="json-string">"{data}"</span>
        ) : type === 'number' ? (
          <span className="json-number">{data}</span>
        ) : type === 'boolean' ? (
          <span className="json-boolean">{data.toString()}</span>
        ) : (
          <span className="json-null">null</span>
        )}
      </div>
    );
  }
};

export default JsonNode;
