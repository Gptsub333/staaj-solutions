'use client';

import React, { useState } from 'react';
import SignupForm from '@/components/SignupForm';
import QuestionnaireFlow from '@/components/QuestionnaireFlow';
import TechLanding from '../tech/page';
// import RetailLanding from './components/LandingPages/RetailLanding';
// import MedTechLanding from './components/LandingPages/MedTechLanding';
import type { SignupData, QuestionnaireData, AuthStep } from '../../types/auth';
import { AuthLayout } from '@/components/AuthLayout';

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

  const handleSignupComplete = (data: SignupData) => {
    setSignupData(data);
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireComplete = (data: QuestionnaireData) => {
    setQuestionnaireData(data);
    setCurrentStep('landing');
  };

  const renderLandingPage = () => {
    switch (questionnaireData.industry) {
      case 'tech':
        return <TechLanding userProfile={{ ...signupData, ...questionnaireData }} />;
      // case 'retail':
      //   return <RetailLanding userProfile={{ ...signupData, ...questionnaireData }} />;
      // case 'medtech':
      //   return <MedTechLanding userProfile={{ ...signupData, ...questionnaireData }} />;
      default:
        return <TechLanding userProfile={{ ...signupData, ...questionnaireData }} />;
    }
  };

  return (
    <AuthLayout>
      {currentStep === 'signup' && <SignupForm onComplete={handleSignupComplete} />}
      {currentStep === 'questionnaire' && (
        <QuestionnaireFlow 
          onComplete={handleQuestionnaireComplete}
          userEmail={signupData.email}
        />
      )}
      {currentStep === 'landing' && renderLandingPage()}
    </AuthLayout>
  );
};

export default AuthPage;