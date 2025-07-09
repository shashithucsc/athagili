// Global types and interfaces for the app

export type Gender = 'male' | 'female' | 'other';

export type RelationshipGoal = 'serious' | 'casual' | 'friendship' | 'unsure';

export type SmokingStatus = 'never' | 'occasionally' | 'regularly';

export type DrinkingStatus = 'never' | 'socially' | 'regularly';

export type Religion = 'Buddhist' | 'Hindu' | 'Catholic' | 'Islam' | 'Christian' | 'Other';

export type Ethnicity = 'Sinhalese' | 'Tamil' | 'Moor' | 'Burgher' | 'Malay' | 'Other';

export type ZodiacSign = 'Aries' | 'Taurus' | 'Gemini' | 'Cancer' | 'Leo' | 'Virgo' | 'Libra' | 'Scorpio' | 'Sagittarius' | 'Capricorn' | 'Aquarius' | 'Pisces';

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  location: string;
  education: string;
  occupation: string;
  bio: string;
  interests: string[];
  relationshipGoal: RelationshipGoal;
  height: string;
  smokingStatus: SmokingStatus;
  drinkingStatus: DrinkingStatus;
  profileImages: string[]; // URLs to uploaded images
  createdAt: string;
  updatedAt: string;
  // Sri Lankan specific fields
  languages?: string[];
  religion?: Religion;
  ethnicity?: Ethnicity;
  zodiacSign?: ZodiacSign;
  matchPercentage?: number;
  distance?: number;
  isOnline?: boolean;
  lastSeen?: Date;
  verified?: boolean;
}

export interface Match {
  userId: string;
  matchedUserId: string;
  matchedAt: string;
}

export interface SwipeAction {
  id: string;
  userId: string;
  targetUserId: string;
  action: 'like' | 'pass' | 'superlike';
  timestamp: string;
}

export interface FilterPreferences {
  ageRange: [number, number];
  maxDistance: number;
  preferredEducation: string[];
  preferredInterests: string[];
  preferredReligion: Religion[];
  preferredLanguages: string[];
  preferredEthnicity: Ethnicity[];
} 