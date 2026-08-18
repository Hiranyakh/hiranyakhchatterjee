import { Question } from "@/types/freedom";

export const questions: Question[] = [
  // =========================
  // HEALTH
  // =========================

  {
    id: 1,
    pillar: "health",
    question: "I exercise for at least 30 minutes most days.",
    weight: 1,
    type: "frequency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Almost Always", value: 5 },
    ],
  },

  {
    id: 2,
    pillar: "health",
    question: "I sleep 7–8 hours consistently.",
    weight: 1,
    type: "consistency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Almost Always", value: 5 },
    ],
  },

  {
    id: 3,
    pillar: "health",
    question: "I eat balanced, nutritious meals.",
    weight: 1,
    type: "consistency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Almost Always", value: 5 },
    ],
  },

  {
    id: 4,
    pillar: "health",
    question: "I have high energy throughout the day.",
    weight: 1,
    type: "confidence",
    options: [
      { label: "Very Low", value: 1 },
      { label: "Low", value: 2 },
      { label: "Moderate", value: 3 },
      { label: "High", value: 4 },
      { label: "Very High", value: 5 },
    ],
  },

  {
    id: 5,
    pillar: "health",
    question: "I regularly monitor my health.",
    weight: 1,
    type: "frequency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Regularly", value: 5 },
    ],
  },

  // =========================
  // WEALTH
  // =========================

  {
    id: 6,
    pillar: "wealth",
    question: "I save money every month.",
    weight: 1,
    type: "consistency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Every Month", value: 5 },
    ],
  },

  {
    id: 7,
    pillar: "wealth",
    question: "I have more than one source of income.",
    weight: 1,
    type: "diversification",
    options: [
      { label: "No Additional Income", value: 1 },
      { label: "One Additional Source", value: 2 },
      { label: "Two Sources", value: 3 },
      { label: "Three Sources", value: 4 },
      { label: "Multiple Diversified Sources", value: 5 },
    ],
  },

  {
    id: 8,
    pillar: "wealth",
    question: "I invest consistently for my future.",
    weight: 1,
    type: "consistency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Consistently", value: 5 },
    ],
  },

  {
    id: 9,
    pillar: "wealth",
    question: "I manage my expenses wisely.",
    weight: 1,
    type: "confidence",
    options: [
      { label: "Not at All", value: 1 },
      { label: "Slightly", value: 2 },
      { label: "Somewhat", value: 3 },
      { label: "Very Well", value: 4 },
      { label: "Extremely Well", value: 5 },
    ],
  },

  {
    id: 10,
    pillar: "wealth",
    question: "I have a clear financial plan.",
    weight: 1,
    type: "clarity",
    options: [
      { label: "No Plan", value: 1 },
      { label: "Basic Idea", value: 2 },
      { label: "Somewhat Clear", value: 3 },
      { label: "Very Clear", value: 4 },
      { label: "Clear & Documented", value: 5 },
    ],
  },

  // =========================
  // GROWTH
  // =========================

  {
    id: 11,
    pillar: "growth",
    question: "I learn new skills regularly.",
    weight: 1,
    type: "frequency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Regularly", value: 5 },
    ],
  },

  {
    id: 12,
    pillar: "growth",
    question: "I use AI tools to improve my productivity.",
    weight: 1,
    type: "maturity",
    options: [
      { label: "I Don't Use AI", value: 1 },
      { label: "I Am Exploring It", value: 2 },
      { label: "I Use It Occasionally", value: 3 },
      { label: "I Use It Regularly", value: 4 },
      { label: "AI Is Part of My Workflow", value: 5 },
    ],
  },

  {
    id: 13,
    pillar: "growth",
    question: "I read books or take courses every month.",
    weight: 1,
    type: "frequency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Every Month", value: 5 },
    ],
  },

  {
    id: 14,
    pillar: "growth",
    question: "I actively seek feedback to improve.",
    weight: 1,
    type: "frequency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Regularly", value: 5 },
    ],
  },

  {
    id: 15,
    pillar: "growth",
    question: "I embrace new technology with confidence.",
    weight: 1,
    type: "confidence",
    options: [
      { label: "Very Uncomfortable", value: 1 },
      { label: "Uncomfortable", value: 2 },
      { label: "Neutral", value: 3 },
      { label: "Comfortable", value: 4 },
      { label: "Very Confident", value: 5 },
    ],
  },

  // =========================
  // LEADERSHIP
  // =========================

  {
    id: 16,
    pillar: "leadership",
    question: "People trust my advice and guidance.",
    weight: 1,
    type: "confidence",
    options: [
      { label: "Not at All", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Consistently", value: 5 },
    ],
  },

  {
    id: 17,
    pillar: "leadership",
    question: "I communicate confidently with others.",
    weight: 1,
    type: "confidence",
    options: [
      { label: "Very Unconfident", value: 1 },
      { label: "Unconfident", value: 2 },
      { label: "Moderately Confident", value: 3 },
      { label: "Confident", value: 4 },
      { label: "Very Confident", value: 5 },
    ],
  },

  {
    id: 18,
    pillar: "leadership",
    question: "I remain calm under pressure.",
    weight: 1,
    type: "confidence",
    options: [
      { label: "Very Difficult", value: 1 },
      { label: "Difficult", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Usually", value: 4 },
      { label: "Consistently", value: 5 },
    ],
  },

  {
    id: 19,
    pillar: "leadership",
    question: "I take initiative without waiting to be asked.",
    weight: 1,
    type: "frequency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Almost Always", value: 5 },
    ],
  },

  {
    id: 20,
    pillar: "leadership",
    question: "I motivate and inspire people around me.",
    weight: 1,
    type: "confidence",
    options: [
      { label: "Not at All", value: 1 },
      { label: "Slightly", value: 2 },
      { label: "Somewhat", value: 3 },
      { label: "Very Well", value: 4 },
      { label: "Extremely Well", value: 5 },
    ],
  },

  // =========================
  // PURPOSE
  // =========================

  {
    id: 21,
    pillar: "purpose",
    question: "I have a clear vision for my life.",
    weight: 1,
    type: "clarity",
    options: [
      { label: "Not at All Clear", value: 1 },
      { label: "Slightly Clear", value: 2 },
      { label: "Somewhat Clear", value: 3 },
      { label: "Very Clear", value: 4 },
      { label: "Extremely Clear", value: 5 },
    ],
  },

  {
    id: 22,
    pillar: "purpose",
    question: "My daily work aligns with my long-term goals.",
    weight: 1,
    type: "alignment",
    options: [
      { label: "Not Aligned", value: 1 },
      { label: "Slightly Aligned", value: 2 },
      { label: "Partially Aligned", value: 3 },
      { label: "Mostly Aligned", value: 4 },
      { label: "Fully Aligned", value: 5 },
    ],
  },

  {
    id: 23,
    pillar: "purpose",
    question: "I review my goals and progress regularly.",
    weight: 1,
    type: "frequency",
    options: [
      { label: "Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Very Regularly", value: 5 },
    ],
  },

  {
    id: 24,
    pillar: "purpose",
    question: "I stay disciplined even when motivation fades.",
    weight: 1,
    type: "consistency",
    options: [
      { label: "Almost Never", value: 1 },
      { label: "Rarely", value: 2 },
      { label: "Sometimes", value: 3 },
      { label: "Often", value: 4 },
      { label: "Almost Always", value: 5 },
    ],
  },

  {
    id: 25,
    pillar: "purpose",
    question:
      "I know exactly what I want to achieve in the next five years.",
    weight: 1,
    type: "clarity",
    options: [
      { label: "No Clear Direction", value: 1 },
      { label: "A General Idea", value: 2 },
      { label: "Somewhat Clear", value: 3 },
      { label: "Very Clear", value: 4 },
      { label: "Extremely Clear", value: 5 },
    ],
  },
];