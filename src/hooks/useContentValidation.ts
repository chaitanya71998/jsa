
import { useMemo } from 'react';

interface ContentValidationResult {
  hasValidContent: boolean;
  contentLength: number;
  isContentSubstantial: boolean;
}

export const useContentValidation = (
  jsonInput: string,
  parsedJson: any,
  error: string | null
): ContentValidationResult => {
  return useMemo(() => {
    // No content if there's an error or no parsed JSON
    if (error || !parsedJson) {
      return {
        hasValidContent: false,
        contentLength: 0,
        isContentSubstantial: false,
      };
    }

    // Calculate content length based on formatted JSON
    const formattedJson = JSON.stringify(parsedJson, null, 2);
    const contentLength = formattedJson.length;
    
    // Content is substantial if:
    // 1. JSON has meaningful structure (not just empty object/array)
    // 2. Formatted content is at least 100 characters
    // 3. Has nested properties or array items
    const hasStructure = 
      (typeof parsedJson === 'object' && parsedJson !== null) &&
      (Array.isArray(parsedJson) ? parsedJson.length > 0 : Object.keys(parsedJson).length > 0);
    
    const isContentSubstantial = hasStructure && contentLength >= 100;

    return {
      hasValidContent: !!parsedJson && !error,
      contentLength,
      isContentSubstantial,
    };
  }, [jsonInput, parsedJson, error]);
};
