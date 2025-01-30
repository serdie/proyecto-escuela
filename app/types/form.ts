export interface PersonalInfo {
  fullName: string;
  email: string;
  age: string;
  occupation: string;
}

export interface LearningPreferences {
  contentType: string;
  format: string;
}

export interface EducationalBackground {
  educationLevel: string;
  certifications: string;
  recentLearning: string;
  expertise: string;
}

export interface LearningGoals {
  desiredTopic: string;
  objectives: string;
  timeCommitment: string;
  completionTimeframe: string;
}

export interface FormData {
  personalInfo: PersonalInfo;
  learningPreferences: LearningPreferences;
  educationalBackground: EducationalBackground;
  learningGoals: LearningGoals;
}
