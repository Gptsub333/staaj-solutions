// app/auth/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const AuthPage: React.FC = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    companyName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (isLogin) {
      console.log('Login:', formData);
      // router.push('/dashboard');
    } else {
      console.log('Registration:', formData);
      
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        setIsLoading(false);
        return;
      }
      
      try {
        router.push('/questionnaire');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
    
    setIsLoading(false);
  };

  const toggleAuthMode = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      setIsLogin(!isLogin);
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        companyName: ''
      });
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-50 to-pink-100 rounded-full opacity-30 animate-spin" style={{ animationDuration: '25s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-pink-300 rounded-full opacity-40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main container - horizontal layout */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 transform ${isTransitioning ? 'scale-98 opacity-90' : 'scale-100 opacity-100'}`}>
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            
            {/* Left side - Branding & Info */}
            <div className="relative bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800 flex flex-col justify-center items-center p-12 text-white overflow-hidden">
              {/* Background pattern */}
              <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%272%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20'></div>
              
              {/* Animated geometric shapes */}
              <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white/20 rounded-lg rotate-45 animate-pulse"></div>
              
              <div className="relative z-10 text-center max-w-md">
                {/* Logo section */}
                <div className="mb-8">
                  <div className="relative group inline-block">
                    <div className="w-24 h-24 bg-white rounded-full p-5 shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Image
                        src="/logo.png"
                        alt="Company Logo"
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
                  </div>
                </div>

                {/* Dynamic content based on auth mode */}
                <div className={`transition-all duration-500 transform ${isTransitioning ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'}`}>
                  <h1 className="text-4xl font-bold mb-4 leading-tight">
                    {isLogin ? 'Welcome Back to Excellence' : 'Begin Your Journey'}
                  </h1>
                  <p className="text-pink-100 text-lg mb-8 leading-relaxed">
                    {isLogin 
                      ? 'Continue your consulting journey with our professional platform designed for success.'
                      : 'Join thousands of professionals who trust our consulting platform for their business growth.'
                    }
                  </p>
                </div>

                {/* Feature highlights */}
                <div className={`grid grid-cols-3 gap-6 transition-all duration-700 delay-200 transform ${isTransitioning ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-sm font-medium">Secure</span>
                  </div>
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <span className="text-sm font-medium">Professional</span>
                  </div>
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <span className="text-sm font-medium">Trusted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="flex flex-col justify-center p-12 bg-white">
              <div className="max-w-md mx-auto w-full">
                
                {/* Form header */}
                <div className="text-center mb-8">
                  <h2 className={`text-3xl font-bold text-gray-800 mb-2 transition-all duration-500 transform ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </h2>
                  <p className={`text-gray-600 transition-all duration-500 delay-100 transform ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                    {isLogin ? 'Enter your credentials to continue' : 'Fill in the details to get started'}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Company Name Field - Only for signup */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    !isLogin 
                      ? 'max-h-24 opacity-100 transform translate-y-0' 
                      : 'max-h-0 opacity-0 transform -translate-y-2 overflow-hidden'
                  }`}>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white group-hover:border-pink-300 hover:shadow-sm"
                        placeholder="Enter your company name"
                        required={!isLogin}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <div className="w-2 h-2 bg-pink-400 rounded-full opacity-0 group-focus-within:opacity-100 transition-all duration-300 scale-0 group-focus-within:scale-100"></div>
                      </div>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white group-hover:border-pink-300 hover:shadow-sm"
                        placeholder="Enter your email address"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <div className="w-2 h-2 bg-pink-400 rounded-full opacity-0 group-focus-within:opacity-100 transition-all duration-300 scale-0 group-focus-within:scale-100"></div>
                      </div>
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white group-hover:border-pink-300 hover:shadow-sm"
                        placeholder="Enter your password"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <div className="w-2 h-2 bg-pink-400 rounded-full opacity-0 group-focus-within:opacity-100 transition-all duration-300 scale-0 group-focus-within:scale-100"></div>
                      </div>
                    </div>
                  </div>

                  {/* Confirm Password Field - Only for signup */}
                  <div className={`transition-all duration-500 ease-in-out ${
                    !isLogin 
                      ? 'max-h-24 opacity-100 transform translate-y-0' 
                      : 'max-h-0 opacity-0 transform -translate-y-2 overflow-hidden'
                  }`}>
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative group">
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white group-hover:border-pink-300 hover:shadow-sm"
                        placeholder="Confirm your password"
                        required={!isLogin}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <div className="w-2 h-2 bg-pink-400 rounded-full opacity-0 group-focus-within:opacity-100 transition-all duration-300 scale-0 group-focus-within:scale-100"></div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group mt-8"
                  >
                    <span className={`transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                      {isLogin ? 'Sign In to Continue' : 'Create My Account'}
                    </span>
                    
                    {/* Loading spinner */}
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>

                {/* Toggle section */}
                <div className="mt-8 text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">or</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">
                    {isLogin ? "New to our platform?" : "Already have an account?"}
                  </p>
                  <button
                    type="button"
                    onClick={toggleAuthMode}
                    disabled={isTransitioning}
                    className="text-pink-600 hover:text-pink-700 font-semibold text-sm hover:underline transition-all duration-200 transform hover:scale-105 disabled:opacity-50 px-4 py-2 rounded-lg hover:bg-pink-50"
                  >
                    {isLogin ? 'Create new account' : 'Sign in instead'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;