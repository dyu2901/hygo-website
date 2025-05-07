export enum SelectedPage {
  Home = "home",
  About = "about",
  Doctors = "doctors",
  Services = "services",
  Reviews = "reviews",
}

export enum SelectedService {
  Neurology = "neurology",
  Cardiology = "cardiology",
  Orthopedics = "orthopedics",
  Surgery = "surgery",
  Dentistry = "dentistry",
  Radiology = "radiology",
  Hygopharmacy = "hygopharmacy", // Fixed casing
  Medicine = "medicine",
  GeneralCheckup = "general checkup",
  Wellness = "wellness", // Ensure this matches Consts.tsx
  MentalHealth = "mentalhealth", // Ensure this matches Consts.tsx
  Physiotherapy = "physiotherapy", // Added to match Consts.tsx
  ClinicalNutrition = "clinicalnutrition", // Added to match Consts.tsx
  HomeCare = "homecare", // Added to match Consts.tsx
  DoctorConsultation = "doctorconsultation", // Added to match Consts.tsx
  SeeMore = "seemore",
}

// Add this to your Types.tsx if you haven't already
export const SharedColors = {
  heading2: "#0E3293",
  primary: "#0E3293",
}
