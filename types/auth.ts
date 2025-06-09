// types/auth.ts
export interface SignupData {
  email: string;
  companyName: string;
}

export interface QuestionnaireData {
  businessStage: 'starting' | 'growing' | 'stuck' | '';
  mainChallenge: string;
  helpType: 'outside' | 'inhouse' | 'mixed' | '';
  teamInfo: string;
  successVision: string;
  industry: 'tech' | 'retail' | 'medtech' | '';
  position: string;
}

export interface UserProfile extends SignupData, QuestionnaireData {}

export type AuthStep = 'signup' | 'questionnaire' | 'landing';

export type Industry = 'tech' | 'retail' | 'medtech';