'use client';
import React, { useState, useEffect } from 'react';
import { 
  RocketLaunchIcon, 
  ChartBarIcon, 
  ArrowPathIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ScaleIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  HeartIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import type { QuestionnaireData } from '@/types/auth';
import { AuthLayout } from './AuthLayout';
// Mock data for professional consulting elements
const progressMilestones = [
  { step: 1, title: 'Business Overview', icon: '🏢' },
  { step: 2, title: 'Current Challenges', icon: '🎯' },
  { step: 3, title: 'Support Structure', icon: '👥' },
  { step: 4, title: 'Team & Market', icon: '📊' },
  { step: 5, title: 'Success Vision', icon: '🚀' },
  { step: 6, title: 'Industry Focus', icon: '🏭' },
  { step: 7, title: 'Your Role', icon: '👤' }
];

const insightCards = [
  {
    title: 'Strategic Clarity',
    description: 'Clear roadmap for your business growth',
    percentage: '94%',
    metric: 'of clients see improved direction'
  },
  {
    title: 'Revenue Impact',
    description: 'Measurable business growth results',
    percentage: '2.3x',
    metric: 'average revenue increase'
  },
  {
    title: 'Time to Results',
    description: 'Quick implementation and results',
    percentage: '30',
    metric: 'days to see initial impact'
  }
];



interface QuestionnaireFlowProps {
  onComplete: (data: QuestionnaireData) => void;
  userEmail: string;
}

const QuestionnaireFlow: React.FC<QuestionnaireFlowProps> = ({ onComplete, userEmail }) => {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireData>({
    businessStage: '',
    mainChallenge: '',
    helpType: '',
    teamInfo: '',
    successVision: '',
    industry: '',
    position: ''
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const questions = [
    {
      id: 'businessStage',
      title: 'Where is your business currently?',
      subtitle: 'Help us understand your business journey',
      type: 'multiple-choice',
      options: [
        { 
          value: 'starting', 
          label: 'Just Starting', 
          icon: <RocketLaunchIcon className="w-8 h-8 text-white" />, 
          description: 'Building foundations and finding product-market fit' 
        },
        { 
          value: 'growing', 
          label: 'Growing Fast', 
          icon: <ChartBarIcon className="w-8 h-8 text-white" />, 
          description: 'Scaling operations and expanding market reach' 
        },
        { 
          value: 'stuck', 
          label: 'Feeling Stuck', 
          icon: <ArrowPathIcon className="w-8 h-8 text-white" />, 
          description: 'Facing challenges and need strategic direction' 
        }
      ]
    },
    {
      id: 'mainChallenge',
      title: "What's one challenge you wish you could fix today?",
      subtitle: 'Be specific - this helps us understand your priorities',
      type: 'text',
      placeholder: 'e.g., We struggle with customer acquisition and need a better marketing strategy...'
    },
    {
      id: 'helpType',
      title: 'Are you getting outside help, or doing everything in-house?',
      subtitle: 'Understanding your current support structure',
      type: 'multiple-choice',
      options: [
        { 
          value: 'outside', 
          label: 'Getting Outside Help', 
          icon: <UserGroupIcon className="w-8 h-8 text-white" />, 
          description: 'Working with consultants, agencies, or advisors' 
        },
        { 
          value: 'inhouse', 
          label: 'All In-House', 
          icon: <BuildingOfficeIcon className="w-8 h-8 text-white" />, 
          description: 'Handling everything with internal team' 
        },
        { 
          value: 'mixed', 
          label: 'Mixed Approach', 
          icon: <ScaleIcon className="w-8 h-8 text-white" />, 
          description: 'Combination of internal and external resources' 
        }
      ]
    },
    {
      id: 'teamInfo',
      title: 'How big is your team, and who do you serve?',
      subtitle: 'Help us understand your scale and target market',
      type: 'text',
      placeholder: 'e.g., 15-person team serving small businesses in the healthcare sector...'
    },
    {
      id: 'successVision',
      title: 'If we worked together, what would success look like in 90 days?',
      subtitle: 'Paint a picture of your ideal outcome',
      type: 'text',
      placeholder: 'e.g., 50% increase in qualified leads, streamlined operations, clear growth strategy...'
    },
    {
      id: 'industry',
      title: 'What industry are you in?',
      subtitle: 'This helps us tailor our approach to your sector',
      type: 'multiple-choice',
      options: [
        { 
          value: 'tech', 
          label: 'Technology', 
          icon: <ComputerDesktopIcon className="w-8 h-8 text-white" />, 
          description: 'Software, SaaS, AI, and tech services' 
        },
        { 
          value: 'retail', 
          label: 'Retail & E-commerce', 
          icon: <ShoppingBagIcon className="w-8 h-8 text-white" />, 
          description: 'Online stores, marketplaces, consumer goods' 
        },
        { 
          value: 'medtech', 
          label: 'Medical Technology', 
          icon: <HeartIcon className="w-8 h-8 text-white" />, 
          description: 'Healthcare tech, medical devices, health services' 
        }
      ]
    },
    {
      id: 'position',
      title: "What's your role in the company?",
      subtitle: 'Understanding your decision-making authority',
      type: 'text',
      placeholder: 'e.g., CEO, Founder, Marketing Director, Operations Manager...'
    }
  ];

  const currentQuestionData = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = {
      ...answers,
      [currentQuestionData.id]: value
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      // Complete questionnaire
      setTimeout(() => {
        onComplete(newAnswers);
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1);
        setIsAnimating(false);
      }, 300);
    }
  };


// return (
//     <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//       <div className="bg-white rounded-3xl shadow-2xl border border-pink-100 relative overflow-hidden">
//         {/* Decorative Elements */}
//         <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/5 rounded-full -mr-16 -mt-16"></div>
//         <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-600/5 rounded-full -ml-12 -mb-12"></div>
        
//         <div className="relative p-6 md:p-8">
//           {/* Question Header */}
//           <div className="text-center mb-6">
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-600 rounded-xl mb-3">
//               <span className="text-white text-xl">
//                 {progressMilestones[currentQuestion]?.icon}
//               </span>
//             </div>
//             <div className="mb-3">
//               <span className="inline-flex items-center px-3 py-1 bg-pink-100 rounded-full text-pink-600 text-xs font-medium">
//                 Question {currentQuestion + 1} of {questions.length}
//               </span>
//             </div>
//             <h2 className={`text-2xl font-bold text-gray-800 mb-2 transition-all duration-300 ${
//               isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
//             }`}>
//               {currentQuestionData.title}
//             </h2>
//             <p className={`text-gray-600 text-sm transition-all duration-300 delay-100 ${
//               isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
//             }`}>
//               {currentQuestionData.subtitle}
//             </p>
//           </div>

//           {/* Question Content - Update sizes */}
//           <div className={`mb-6 transition-all duration-300 delay-200 ${
//             isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
//           }`}>
//             {currentQuestionData.type === 'multiple-choice' ? (
//               <div className="space-y-3">
//                 {currentQuestionData.options?.map((option, index) => (
//                   <button
//                     key={option.value}
//                     onClick={() => handleAnswer(option.value)}
//                     className="group relative w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl hover:border-pink-500 hover:bg-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg text-left"
//                     style={{ transitionDelay: `${index * 50}ms` }}
//                   >
//                     <div className="flex items-center space-x-4">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                           {option.icon}
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-base font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
//                           {option.label}
//                         </h3>
//                         <p className="text-xs text-gray-600">
//                           {option.description}
//                         </p>
//                       </div>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//                 ) : (
//                     <div className="space-y-6">
//                       <div className="relative">
//                         <textarea
//                           value={answers[currentQuestionData.id as keyof QuestionnaireData] as string}
//                           onChange={(e) => setAnswers(prev => ({ ...prev, [currentQuestionData.id]: e.target.value }))}
//                           placeholder={currentQuestionData.placeholder}
//                           rows={6}
//                           className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-600/20 focus:border-pink-600 transition-all duration-300 bg-gray-50 hover:bg-white hover:border-gray-300 hover:shadow-lg text-lg placeholder-gray-400 resize-none"
//                         />
//                         <div className="absolute bottom-4 right-4 text-sm text-gray-400">
//                           {(answers[currentQuestionData.id as keyof QuestionnaireData] as string)?.length || 0} characters
//                         </div>
//                       </div>
                      
//                       <div className="flex justify-end">
//                         <button
//                           onClick={() => handleAnswer(answers[currentQuestionData.id as keyof QuestionnaireData] as string)}
//                           disabled={!(answers[currentQuestionData.id as keyof QuestionnaireData] as string)?.trim()}
//                           className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100 disabled:hover:from-pink-600 disabled:hover:to-pink-700 focus:ring-4 focus:ring-pink-600/25"
//                         >
//                           Continue Assessment
//                           <ChevronRightIcon className="w-5 h-5 ml-2" />
//                         </button>
//                       </div>
//                     </div>
//                   )}
//           </div>

//           {/* Navigation - Make it more compact */}
//           <div className="flex items-center justify-between text-sm">
//             {currentQuestion > 0 ? (
//               <button
//                 onClick={handlePrevious}
//                 className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-all duration-300"
//               >
//                 <ChevronLeftIcon className="w-4 h-4 mr-1" />
//                 Previous
//               </button>
//             ) : (
//               <div></div>
//             )}
            
//             <div className="flex items-center space-x-2 text-xs text-gray-500">
//               <span>🔒 Secure</span>
//               <span>•</span>
//               <span>⏱️ {Math.max(1, 7 - currentQuestion)}m left</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Completion Indicator - Make it more compact */}
//       {currentQuestion === questions.length - 1 && (
//         <div className="mt-4 text-center">
//           <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
//             <span className="text-green-600 font-medium text-xs">🎉 Almost done!</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );

  return (
    <div className="lg:h-full flex items-start lg:pt-0"
    style={{ marginTop: "13rem" }} 
  >
    <div className={`transition-all duration-1000 delay-300 w-full ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/5 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-600/5 rounded-full -ml-12 -mb-12"></div>
        
        <div className="relative">
          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm">1</div>
              <span className="ml-2 text-sm text-gray-500">Basic Info</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
              <span className="ml-2 text-sm text-pink-600 font-medium">Assessment</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-200"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm">3</div>
              <span className="ml-2 text-sm text-gray-500">Results</span>
            </div>
          </div>

          {/* Question Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-600 rounded-xl mb-4">
              <span className="text-white text-2xl">
                {progressMilestones[currentQuestion]?.icon}
              </span>
            </div>
            <h2 className={`text-2xl font-bold text-gray-800 mb-2 transition-all duration-300 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              {currentQuestionData.title}
            </h2>
            <p className={`text-gray-600 text-sm transition-all duration-300 delay-100 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
              {currentQuestionData.subtitle}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="text-xs font-medium text-pink-600">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="h-full bg-pink-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Content */}
          <div className={`space-y-4 mb-6 transition-all duration-300 delay-200 ${
            isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            {currentQuestionData.type === 'multiple-choice' ? (
              <div className="space-y-3">
                {currentQuestionData.options?.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="group relative w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl hover:border-pink-500 hover:bg-white transition-all duration-300 text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg flex items-center justify-center">
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{option.label}</h3>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <textarea
                  value={answers[currentQuestionData.id as keyof QuestionnaireData] as string}
                  onChange={(e) => setAnswers(prev => ({ ...prev, [currentQuestionData.id]: e.target.value }))}
                  placeholder={currentQuestionData.placeholder}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-600/20 focus:border-pink-600 bg-gray-50 hover:bg-white text-sm"
                />
                <div className="flex justify-end">
                  <button
                    onClick={() => handleAnswer(answers[currentQuestionData.id as keyof QuestionnaireData] as string)}
                    disabled={!(answers[currentQuestionData.id as keyof QuestionnaireData] as string)?.trim()}
                    className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            {currentQuestion > 0 && (
              <button
                onClick={handlePrevious}
                className="text-gray-600 hover:text-pink-600"
              >
                ← Previous
              </button>
            )}
            <div className="flex items-center space-x-2">
              <span>🔒 Secure</span>
              <span>•</span>
              <span>⏱️ {Math.max(1, 7 - currentQuestion)}m left</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuestionnaireFlow;