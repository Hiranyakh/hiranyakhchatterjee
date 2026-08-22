export type ConsultationType =
  | "health"
  | "wealth"
  | "growth"
  | "leadership"
  | "purpose";

export interface ConsultationConfig {
  name: string;
  price: number;
  amount: number;
}

export const consultationConfig: Record<
  ConsultationType,
  ConsultationConfig
> = {
  health: {
    name: "Health & Wellness Consultation",
    price: 1500,
    amount: 150000,
  },

  wealth: {
    name: "Wealth & Business Consultation",
    price: 1000,
    amount: 100000,
  },

  growth: {
    name: "Career & AI Consultation",
    price: 1000,
    amount: 100000,
  },

  leadership: {
    name: "Leadership Consultation",
    price: 1000,
    amount: 100000,
  },

  purpose: {
    name: "Purpose & Life Direction Consultation",
    price: 1000,
    amount: 100000,
  },
};