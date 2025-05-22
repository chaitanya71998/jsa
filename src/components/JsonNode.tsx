
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface JsonNodeProps {
  data: any;
  name?: string;
  isRoot?: boolean;
  level?: number;
}

const JsonNode: React.FC<JsonNodeProps> = ({ 
  data, 
  name, 
  isRoot = false, 
  level = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  
  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  // Determine the type of data
  const type = Array.isArray(data) ? 'array' : typeof data;
  const isEmpty = type === 'array' || type === 'object' ? Object.keys(data).length === 0 : false;
  
  // Render based on data type
  if (type === 'object' || type === 'array') {
    const bracketOpen = type === 'array' ? '[' : '{';
    const bracketClose = type === 'array' ? ']' : '}';
    
    return (
      <div className="relative">
        <div onClick={toggleExpand} className="cursor-pointer">
          {!isRoot && name !== undefined && (
            <>
              <span className="json-key">"{name}"</span>
              <span className="json-colon">:</span>
            </>
          )}
          <span className="json-toggle">{isExpanded ? '▼' : '►'}</span>
          <span className="json-bracket">{bracketOpen}</span>
          
          {!isExpanded && (
            <span className="opacity-60">
              {isEmpty ? '' : '...'}
              <span className="json-bracket">{bracketClose}</span>
            </span>
          )}
        </div>
        
        {isExpanded && (
          <>
            <div className={cn("pl-6", !isEmpty && "border-l border-gray-700 ml-2")}>
              {Object.keys(data).map((key, index) => (
                <div key={key} className="py-0.5">
                  <JsonNode 
                    data={data[key]} 
                    name={type === 'object' ? key : undefined} 
                    level={level + 1}
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
      <div className="inline-flex items-start">
        {name !== undefined && (
          <>
            <span className="json-key">"{name}"</span>
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
