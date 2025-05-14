export interface Breed{
  id: string;
  name:string;
  description?: string;
  energy_level?: number;
  affection_level?: number;
  origin?: string;
  image?: {
    url: string;
  };
}