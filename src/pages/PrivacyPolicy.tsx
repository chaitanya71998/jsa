import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
      
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last updated: May 29, 2025</p>
      
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to JSONToolbox. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we handle your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We collect several different types of information for various purposes to provide and improve our service to you.
          </p>
          <h3 className="text-xl font-medium mb-2">Personal Data</h3>
          <p className="mb-4">
            While using our service, we may ask you to provide us with certain personally identifiable information 
            that can be used to contact or identify you ("Personal Data").
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">
            JSONToolbox uses the collected data for various purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features of our service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our service</li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="mb-4">
            The security of your data is important to us, but remember that no method of transmission over the 
            Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable 
            means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at privacy@jsontoolbox.app
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
