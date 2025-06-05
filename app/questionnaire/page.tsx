// app/questionnaire/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, Factory, Users, Code, ArrowRight, Star, TrendingUp, Shield, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Types and Interfaces
interface Option {
  text: string;
  value: 'manufacturing' | 'business' | 'software';
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

interface ProgressBarProps {
  current: number;
  total: number;
}

interface QuestionProps {
  question: string;
  options: Option[];
  onAnswer: (answer: string) => void;
  selectedAnswer?: string;
}

type CategoryType = 'manufacturing' | 'business' | 'software';

interface AnswerCounts {
  manufacturing: number;
  business: number;
  software: number;
}

// Animation wrapper component
const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className={`transform transition-all duration-700 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    } ${className}`}>
      {children}
    </div>
  );
};

// Progress Bar Component
const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage: number = (current / total) * 100;
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div 
        className="bg-gradient-to-r from-pink-600 to-pink-700 h-2 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

// Question Component
const Question: React.FC<QuestionProps> = ({ 
  question, 
  options, 
  onAnswer, 
  selectedAnswer 
}) => {
  return (
    <AnimatedCard className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{question}</h2>
      <div className="space-y-4">
        {options.map((option: Option, index: number) => (
          <button
            key={index}
            onClick={() => onAnswer(option.value)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
              selectedAnswer === option.value
                ? 'border-pink-600 bg-pink-50 text-pink-700'
                : 'border-gray-200 hover:border-pink-300 hover:bg-pink-25'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{option.text}</span>
              {selectedAnswer === option.value && (
                <CheckCircle className="w-5 h-5 text-pink-600" />
              )}
            </div>
          </button>
        ))}
      </div>
    </AnimatedCard>
  );
};

// Main Questionnaire Component
const QuestionnairePage: React.FC = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, CategoryType>>({});

  const questions: Question[] = [
    {
      id: 1,
      question: "What is your primary business focus?",
      options: [
        { text: "Creating physical products or goods", value: "manufacturing" },
        { text: "Providing services or managing operations", value: "business" },
        { text: "Developing software or digital solutions", value: "software" }
      ]
    },
    {
      id: 2,
      question: "What is your biggest operational challenge?",
      options: [
        { text: "Production efficiency and quality control", value: "manufacturing" },
        { text: "Team management and process optimization", value: "business" },
        { text: "Technology implementation and system integration", value: "software" }
      ]
    },
    {
      id: 3,
      question: "What type of expertise do you need most?",
      options: [
        { text: "Supply chain and production optimization", value: "manufacturing" },
        { text: "Strategic planning and organizational development", value: "business" },
        { text: "Technical architecture and development methodologies", value: "software" }
      ]
    },
    {
      id: 4,
      question: "What best describes your current priorities?",
      options: [
        { text: "Improving manufacturing processes and reducing waste", value: "manufacturing" },
        { text: "Enhancing team performance and business strategy", value: "business" },
        { text: "Modernizing technology stack and digital transformation", value: "software" }
      ]
    },
    {
      id: 5,
      question: "What industry sector are you primarily in?",
      options: [
        { text: "Manufacturing, Production, or Industrial", value: "manufacturing" },
        { text: "Service, Retail, or Consulting", value: "business" },
        { text: "Technology, IT, or Digital Services", value: "software" }
      ]
    }
  ];

  const handleAnswer = (answer: string): void => {
    const newAnswers = { ...answers, [currentQuestion]: answer as CategoryType };
    setAnswers(newAnswers);
  };

  const handleNext = (): void => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      categorizeUser();
    }
  };

  const categorizeUser = (): void => {
    const answerCounts: AnswerCounts = { manufacturing: 0, business: 0, software: 0 };
    
    Object.values(answers).forEach((answer: CategoryType) => {
      answerCounts[answer]++;
    });

    const maxCategory: CategoryType = (Object.keys(answerCounts) as CategoryType[]).reduce((a: CategoryType, b: CategoryType) => 
      answerCounts[a] > answerCounts[b] ? a : b
    );

    // Redirect to category-specific landing page
    router.push(`/category/${maxCategory}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <AnimatedCard className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Tell Us About Your Business</h1>
          <p className="text-xl text-gray-600">Help us understand your needs so we can provide the best consulting solutions</p>
        </AnimatedCard>

        <div className="max-w-2xl mx-auto">
          <ProgressBar current={currentQuestion + 1} total={questions.length} />
          
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
            selectedAnswer={answers[currentQuestion]}
          />

          <AnimatedCard delay={300} className="text-center mt-8">
            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center ${
                answers[currentQuestion]
                  ? 'bg-pink-600 text-white hover:bg-pink-700 transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Get My Results'}
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </AnimatedCard>

          <div className="text-center mt-6 text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;