
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

const JsonExamplesSection: React.FC = () => {
  const examples = [
    {
      title: "User Profile",
      description: "A typical user profile object with nested personal information",
      json: {
        "id": 12345,
        "username": "john_doe",
        "profile": {
          "firstName": "John",
          "lastName": "Doe",
          "email": "john.doe@example.com",
          "dateOfBirth": "1990-05-15",
          "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zipCode": "12345",
            "country": "USA"
          }
        },
        "preferences": {
          "theme": "dark",
          "notifications": true,
          "language": "en-US"
        },
        "lastLogin": "2024-01-15T10:30:00Z"
      }
    },
    {
      title: "API Response",
      description: "Example API response with pagination and data array",
      json: {
        "status": "success",
        "data": [
          {
            "id": 1,
            "title": "Getting Started with JSON",
            "author": "Jane Smith",
            "publishedAt": "2024-01-10T08:00:00Z",
            "tags": ["json", "tutorial", "beginner"]
          },
          {
            "id": 2,
            "title": "Advanced JSON Techniques",
            "author": "Bob Johnson",
            "publishedAt": "2024-01-12T14:30:00Z",
            "tags": ["json", "advanced", "tips"]
          }
        ],
        "pagination": {
          "currentPage": 1,
          "totalPages": 10,
          "totalItems": 95,
          "itemsPerPage": 10
        },
        "meta": {
          "timestamp": "2024-01-15T12:00:00Z",
          "version": "1.2.0"
        }
      }
    },
    {
      title: "Configuration File",
      description: "Application configuration with various data types",
      json: {
        "appName": "My Application",
        "version": "2.1.0",
        "environment": "production",
        "database": {
          "host": "localhost",
          "port": 5432,
          "name": "myapp_db",
          "ssl": true,
          "maxConnections": 100
        },
        "features": {
          "authentication": true,
          "caching": true,
          "analytics": false,
          "debugging": false
        },
        "supportedLanguages": ["en", "es", "fr", "de"],
        "cache": {
          "ttl": 3600,
          "maxSize": "100MB",
          "strategy": "LRU"
        }
      }
    }
  ];

  const copyExample = (example: any) => {
    const jsonString = JSON.stringify(example.json, null, 2);
    navigator.clipboard.writeText(jsonString);
    toast.success(`${example.title} example copied to clipboard`);
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">JSON Examples & Use Cases</h2>
      <p className="text-muted-foreground mb-6">
        Explore these real-world JSON examples to understand common data structures and learn best practices 
        for organizing your JSON data. Click any example to copy it and paste it into the formatter above.
      </p>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
        {examples.map((example, index) => (
          <Card key={index} className="relative">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {example.description}
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyExample(example)}
                  className="flex-shrink-0"
                >
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{JSON.stringify(example.json, null, 2)}</code>
              </pre>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">JSON Best Practices</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Use meaningful key names that clearly describe the data</li>
          <li>• Follow consistent naming conventions (camelCase or snake_case)</li>
          <li>• Keep nesting levels reasonable for readability</li>
          <li>• Use appropriate data types (strings, numbers, booleans, arrays, objects)</li>
          <li>• Include metadata like timestamps and version information when relevant</li>
          <li>• Validate your JSON structure before using it in production</li>
        </ul>
      </div>
    </div>
  );
};

export default JsonExamplesSection;
