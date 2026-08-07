export interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jaidip Dasgupta",
    role: "Entrepreneur",
    location: "Kolkata",
    image: "/images/testimonials/Jaidip.jpg",
    quote:
      "Working with Hiranyakh completely changed the way I think about health, business and personal growth. His framework gave me clarity and confidence to make better decisions every day.",
  },
  {
    id: 2,
    name: "Karishma Sanyal",
    role: "Business Professional",
    location: "Kolkata",
    image: "/images/testimonials/Karishma.jpg",
    quote:
      "The Freedom Framework helped me simplify difficult decisions. Instead of feeling overwhelmed, I now have a clear direction for both my career and personal life.",
  },
  {
    id: 3,
    name: "Arnab Das",
    role: "Business Sales Manager",
    location: "Kolkata",
    image: "/images/testimonials/arnab.jpg",
    quote:
      "The practical approach and structured guidance made a real difference. Every session gave me something I could immediately apply in my life and work.",
  },
];