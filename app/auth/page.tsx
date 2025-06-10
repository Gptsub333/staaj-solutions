'use client';

import React, { useState, useEffect } from 'react';
import SignupForm from '@/components/SignupForm';
import QuestionnaireFlow from '@/components/QuestionnaireFlow';
// import TechLanding from '../tech/page';
import type { SignupData, QuestionnaireData, AuthStep } from '../../types/auth';
import { AuthLayout } from '@/components/AuthLayout';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const AuthPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AuthStep>('signup');
  const [signupData, setSignupData] = useState<SignupData>({
    email: '',
    companyName: ''
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
    console.log('Signup data:', data);
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireComplete = (data: QuestionnaireData) => {
    setQuestionnaireData(data);
    console.log('Questionnaire data:', data);
    setCurrentStep('landing'); // triggers HubSpot submission
  };

  useEffect(() => {
    const submitToHubspot = async () => {
      if (currentStep === 'landing') {
        try {
          const payload = {
            ...signupData,
            businessStage: questionnaireData.businessStage,
            mainChallenge: questionnaireData.mainChallenge,
            helpType: questionnaireData.helpType,
            teamInfo: questionnaireData.teamInfo,
            successVision: questionnaireData.successVision,
            industry_quest: questionnaireData.industry, // mapped as industry_quest for API
            position: questionnaireData.position
          };

          const response = await axios.post('/api/signup', payload);

          console.log('HubSpot API success:', response.data);

          if (questionnaireData.industry === 'retail') {
            router.push('/retail');
          } else if (questionnaireData.industry === 'medtech') {
            router.push('/medtech');
          } else {
            router.push('/tech'); // default or fallback
          }

        } catch (error: any) {
          console.error('HubSpot API error:', error.response?.data || error.message);
        }
      }
    };

    submitToHubspot();
  }, [currentStep]);

  return (
    <AuthLayout>
      {currentStep === 'signup' && <SignupForm onComplete={handleSignupComplete} />}
      {currentStep === 'questionnaire' && (
        <QuestionnaireFlow 
          onComplete={handleQuestionnaireComplete}
          userEmail={signupData.email}
        />
      )}
      {/* Optionally render a loader or confirmation for landing */}
      {currentStep === 'landing' && (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Thank you! Redirecting to your dashboard...</h2>
        </div>
      )}
    </AuthLayout>
  );
};

export default AuthPage;
