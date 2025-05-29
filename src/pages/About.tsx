import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, Zap, Shield, Users, Terminal, FileJson } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Powerful JSON Processing",
      description: "Format, validate, and beautify JSON with our advanced processing engine that handles even the most complex data structures."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description: "Experience near-instant formatting and validation thanks to our optimized processing algorithms."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Private",
      description: "Your data stays in your browser. We don't store your JSON data on our servers."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Built for Developers",
      description: "Designed with developers in mind, our tool integrates seamlessly into your workflow."
    },
    {
      icon: <Terminal className="h-8 w-8 text-primary" />,
      title: "API Integration",
      description: "Easily integrate JSONToolbox into your applications with our developer-friendly API."
    },
    {
      icon: <FileJson className="h-8 w-8 text-primary" />,
      title: "Multiple Formats",
      description: "Support for various JSON formats including minified, pretty-printed, and URL-encoded."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" /> Back
      </Button>
      
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About JSONToolbox</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The ultimate JSON toolkit for developers, data analysts, and anyone working with JSON data.
        </p>
      </div>

      <div className="bg-card p-8 rounded-lg shadow-sm mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            At JSONToolbox, we believe that working with JSON data should be simple, efficient, and enjoyable. 
            Our mission is to provide developers with the best tools to handle JSON data effectively, 
            whether you're debugging an API response, analyzing data, or building applications.
          </p>
          <p>
            Founded in 2024, JSONToolbox has grown to become a trusted resource for thousands of developers 
            worldwide. Our commitment to quality, performance, and user experience drives us to continuously 
            improve and expand our toolset.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose JSONToolbox?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Our Commitment to Quality</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            We're committed to providing the highest quality JSON tools available. Our team continuously 
            monitors industry standards and user feedback to ensure our tools meet the evolving needs of developers.
          </p>
          <p>
            Have a suggestion or found a bug? We'd love to hear from you! 
            Contact our support team at support@jsontoolbox.app
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
