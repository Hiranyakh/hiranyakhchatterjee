export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;

  age: number | "";

  gender: "Male" | "Female" | "Other" | "";

  profession: string;

  city: string;

  state: string;

  country: string;

  goal: string;
}

export interface Assessment {
  assessmentId: string;

  createdAt: string;

  personalInfo: PersonalInfo;
}