import { Pillar } from "@/types/freedom";

export const recommendations: Record<
  Pillar,
  {
    high: string[];
    medium: string[];
    low: string[];
  }
> = {
  health: {
    low: [
      "Walk 30 minutes every day",
      "Drink at least 3 litres of water",
      "Sleep 7–8 hours consistently",
    ],
    medium: [
      "Strength train 3x per week",
      "Reduce processed foods",
      "Track your daily activity",
    ],
    high: [
      "Maintain your healthy routine",
      "Help someone improve their health",
      "Challenge yourself with a new fitness goal",
    ],
  },

  wealth: {
    low: [
      "Create a monthly budget",
      "Start an emergency fund",
      "Learn one AI skill",
    ],
    medium: [
      "Build a second income source",
      "Invest consistently",
      "Improve financial literacy",
    ],
    high: [
      "Scale your investments",
      "Mentor others financially",
      "Diversify income streams",
    ],
  },

  growth: {
    low: [
      "Read 20 pages daily",
      "Take one online course",
      "Develop one new skill",
    ],
    medium: [
      "Attend workshops",
      "Learn from a mentor",
      "Practice deliberate learning",
    ],
    high: [
      "Teach others",
      "Write about your expertise",
      "Keep expanding your knowledge",
    ],
  },

  leadership: {
    low: [
      "Improve communication",
      "Volunteer to lead small projects",
      "Practice active listening",
    ],
    medium: [
      "Develop coaching skills",
      "Build stronger relationships",
      "Give constructive feedback",
    ],
    high: [
      "Mentor emerging leaders",
      "Lead larger initiatives",
      "Expand your influence",
    ],
  },

  purpose: {
    low: [
      "Write your life vision",
      "Set weekly goals",
      "Reflect every Sunday",
    ],
    medium: [
      "Review your goals monthly",
      "Align daily habits with your purpose",
      "Eliminate distractions",
    ],
    high: [
      "Inspire others with your mission",
      "Document your journey",
      "Build a lasting legacy",
    ],
  },
};