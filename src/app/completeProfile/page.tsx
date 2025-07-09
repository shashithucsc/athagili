'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserIcon, 
  CameraIcon, 
  CalendarDaysIcon,
  MapPinIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  SparklesIcon,
  CheckIcon,
  ExclamationTriangleIcon,
  PlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import AuthAnimatedBackground from '../../components/AuthAnimatedBackground';

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  location: string;
  education: string;
  occupation: string;
  bio: string;
  interests: string[];
  relationshipGoal: 'serious' | 'casual' | 'friendship' | 'unsure';
  height: string;
  smokingStatus: 'never' | 'occasionally' | 'regularly';
  drinkingStatus: 'never' | 'socially' | 'regularly';
  profileImages: File[];
}

interface ValidationErrors {
  [key: string]: string;
}

const CompleteProfilePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'male',
    location: '',
    education: '',
    occupation: '',
    bio: '',
    interests: [],
    relationshipGoal: 'serious',
    height: '',
    smokingStatus: 'never',
    drinkingStatus: 'never',
    profileImages: []
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [newInterest, setNewInterest] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const totalSteps = 4;

  const availableInterests = [
    'Travel', 'Photography', 'Cooking', 'Music', 'Dancing', 'Reading',
    'Fitness', 'Movies', 'Art', 'Nature', 'Yoga', 'Gaming',
    'Writing', 'Sports', 'Technology', 'Fashion', 'Food', 'Adventure'
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: ValidationErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.location.trim()) newErrors.location = 'Location is required';
    } else if (step === 2) {
      if (!formData.education.trim()) newErrors.education = 'Education is required';
      if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required';
      if (!formData.bio.trim()) newErrors.bio = 'Bio is required';
      if (formData.bio.length < 50) newErrors.bio = 'Bio must be at least 50 characters';
    } else if (step === 3) {
      if (formData.interests.length < 3) newErrors.interests = 'Please select at least 3 interests';
      if (!formData.height) newErrors.height = 'Height is required';
    } else if (step === 4) {
      if (formData.profileImages.length === 0) newErrors.profileImages = 'Please upload at least one photo';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleInterestToggle = (interest: string) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    handleInputChange('interests', updatedInterests);
  };

  const handleAddCustomInterest = () => {
    if (newInterest.trim() && !formData.interests.includes(newInterest.trim())) {
      handleInputChange('interests', [...formData.interests, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const updatedImages = [...formData.profileImages, ...files].slice(0, 6);
      handleInputChange('profileImages', updatedImages);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = formData.profileImages.filter((_, i) => i !== index);
    handleInputChange('profileImages', updatedImages);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log('Profile completed:', formData);
      // Handle profile submission
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Basic Information</h2>
              <p className="text-gray-300">Tell us about yourself</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  First Name *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
                      errors.firstName ? 'border-red-500' : 'border-gray-600'
                    } rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                    placeholder="Enter your first name"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name *
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
                      errors.lastName ? 'border-red-500' : 'border-gray-600'
                    } rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                    placeholder="Enter your last name"
                  />
                </div>
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Date of Birth *
              </label>
              <div className="relative">
                <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
                    errors.dateOfBirth ? 'border-red-500' : 'border-gray-600'
                  } rounded-xl py-3 px-12 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                />
              </div>
              {errors.dateOfBirth && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.dateOfBirth}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Gender
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['male', 'female', 'other'].map((gender) => (
                  <button
                    key={gender}
                    type="button"
                    onClick={() => handleInputChange('gender', gender)}
                    className={`py-3 px-4 rounded-xl border-2 transition-all duration-300 capitalize ${
                      formData.gender === gender
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-purple-400'
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Location *
              </label>
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
                    errors.location ? 'border-red-500' : 'border-gray-600'
                  } rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                  placeholder="Enter your city"
                />
              </div>
              {errors.location && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.location}
                </p>
              )}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Education & Career</h2>
              <p className="text-gray-300">Share your professional background</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Education *
              </label>
              <div className="relative">
                <AcademicCapIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
                    errors.education ? 'border-red-500' : 'border-gray-600'
                  } rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                  placeholder="e.g., Bachelor's in Computer Science"
                />
              </div>
              {errors.education && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.education}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Occupation *
              </label>
              <div className="relative">
                <BriefcaseIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
                    errors.occupation ? 'border-red-500' : 'border-gray-600'
                  } rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                  placeholder="e.g., Software Engineer"
                />
              </div>
              {errors.occupation && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.occupation}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Bio * (minimum 50 characters)
              </label>
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={4}
                className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
                  errors.bio ? 'border-red-500' : 'border-gray-600'
                } rounded-xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none`}
                placeholder="Tell us about yourself, your interests, and what you're looking for..."
              />
              <div className="flex justify-between mt-2">
                <span className={`text-sm ${formData.bio.length < 50 ? 'text-red-400' : 'text-green-400'}`}>
                  {formData.bio.length}/50 minimum
                </span>
                <span className="text-sm text-gray-400">
                  {formData.bio.length}/500
                </span>
              </div>
              {errors.bio && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.bio}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Relationship Goal
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 'serious', label: 'Serious Relationship' },
                  { value: 'casual', label: 'Casual Dating' },
                  { value: 'friendship', label: 'Friendship' },
                  { value: 'unsure', label: 'Not Sure Yet' }
                ].map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => handleInputChange('relationshipGoal', value)}
                    className={`py-3 px-4 rounded-xl border-2 transition-all duration-300 text-sm ${
                      formData.relationshipGoal === value
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-purple-400'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Interests & Lifestyle</h2>
              <p className="text-gray-300">Share what you love to do</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Interests * (select at least 3)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {availableInterests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`py-2 px-4 rounded-full border-2 transition-all duration-300 text-sm ${
                      formData.interests.includes(interest)
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-purple-400'
                    }`}
                  >
                    {interest}
                    {formData.interests.includes(interest) && (
                      <CheckIcon className="inline-block ml-2 h-4 w-4" />
                    )}
                  </button>
                ))}
              </div>

              {/* Custom Interest Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  placeholder="Add custom interest"
                  className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddCustomInterest()}
                />
                <button
                  type="button"
                  onClick={handleAddCustomInterest}
                  className="bg-purple-500/20 border-2 border-purple-500 text-purple-300 px-4 py-2 rounded-xl hover:bg-purple-500/30 transition-all duration-300"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>

              {errors.interests && (
                <p className="mt-2 text-sm text-red-400 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.interests}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Height *
                </label>
                <select
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  className={`w-full bg-gray-800/50 backdrop-blur-sm border ${
                    errors.height ? 'border-red-500' : 'border-gray-600'
                  } rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                >
                  <option value="">Select height</option>
                  {Array.from({ length: 30 }, (_, i) => {
                    const height = 150 + i * 2;
                    return (
                      <option key={height} value={`${height}cm`}>
                        {height}cm ({Math.floor(height / 30.48)}'
                        {Math.round(((height / 30.48) % 1) * 12)}")
                      </option>
                    );
                  })}
                </select>
                {errors.height && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                    {errors.height}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Smoking
                </label>
                <select
                  value={formData.smokingStatus}
                  onChange={(e) => handleInputChange('smokingStatus', e.target.value)}
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="never">Never</option>
                  <option value="occasionally">Occasionally</option>
                  <option value="regularly">Regularly</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Drinking
              </label>
              <select
                value={formData.drinkingStatus}
                onChange={(e) => handleInputChange('drinkingStatus', e.target.value)}
                className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              >
                <option value="never">Never</option>
                <option value="socially">Socially</option>
                <option value="regularly">Regularly</option>
              </select>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Profile Photos</h2>
              <p className="text-gray-300">Add photos to complete your profile</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Upload Photos * (at least 1, maximum 6)
              </label>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {Array.from({ length: 6 }, (_, index) => (
                  <div
                    key={index}
                    className="aspect-square border-2 border-dashed border-gray-600 rounded-xl bg-gray-800/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden"
                  >
                    {formData.profileImages[index] ? (
                      <>
                        <img
                          src={URL.createObjectURL(formData.profileImages[index])}
                          alt={`Profile ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex flex-col items-center justify-center text-gray-400 hover:text-purple-400 transition-colors p-4"
                      >
                        <CameraIcon className="h-8 w-8 mb-2" />
                        <span className="text-sm">Add Photo</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />

              {errors.profileImages && (
                <p className="mt-2 text-sm text-red-400 flex items-center">
                  <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                  {errors.profileImages}
                </p>
              )}

              <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <h4 className="text-sm font-medium text-purple-300 mb-2">Photo Tips:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Use clear, recent photos of yourself</li>
                  <li>• Include a mix of close-up and full-body photos</li>
                  <li>• Show your personality and interests</li>
                  <li>• Avoid group photos as your main image</li>
                </ul>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <AuthAnimatedBackground />
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-2xl"
      >
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-white">Complete Your Profile</h1>
            <span className="text-sm text-gray-400">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
              initial={{ width: "25%" }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
          <AnimatePresence mode="wait">
            {renderStepContent()}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700/50">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-800/80 text-white hover:bg-gray-700/80 border border-gray-600'
              }`}
            >
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center"
              >
                Next
                <SparklesIcon className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center"
              >
                Complete Profile
                <HeartIcon className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompleteProfilePage;
