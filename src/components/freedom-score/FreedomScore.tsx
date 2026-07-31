"use client";

import { useState } from "react";

import WelcomeScreen from "./WelcomeScreen";
import QuestionCard from "./QuestionCard";
import StageTransition from "./StageTransition";
import ResultsScreen from "./ResultsScreen";

import AssessmentRegistration from "./steps/AssessmentRegistration";
import Instructions from "./steps/Instructions";

import { questions } from "@/lib/questions";
import { calculateFreedomScore } from "@/lib/scoring";

import { Answer, FreedomResult } from "@/types/freedom";
import { PersonalInfo } from "@/types/assessment";

const stages = [
  "Health",
  "Wealth",
  "Growth & AI",
  "Leadership",
  "Purpose",
];

type Step =
  | "welcome"
  | "registration"
  | "instructions"
  | "questions"
  | "transition"
  | "results"
  | "premium";

export default function FreedomScore() {
  const [step, setStep] =
    useState<Step>("welcome");

  const [assessmentId, setAssessmentId] =
    useState("");

  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfo | null>(null);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] = useState<
    Answer[]
  >([]);

  const [result, setResult] =
    useState<FreedomResult | null>(null);

  function handleRegistration(
    id: string,
    info: PersonalInfo
  ) {
    setAssessmentId(id);
    setPersonalInfo(info);

    setStep("instructions");
  }

  function startQuestions() {
    setStep("questions");
  }

  function handleAnswer(value: number) {
    const current = questions[currentQuestion];

    const updatedAnswers: Answer[] = [
      ...answers,
      {
        questionId: current.id,
        value,
      },
    ];

    setAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;

    // Assessment Finished

    if (nextQuestion >= questions.length) {
      const finalResult =
        calculateFreedomScore(updatedAnswers);

      setResult(finalResult);

      setStep("results");

      return;
    }

    // Stage Transition

    if (nextQuestion % 5 === 0) {
      setCurrentQuestion(nextQuestion);

      setStep("transition");

      return;
    }

    setCurrentQuestion(nextQuestion);
  }

  function continueAfterTransition() {
    setStep("questions");
  }
    // ----------------------------
  // RENDER
  // ----------------------------

  switch (step) {
    case "welcome":
      return (
        <WelcomeScreen
          onStart={() => setStep("registration")}
        />
      );

    case "registration":
      return (
        <AssessmentRegistration
          onContinue={handleRegistration}
        />
      );

    case "instructions":
      return (
        <Instructions
          onContinue={startQuestions}
        />
      );

    case "transition": {
      const completedStage =
        stages[Math.floor((currentQuestion - 1) / 5)];

      const nextStage =
        stages[Math.floor(currentQuestion / 5)];

      return (
        <StageTransition
          completedStage={completedStage}
          nextStage={nextStage}
          onContinue={continueAfterTransition}
        />
      );
    }

    case "questions":
      return (
        <QuestionCard
          question={questions[currentQuestion]}
          current={currentQuestion + 1}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      );

    case "results":
      if (!result) return null;

      return (
        <ResultsScreen
          result={result}
        />
      );

    case "premium":
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-10">
          <div className="max-w-2xl rounded-3xl bg-white p-10 shadow-xl text-center">
            <h1 className="text-4xl font-black">
              Premium Report
            </h1>

            <p className="mt-5 text-slate-600 leading-8">
              This screen will allow users to unlock
              their personalized Freedom Report™ PDF,
              AI insights, and 90-day action plan.
            </p>

            <div className="mt-8 rounded-2xl bg-blue-50 p-6">
              <p className="font-semibold">
                Assessment ID
              </p>

              <p className="mt-2 text-xl font-bold text-blue-700">
                {assessmentId}
              </p>

              {personalInfo && (
                <>
                  <p className="mt-6 font-semibold">
                    Registered User
                  </p>

                  <p className="mt-2 text-lg">
                    {personalInfo.fullName}
                  </p>

                  <p className="text-slate-500">
                    {personalInfo.email}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}