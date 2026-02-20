export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  category: string;
}

export interface Appointment {
  id?: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceType: string;
  dateTime: string;
  notes: string;
}
