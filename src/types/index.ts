// Global types and interfaces for the app

export type Gender = 'male' | 'female' | 'other';

export interface Match {
  userId: string;
  matchedUserId: string;
  matchedAt: string;
} 