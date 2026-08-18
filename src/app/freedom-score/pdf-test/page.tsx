import DownloadFreedomPDF from "@/components/freedom-score/pdf/DownloadFreedomPDF";

export default function PDFTestPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">

        <h1 className="text-3xl font-black text-slate-900">
          Freedom Score™ PDF Test
        </h1>

        <p className="mt-3 text-slate-600">
          This temporary page tests the new A4 PDF generation engine.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6">

          <p className="font-semibold">
            Test User
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Score: 45 · Foundation Stage · Growth Accelerator
          </p>

        </div>

        <div className="mt-8">
          <DownloadFreedomPDF
            fullName="Test User"
            assessmentId="FS-TEST01"
            assessmentDate="12 August 2026"
            freedomScore={45}
            freedomLevel="Foundation Stage"
            
	freedomArchetype={{
  name: "growth-accelerator",
  title: "Growth Accelerator",
  description:
    "You learn quickly and embrace opportunity. Your next breakthrough comes from creating balance across all pillars.",
  strengths: [
    "Fast learner",
    "Opportunity focused",
    "Action oriented",
  ],
  watchOut: [
    "Avoid neglecting relationships and wellbeing.",
  ],
  nextLevel:
    "Convert growth into sustainable freedom.",
}}

	                executiveInsight={{
              headline: "Foundation Stage",
              overview:
                "You are building the foundations of personal freedom. Your current focus should be on creating consistent daily habits instead of pursuing perfection.",
              strength:
                "Your strongest pillar is Health. Continue investing in this area because it creates momentum across other aspects of your life.",
              opportunity:
                "Your greatest opportunity for growth is Wealth. Improving this pillar will have the biggest impact on your overall Freedom Score.",
              next90Days:
                "Focus on improving one small habit every week. Consistency over the next 90 days will create meaningful long-term change.",
              recommendation:
                "Review your Freedom Score every month and measure your progress across all five pillars.",
            }}

		pillars={[
              {
                pillar: "health",
                label: "Health",
                score: 72,
                description:
                  "Physical wellbeing, nutrition, habits and energy.",
              },
              {
                pillar: "wealth",
                label: "Wealth",
                score: 58,
                description:
                  "Income, wealth creation and financial planning.",
              },
              {
                pillar: "growth",
                label: "Growth & AI",
                score: 81,
                description:
                  "Learning, AI adoption and personal development.",
              },
              {
                pillar: "leadership",
                label: "Leadership",
                score: 66,
                description:
                  "Influence, communication and leadership effectiveness.",
              },
              {
                pillar: "purpose",
                label: "Purpose",
                score: 74,
                description:
                  "Mission, vision and long-term direction.",
              },
            ]}

            blueprint={[
  {
    pillar: "health",
    priority: "Medium",
    actions: [
      "Strength train 3x per week",
      "Reduce processed foods",
      "Track your daily activity",
    ],
    focusBehavior: "Exercise",
    focusPercentage: 80,
  },
  {
    pillar: "wealth",
    priority: "High",
    actions: [
      "Create a monthly budget",
      "Start an emergency fund",
      "Learn one AI skill",
    ],
    focusBehavior: "Financial Planning",
    focusPercentage: 58,
  },
  {
    pillar: "growth",
    priority: "Medium",
    actions: [
      "Attend workshops",
      "Learn from a mentor",
      "Practice deliberate learning",
    ],
    focusBehavior: "Deliberate Learning",
    focusPercentage: 75,
  },
  {
    pillar: "leadership",
    priority: "High",
    actions: [
      "Improve communication",
      "Volunteer to lead small projects",
      "Practice active listening",
    ],
    focusBehavior: "Communication",
    focusPercentage: 60,
  },
  {
    pillar: "purpose",
    priority: "High",
    actions: [
      "Write your life vision",
      "Set weekly goals",
      "Reflect every Sunday",
    ],
    focusBehavior: "Life Vision",
    focusPercentage: 55,
  },
]}
            balanced={false}
            scoreSpread={23}

            healthAnalysis={{
          dimensions: [
            {
              questionId: 1,
              pillar: "health",
              label: "Exercise",
              question:
                "I exercise for at least 30 minutes most days.",
              response: "Often",
              value: 4,
              percentage: 80,
              description:
                "Regular physical activity supports energy, strength and long-term health.",
            },
            {
              questionId: 2,
              pillar: "health",
              label: "Sleep",
              question:
                "I sleep 7–8 hours consistently.",
              response: "Sometimes",
              value: 3,
              percentage: 60,
              description:
                "Consistent sleep supports recovery, focus and daily energy.",
            },
            {
              questionId: 3,
              pillar: "health",
              label: "Nutrition",
              question:
                "I eat balanced, nutritious meals.",
              response: "Often",
              value: 4,
              percentage: 80,
              description:
                "Balanced nutrition provides the foundation for sustained wellbeing.",
            },
            {
              questionId: 4,
              pillar: "health",
              label: "Energy",
              question:
                "I have high energy throughout the day.",
              response: "Sometimes",
              value: 3,
              percentage: 60,
              description:
                "Daily energy reflects the interaction of sleep, nutrition, movement and recovery.",
            },
            {
              questionId: 5,
              pillar: "health",
              label: "Health Monitoring",
              question:
                "I regularly monitor my health.",
              response: "Often",
              value: 4,
              percentage: 80,
              description:
                "Regular monitoring helps identify areas requiring attention early.",
            },
          ],

          strongest: {
            questionId: 1,
            pillar: "health",
            label: "Exercise",
            question:
              "I exercise for at least 30 minutes most days.",
            response: "Often",
            value: 4,
            percentage: 80,
            description:
              "Regular physical activity supports energy, strength and long-term health.",
          },

          weakest: {
            questionId: 2,
            pillar: "health",
            label: "Sleep",
            question:
              "I sleep 7–8 hours consistently.",
            response: "Sometimes",
            value: 3,
            percentage: 60,
            description:
              "Consistent sleep supports recovery, focus and daily energy.",
          },
        }}        
	wealthAnalysis={{
          dimensions: [
            {
              questionId: 6,
              pillar: "wealth",
              label: "Monthly Saving",
              question:
                "I save a portion of my income every month.",
              response: "Often",
              value: 4,
              percentage: 80,
              description:
                "Consistent saving creates financial resilience and future optionality.",
            },
            {
              questionId: 7,
              pillar: "wealth",
              label: "Income Diversification",
              question:
                "I have more than one source of income.",
              response: "Sometimes",
              value: 3,
              percentage: 60,
              description:
                "Multiple income sources can improve financial resilience.",
            },
            {
              questionId: 8,
              pillar: "wealth",
              label: "Investing",
              question:
                "I invest consistently for long-term wealth creation.",
              response: "Often",
              value: 4,
              percentage: 80,
              description:
                "Consistent investing supports long-term wealth accumulation.",
            },
            {
              questionId: 9,
              pillar: "wealth",
              label: "Expense Management",
              question:
                "I track and manage my expenses effectively.",
              response: "Often",
              value: 4,
              percentage: 80,
              description:
                "Effective expense management improves cash-flow control.",
            },
            {
              questionId: 10,
              pillar: "wealth",
              label: "Financial Planning",
              question:
                "I have a clear financial plan for my future.",
              response: "Sometimes",
              value: 3,
              percentage: 60,
              description:
                "A clear financial plan connects today's decisions with long-term goals.",
            },
          ],

          strongest: {
            questionId: 6,
            pillar: "wealth",
            label: "Monthly Saving",
            question:
              "I save a portion of my income every month.",
            response: "Often",
            value: 4,
            percentage: 80,
            description:
              "Consistent saving creates financial resilience and future optionality.",
          },

          weakest: {
            questionId: 7,
            pillar: "wealth",
            label: "Income Diversification",
            question:
              "I have more than one source of income.",
            response: "Sometimes",
            value: 3,
            percentage: 60,
            description:
              "Multiple income sources can improve financial resilience.",
          },
        }}

	
	growthAnalysis={{
  dimensions: [
    {
      questionId: 11,
      pillar: "growth",
      label: "I learn new skills regularly.",
      question: "I learn new skills regularly.",
      response: "Very Regularly",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 12,
      pillar: "growth",
      label: "I use AI tools to improve my productivity.",
      question: "I use AI tools to improve my productivity.",
      response: "AI Is Part of My Workflow",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 13,
      pillar: "growth",
      label: "I read books or take courses every month.",
      question: "I read books or take courses every month.",
      response: "Every Month",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 14,
      pillar: "growth",
      label: "I actively seek feedback to improve.",
      question: "I actively seek feedback to improve.",
      response: "Very Regularly",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 15,
      pillar: "growth",
      label: "I embrace new technology with confidence.",
      question: "I embrace new technology with confidence.",
      response: "Very Confident",
      value: 5,
      percentage: 100,
    },
  ],
  strongest: {
    questionId: 11,
    pillar: "growth",
    label: "I learn new skills regularly.",
    question: "I learn new skills regularly.",
    response: "Very Regularly",
    value: 5,
    percentage: 100,
  },
  weakest: {
    questionId: 11,
    pillar: "growth",
    label: "I learn new skills regularly.",
    question: "I learn new skills regularly.",
    response: "Very Regularly",
    value: 5,
    percentage: 100,
  },
}}

leadershipAnalysis={{
  dimensions: [
    {
      questionId: 16,
      pillar: "leadership",
      label: "I communicate clearly and confidently.",
      question: "I communicate clearly and confidently.",
      response: "Very Confident",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 17,
      pillar: "leadership",
      label: "I take responsibility for outcomes.",
      question: "I take responsibility for outcomes.",
      response: "Always",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 18,
      pillar: "leadership",
      label: "I inspire and influence others.",
      question: "I inspire and influence others.",
      response: "Very Strongly",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 19,
      pillar: "leadership",
      label: "I make decisions confidently.",
      question: "I make decisions confidently.",
      response: "Very Confident",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 20,
      pillar: "leadership",
      label: "I handle difficult conversations effectively.",
      question: "I handle difficult conversations effectively.",
      response: "Very Effectively",
      value: 5,
      percentage: 100,
    },
  ],
  strongest: {
    questionId: 16,
    pillar: "leadership",
    label: "I communicate clearly and confidently.",
    question: "I communicate clearly and confidently.",
    response: "Very Confident",
    value: 5,
    percentage: 100,
  },
  weakest: {
    questionId: 16,
    pillar: "leadership",
    label: "I communicate clearly and confidently.",
    question: "I communicate clearly and confidently.",
    response: "Very Confident",
    value: 5,
    percentage: 100,
  },
}}

purposeAnalysis={{
  dimensions: [
    {
      questionId: 21,
      pillar: "purpose",
      label: "I have a clear sense of purpose and direction.",
      question: "I have a clear sense of purpose and direction.",
      response: "Very Clear",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 22,
      pillar: "purpose",
      label: "My daily actions are aligned with my long-term goals.",
      question: "My daily actions are aligned with my long-term goals.",
      response: "Almost Always",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 23,
      pillar: "purpose",
      label: "I know what kind of impact I want to create.",
      question: "I know what kind of impact I want to create.",
      response: "Very Clearly",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 24,
      pillar: "purpose",
      label: "I make decisions based on my core values.",
      question: "I make decisions based on my core values.",
      response: "Almost Always",
      value: 5,
      percentage: 100,
    },
    {
      questionId: 25,
      pillar: "purpose",
      label: "I feel my life and work are meaningful.",
      question: "I feel my life and work are meaningful.",
      response: "Extremely Meaningful",
      value: 5,
      percentage: 100,
    },
  ],

  strongest: {
    questionId: 21,
    pillar: "purpose",
    label: "I have a clear sense of purpose and direction.",
    question: "I have a clear sense of purpose and direction.",
    response: "Very Clear",
    value: 5,
    percentage: 100,
  },

  weakest: {
    questionId: 21,
    pillar: "purpose",
    label: "I have a clear sense of purpose and direction.",
    question: "I have a clear sense of purpose and direction.",
    response: "Very Clear",
    value: 5,
    percentage: 100,
  },
}}
	

          />
        </div>

      </div>

    </main>
  );
}