// app/auth/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Theme configuration
const theme = {
  colors: {
    primary: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    accent: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
    brand: {
      pink: '#e91e63',
      darkPink: '#c2185b',
      lightPink: '#f8bbd9',
      gradient: 'from-pink-500 via-pink-600 to-pink-700',
    }
  },
  animations: {
    transition: 'transition-all duration-300 ease-in-out',
    hover: 'transform hover:scale-105 transition-transform duration-200',
    fadeIn: 'opacity-0 animate-fadeIn',
    slideUp: 'transform translate-y-4 opacity-0 animate-slideUp',
  },
  spacing: {
    container: 'max-w-6xl mx-auto',
    form: 'max-w-md mx-auto',
    section: 'p-12',
  },
  typography: {
    heading: 'text-3xl font-bold',
    subheading: 'text-lg font-medium',
    body: 'text-base',
    caption: 'text-sm',
  }
};

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

      {/* Main container */}
      <div className={`relative z-10 w-full ${theme.spacing.container}`}>
        <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden ${theme.animations.transition} transform ${isTransitioning ? 'scale-98 opacity-90' : 'scale-100 opacity-100'}`}>
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            
            {/* Left side - Branding & Info */}
            <div className={`relative bg-gradient-to-br ${theme.colors.brand.gradient} flex flex-col justify-center items-center ${theme.spacing.section} text-white overflow-hidden`}>
              {/* Background pattern */}
              <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%272%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20'></div>
              
              {/* Animated geometric shapes */}
              <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white/20 rounded-lg rotate-45 animate-pulse"></div>
              
              <div className="relative z-10 text-center max-w-md">
                {/* Logo section - Updated with new logo */}
                <div className="mb-8">
                  <div className="relative group inline-block">
                    <div className="bg-white rounded-2xl p-6 shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-2">
                      <Image
                        src="/logo2.png"
                        alt="STAAJ Solutions Logo"
                        width={200}
                        height={80}
                        className="w-auto h-16 object-contain"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
                  </div>
                </div>

                {/* Dynamic content based on auth mode */}
                <div className={`${theme.animations.transition} transform ${isTransitioning ? 'translate-x-8 opacity-0' : 'translate-x-0 opacity-100'}`}>
                  <h1 className={`${theme.typography.heading} text-4xl mb-4 leading-tight`}>
                    {isLogin ? 'Welcome Back to STAAJ Solutions' : 'Join STAAJ Solutions'}
                  </h1>
                  <p className={`text-pink-100 ${theme.typography.subheading} mb-8 leading-relaxed`}>
                    {isLogin 
                      ? 'Continue your journey with our professional consulting platform designed for business excellence.'
                      : 'Join thousands of professionals who trust STAAJ Solutions for their business growth and success.'
                    }
                  </p>
                </div>

                {/* Feature highlights */}
                <div className={`grid grid-cols-3 gap-6 ${theme.animations.transition} delay-200 transform ${isTransitioning ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  {[
                    { label: 'Secure', delay: '0s' },
                    { label: 'Professional', delay: '0.5s' },
                    { label: 'Trusted', delay: '1s' }
                  ].map((feature, index) => (
                    <div key={index} className="text-center group">
                      <div className={`w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 ${theme.animations.transition} ${theme.animations.hover}`}>
                        <div 
                          className="w-4 h-4 bg-white rounded-full animate-pulse" 
                          style={{ animationDelay: feature.delay }}
                        ></div>
                      </div>
                      <span className={`${theme.typography.caption} font-medium`}>{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className={`flex flex-col justify-center ${theme.spacing.section} bg-white`}>
              <div className={`w-full ${theme.spacing.form}`}>
                
                {/* Form header */}
                <div className="text-center mb-8">
                  <h2 className={`${theme.typography.heading} text-gray-800 mb-2 ${theme.animations.transition} transform ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </h2>
                  <p className={`text-gray-600 ${theme.animations.transition} delay-100 transform ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                    {isLogin ? 'Enter your credentials to continue' : 'Fill in the details to get started'}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Company Name Field - Only for signup */}
                  <FormField
                    label="Company Name"
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    required={!isLogin}
                    visible={!isLogin}
                    theme={theme}
                  />

                  {/* Email Field */}
                  <FormField
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required={true}
                    visible={true}
                    theme={theme}
                  />

                  {/* Password Field */}
                  <FormField
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required={true}
                    visible={true}
                    theme={theme}
                  />

                  {/* Confirm Password Field - Only for signup */}
                  <FormField
                    label="Confirm Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required={!isLogin}
                    visible={!isLogin}
                    theme={theme}
                  />

                  {/* Submit Button */}
                  <SubmitButton 
                    isLoading={isLoading}
                    isLogin={isLogin}
                    theme={theme}
                  />
                </form>

                {/* Toggle section */}
                <AuthToggle 
                  isLogin={isLogin}
                  onToggle={toggleAuthMode}
                  isTransitioning={isTransitioning}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Form Field Component
interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required: boolean;
  visible: boolean;
  theme: any;
}

const FormField: React.FC<FormFieldProps> = ({
  label, id, name, type, value, onChange, placeholder, required, visible, theme
}) => (
  <div className={`${theme.animations.transition} ease-in-out ${
    visible 
      ? 'max-h-24 opacity-100 transform translate-y-0' 
      : 'max-h-0 opacity-0 transform -translate-y-2 overflow-hidden'
  }`}>
    <label htmlFor={id} className={`block ${theme.typography.caption} font-semibold text-gray-700 mb-2`}>
      {label}
    </label>
    <div className="relative group">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 ${theme.animations.transition} bg-gray-50 focus:bg-white group-hover:border-pink-300 hover:shadow-sm`}
        placeholder={placeholder}
        required={required}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <div className={`w-2 h-2 bg-pink-400 rounded-full opacity-0 group-focus-within:opacity-100 ${theme.animations.transition} scale-0 group-focus-within:scale-100`}></div>
      </div>
    </div>
  </div>
);

// Submit Button Component
interface SubmitButtonProps {
  isLoading: boolean;
  isLogin: boolean;
  theme: any;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, isLogin, theme }) => (
  <button
    type="submit"
    disabled={isLoading}
    className={`w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-4 px-6 rounded-xl ${theme.animations.transition} ${theme.animations.hover} hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group mt-8`}
  >
    <span className={`${theme.animations.transition} ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {isLogin ? 'Sign In to Continue' : 'Create My Account'}
    </span>
    
    {/* Loading spinner */}
    {isLoading && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    )}

    {/* Hover effect */}
    <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 opacity-0 group-hover:opacity-100 ${theme.animations.transition}`}></div>
  </button>
);

// Auth Toggle Component
interface AuthToggleProps {
  isLogin: boolean;
  onToggle: () => void;
  isTransitioning: boolean;
  theme: any;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ isLogin, onToggle, isTransitioning, theme }) => (
  <div className="mt-8 text-center">
    <div className="relative mb-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-4 bg-white text-gray-500">or</span>
      </div>
    </div>

    <p className={`text-gray-600 ${theme.typography.caption} mb-3`}>
      {isLogin ? "New to STAAJ Solutions?" : "Already have an account?"}
    </p>
    <button
      type="button"
      onClick={onToggle}
      disabled={isTransitioning}
      className={`text-pink-600 hover:text-pink-700 font-semibold ${theme.typography.caption} hover:underline ${theme.animations.transition} ${theme.animations.hover} disabled:opacity-50 px-4 py-2 rounded-lg hover:bg-pink-50`}
    >
      {isLogin ? 'Create new account' : 'Sign in instead'}
    </button>
  </div>
);

export default AuthPage;