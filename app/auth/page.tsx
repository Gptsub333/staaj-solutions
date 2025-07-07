'use client';

import React, { useState, useEffect } from 'react';
import SignupForm from '@/components/SignupForm';
import QuestionnaireFlow from '@/components/QuestionnaireFlow';
import type { SignupData, QuestionnaireData, AuthStep } from '../../types/auth';
import { AuthLayout } from '@/components/AuthLayout';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AuthPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AuthStep>('signup');
  const [signupData, setSignupData] = useState<SignupData>({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
  });
  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireData>({
    businessStage: '',
    mainChallenge: '',
    helpType: '',
    teamInfo: '',
    successVision: '',
    industry: '',
    position: ''
  });
  const router = useRouter();

  const handleSignupComplete = (data: SignupData) => {
    setSignupData(data);
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireComplete = (data: QuestionnaireData) => {
  setQuestionnaireData(data);

  const summary = `
Business Stage: ${data.businessStage || 'N/A'}
Main Challenge: ${data.mainChallenge || 'N/A'}
Help Type: ${data.helpType || 'N/A'}
Team Info: ${data.teamInfo || 'N/A'}
Success Vision: ${data.successVision || 'N/A'}
Industry: ${data.industry || 'N/A'}
Position: ${data.position || 'N/A'}
  `.trim();

  const payload = {
    ...signupData,
    businessStage: summary,
  };

  const mailPayload = {
    firstName: signupData.firstName,
    lastName: signupData.lastName,
    email: signupData.email,
    subject: "Welcome to STAAJ!",
    message: `Hi ${signupData.firstName},\n\nThank you for signing up with STAAJ! We're excited to have you on board.\n\nOur team will reach out to you soon, and in the meantime, feel free to schedule a discovery call:\nhttps://meetings.hubspot.com/booking-staaj?uuid=f8f41247-2e47-4139-8985-27421d59959a\n\nBest,\nThe STAAJ Team`
  };

  // Trigger API calls in background — don't wait
  axios.post('/api/signup', payload).catch(console.error);
  axios.post('/api/mail', mailPayload).catch(console.error);

  setCurrentStep('landing');
  router.push('/landingpage'); // Go immediately
};


  
 

  return (
    <AuthLayout>
      {/* Container with consistent top alignment */}
      <div className="flex justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          {currentStep === 'signup' && (
            <div className="w-full">
              <SignupForm onComplete={handleSignupComplete} />
            </div>
          )}
          
          {currentStep === 'questionnaire' && (
            <div className="w-full">
              <QuestionnaireFlow
                onComplete={handleQuestionnaireComplete}
                userEmail={signupData.email}
              />
            </div>
          )}
          
          {currentStep === 'landing' && (
  <div className="flex justify-center">
    <div className="relative flex flex-col items-center justify-center px-6 py-12 rounded-2xl shadow-xl bg-white/80 backdrop-blur-md border border-gray-200 max-w-md w-full">
      {/* Animated loading spinner */}
      <div className="mb-6">
        <svg className="animate-spin h-12 w-12 text-pink-600" viewBox="0 0 50 50">
          <circle
            className="opacity-30"
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="5"
            fill="none"
          />
          <circle
            className="opacity-90"
            cx="25"
            cy="25"
            r="20"
            stroke="url(#loading-gradient)"
            strokeWidth="5"
            fill="none"
            strokeDasharray="31.4 94.2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="loading-gradient" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a855f7" />
              <stop offset="1" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
        We're on it.
      </h2>
      <p className="text-base text-gray-600 mb-4 text-center max-w-xs">
        Your journey just got a little more exciting. Keep an eye on your inbox for next steps. We can't wait to help you build what's next.
      </p>
    </div>
  </div>
)}
        </div>
      </div>
    </AuthLayout>
  );
};

export default AuthPage;