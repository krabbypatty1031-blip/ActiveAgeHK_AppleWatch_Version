export interface MedicineItem {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  image: string;
}

export enum ScreenType {
  Steps = 'steps',
  Battery = 'battery',
  Medicine = 'medicine',
  FallDetection = 'fall',
  VoiceAssistant = 'voice'
}