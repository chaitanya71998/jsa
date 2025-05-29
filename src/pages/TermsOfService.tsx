import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" /> Back
      </Button>
      
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">Last updated: May 29, 2025</p>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using JSONToolbox (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. 
            If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="mb-4">
            JSONToolbox provides an online platform for formatting, validating, and viewing JSON data. 
            The service is provided "as is" and JSONToolbox assumes no responsibility for timeliness, 
            deletion, or failure to store any user communications or personalization settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
          <p className="mb-4">
            As a user of the Service, you agree to the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>You will not use the Service for any illegal or unauthorized purpose</li>
            <li>You will not upload or transmit any viruses or malicious code</li>
            <li>You will not attempt to gain unauthorized access to our systems or networks</li>
            <li>You will not use the Service to process or transmit any sensitive personal data</li>
            <li>You are responsible for maintaining the confidentiality of your account information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            The Service and its original content, features, and functionality are and will remain the 
            exclusive property of JSONToolbox and its licensors. The Service is protected by copyright, 
            trademark, and other laws of both the United States and foreign countries.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall JSONToolbox, nor its directors, employees, partners, agents, suppliers, or affiliates, 
            be liable for any indirect, incidental, special, consequential or punitive damages, including without 
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access 
            to or use of or inability to use the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            We will provide notice of any changes by posting the new Terms on this page and updating 
            the "Last updated" date at the top of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at support@jsontoolbox.app
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
