
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  return (
    <div className="py-8 px-4 bg-card rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="what-is-json">
          <AccordionTrigger>What is a JSON formatter?</AccordionTrigger>
          <AccordionContent>
            A JSON formatter is a tool that helps you format and beautify JSON data. It takes raw, 
            minified, or poorly formatted JSON and transforms it into a structured, readable format 
            with proper indentation and line breaks. This makes it easier to read, analyze, and 
            debug JSON data, especially when working with large or complex data structures.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="why-use-viewer">
          <AccordionTrigger>Why use a JSON viewer?</AccordionTrigger>
          <AccordionContent>
            A JSON viewer provides a visual representation of JSON data with interactive features like 
            collapsible nodes, syntax highlighting, and path tracking. This makes it easier to navigate 
            and understand complex JSON structures compared to reading raw text. JSON viewers are 
            especially useful for developers working with APIs, configuration files, or any data in 
            JSON format.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="difference-formatter-viewer">
          <AccordionTrigger>What's the difference between a JSON formatter and a JSON viewer?</AccordionTrigger>
          <AccordionContent>
            A JSON formatter focuses on transforming the text structure of JSON data by adding proper 
            indentation and line breaks. A JSON viewer, on the other hand, provides interactive features 
            for exploring the data, such as expanding/collapsing nodes, syntax highlighting, and often 
            a tree view representation. Our tool combines both capabilities, allowing you to format 
            your JSON and interactively explore it in the same interface.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="json-validator">
          <AccordionTrigger>What is JSON validation?</AccordionTrigger>
          <AccordionContent>
            JSON validation is the process of checking if a given string conforms to the JSON syntax rules. 
            Valid JSON must follow specific structural rules, like having properly matched quotes, 
            correctly formatted arrays and objects, and appropriate use of commas. Our tool automatically 
            validates your JSON and provides clear error messages if any syntax issues are found, 
            helping you identify and fix problems quickly.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="json-minify">
          <AccordionTrigger>Why would I want to minify my JSON?</AccordionTrigger>
          <AccordionContent>
            Minifying JSON removes all unnecessary whitespace and line breaks, reducing the file size 
            without changing the data. This is particularly useful when you need to optimize network 
            transfers, reduce storage requirements, or improve parsing performance in applications. 
            Minified JSON is perfectly valid but harder for humans to read, which is why we offer both 
            minification and formatting options.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqSection;
