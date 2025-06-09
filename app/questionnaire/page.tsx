'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface QuestionnaireData {
  businessStage: string;
  mainChallenge: string;
  helpType: string;
  teamInfo: string;
  successVision: string;
  industry: string;
  position: string;
}

const QuestionnairePage: React.FC = () => {
  const router = useRouter();
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

  const questions = [
    {
      id: 'businessStage',
      question: 'Where is your business?',
      options: ['Starting', 'Growing', 'Feeling Stuck']
    },
    {
      id: 'mainChallenge',
      question: "What's one challenge you wish you could fix today?",
      type: 'text'
    },
    {
      id: 'helpType',
      question: 'Are you getting outside help, or doing everything in-house?',
      options: ['Outside Help', 'In-house', 'Both']
    },
    {
      id: 'teamInfo',
      question: 'How big is your team, and who do you serve?',
      type: 'text'
    },
    {
      id: 'successVision',
      question: 'If we worked together, what would success look like in 90 days?',
      type: 'text'
    },
    {
      id: 'industry',
      question: `Industry you're working in`,
      options: ['Tech', 'Retail', 'Medical Technology']
    },
    {
      id: 'position',
      question: 'Your position',
      type: 'text'
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: answer
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Handle completion
      handleCompletion();
    }
  };

  const handleCompletion = () => {
    // Store all answers
    localStorage.setItem('questionnaireData', JSON.stringify(answers));

    // Redirect based on industry
    switch (answers.industry.toLowerCase()) {
      case 'tech':
        router.push('/landing/tech');
        break;
      case 'retail':
        router.push('/landing/retail');
        break;
      case 'medical technology':
        router.push('/landing/medtech');
        break;
      default:
        router.push('/landing/general');
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-pink-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentQ.question}</h2>
        </div>

        {currentQ.options ? (
          <div className="space-y-4">
            {currentQ.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full p-4 text-left border rounded-xl hover:border-pink-500 hover:bg-pink-50 transition-all duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <input
            type="text"
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-pink-500"
            placeholder="Type your answer here..."
            onKeyPress={(e) => {
              if (e.key === 'Enter' && (e.target as HTMLInputElement).value) {
                handleAnswer((e.target as HTMLInputElement).value);
                (e.target as HTMLInputElement).value = '';
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionnairePage;