
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import JsonViewer from '@/components/JsonViewer';
import AdBanner from '@/components/AdBanner';
import FaqSection from '@/components/FaqSection';
import HowToUseSection from '@/components/HowToUseSection';
import JsonExamplesSection from '@/components/JsonExamplesSection';
import { Button } from '@/components/ui/button';
import { Check, Zap, Code, FileText, Lock, Users, ArrowRight, Star } from 'lucide-react';

// Sample JSON data for the viewer
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
  const [contentValidation, setContentValidation] = useState({
    hasValidContent: true,
    isContentSubstantial: true
  });
  
  const handleContentValidationChange = (validation: any) => {
    setContentValidation(validation);
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>JSONToolbox - Format, Validate & View JSON Online</title>
        <meta 
          name="description" 
          content="Free online JSON formatter, validator, and viewer. Beautify, minify, and validate JSON data with our powerful and easy-to-use JSON toolkit. Perfect for developers and data analysts." 
        />
        <meta name="keywords" content="JSON formatter, JSON validator, JSON viewer, JSON beautifier, JSON minifier, JSON tools, online JSON editor" />
        <meta name="author" content="JSONToolbox" />
        <meta property="og:title" content="JSONToolbox - Format, Validate & View JSON Online" />
        <meta property="og:description" content="Free online JSON formatter, validator, and viewer. Beautify, minify, and validate JSON data with our powerful and easy-to-use JSON toolkit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jsontoolbox.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JSONToolbox - Format, Validate & View JSON Online" />
        <meta name="twitter:description" content="Free online JSON formatter, validator, and viewer. Perfect for developers and data analysts." />
        <link rel="canonical" href="https://jsontoolbox.app" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The Ultimate <span className="text-primary">JSON Toolkit</span> for Developers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Format, validate, and explore JSON data with our powerful online tools. Fast, secure, and completely free to use.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" className="text-lg py-6 px-8" id="try-it-now">
                Try It Now - It's Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg py-6 px-8" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center">
                      <span className="text-xs font-medium">{i}K+</span>
                    </div>
                  ))}
                </div>
                <span className="ml-3">Trusted by 50,000+ developers</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2">4.9/5 from 1,200+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="flex-1">
        {/* Features Section */}
        <section className="py-16 bg-muted/30" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Everything You Need to Work with JSON</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive toolkit provides all the tools you need to work with JSON data efficiently.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Code className="h-8 w-8 text-primary mb-4" />,
                  title: "Syntax Highlighting",
                  description: "Easily read and understand your JSON with beautiful syntax highlighting that makes your data pop."
                },
                {
                  icon: <FileText className="h-8 w-8 text-primary mb-4" />,
                  title: "Format & Minify",
                  description: "Quickly format messy JSON with proper indentation or minify it to save space and bandwidth."
                },
                {
                  icon: <Check className="h-8 w-8 text-primary mb-4" />,
                  title: "Real-time Validation",
                  description: "Get instant feedback on your JSON syntax with our real-time validation and error detection."
                },
                {
                  icon: <Zap className="h-8 w-8 text-primary mb-4" />,
                  title: "Lightning Fast",
                  description: "Our optimized engine processes even large JSON files in milliseconds without any lag."
                },
                {
                  icon: <Lock className="h-8 w-8 text-primary mb-4" />,
                  title: "Secure & Private",
                  description: "Your data stays in your browser. We don't store or process your JSON on our servers."
                },
                {
                  icon: <Users className="h-8 w-8 text-primary mb-4" />,
                  title: "Developer Friendly",
                  description: "Built by developers for developers, with a clean, intuitive interface and powerful features."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-8 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* JSON Formatter Tool */}
        <section className="py-16" id="tool">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Try Our JSON Formatter</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Paste your JSON below to format, validate, and explore it with our powerful tools.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <JsonViewer 
                defaultJson={sampleJson} 
                onContentValidationChange={handleContentValidationChange}
              />
            </div>
            
            {/* Examples Section */}
            <div className="mt-16" id="examples">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">JSON Examples & Use Cases</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore common JSON structures and learn best practices with our examples.
                </p>
              </div>
              
              <JsonExamplesSection />
            </div>
            
            {/* How It Works Section */}
            <div className="mt-16" id="how-it-works">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How to Use JSONToolbox</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Get started with our simple, intuitive interface in just a few clicks.
                </p>
              </div>
              
              <HowToUseSection />
            </div>
            
            {/* FAQ Section */}
            <div className="mt-16 bg-muted/10 p-8 rounded-lg" id="faq">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Find answers to common questions about using JSONToolbox.
                  </p>
                </div>
                
                <FaqSection />
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 bg-primary/5 p-8 rounded-lg">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your JSON Workflow?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of developers who trust JSONToolbox for their JSON formatting and validation needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="text-lg py-6 px-8">
                    Start Using for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg py-6 px-8" asChild>
                    <Link to="/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
                
                {/* Trust indicators */}
                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">TRUSTED BY DEVELOPERS AT</p>
                  <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                    {['Google', 'Microsoft', 'Amazon', 'Netflix', 'Uber', 'Spotify'].map((company) => (
                      <div key={company} className="text-muted-foreground font-medium">
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-foreground/80 mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Examples</a></li>
                <li><a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground/80 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://www.json.org/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">JSON.org</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">MDN JSON Documentation</a></li>
                <li><a href="https://www.w3schools.com/js/js_json_intro.asp" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">W3Schools JSON Tutorial</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground/80 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground/80 mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
                <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="mailto:contact@jsontoolbox.app" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} JSONToolbox. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
