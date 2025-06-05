// app/category/[slug]/not-found.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Category Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The category you&apos;re looking for doesn&apos;t exist. Please take our questionnaire to find the right category for your business.
        </p>
        <div className="space-y-4">
          <Link
            href="/questionnaire"
            className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-200"
          >
            Take Questionnaire
          </Link>
          <br />
          <Link
            href="/"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;