"use client";

import { useState } from "react";
import { quizQuestions } from "@/lib/quiz-data";
import { QuizAnswer, calculateLevel } from "@/lib/quiz-logic";
import QuestionCard from "@/components/quiz/QuestionCard";
import ProgressBar from "@/components/quiz/ProgressBar";
import ResultsCard from "@/components/quiz/ResultsCard";
import { ChevronLeft, ChevronRight, Sparkles, Home, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const currentAnswer = answers.find(
    (a) => a.questionId === currentQuestion?.id
  );

  const handleAnswer = (optionId: string, level: number) => {
    const newAnswers = answers.filter(
      (a) => a.questionId !== currentQuestion.id
    );
    newAnswers.push({
      questionId: currentQuestion.id,
      optionId,
      level,
    });
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
  };

  const handleJoinCommunity = () => {
    window.open("https://businesstechpoint.com", "_blank");
  };

  const canProceed = !!currentAnswer;

  if (!quizStarted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#BCE5EB] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0397B3] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
        </div>

        <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-6 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
              <Image
                src="/logo.png"
                alt="Business TechPoint"
                width={110}
                height={40}
                className="transition-transform group-hover:scale-105"
              />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-[#0397B3] font-semibold transition-all duration-300 px-4 py-2 rounded-lg hover:bg-[#0397B3]/5"
            >
              <Home size={20} />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </div>
        </nav>

        <div className="py-20 px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#0397B3]/10 border border-[#0397B3]/20 rounded-full px-5 py-2 text-sm font-medium text-[#0397B3] mb-8">
              <Sparkles size={16} />
              <span>Free Business Assessment</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover Your Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0397B3] to-teal-600 mt-2">
                Organization Level
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Take this quick 14-question assessment to find out where you stand and get a personalized roadmap for growth
            </p>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200 mb-12 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                What You&apos;ll Discover:
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0397B3] to-teal-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Your Level</h3>
                    <p className="text-gray-600 text-sm">Current organization level (1-4)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Challenges</h3>
                    <p className="text-gray-600 text-sm">Personalized insights & solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Free E-Book</h3>
                    <p className="text-gray-600 text-sm">Tailored guide for your level</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-gray-900 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Next Steps</h3>
                    <p className="text-gray-600 text-sm">Clear roadmap to level up</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setQuizStarted(true)}
              className="group bg-gradient-to-r from-[#0397B3] to-teal-600 text-white px-12 py-5 rounded-xl text-xl font-bold hover:shadow-xl hover:shadow-[#0397B3]/20 transition-all duration-300 inline-flex items-center gap-3"
            >
              Start Assessment
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-gray-500 mt-6 text-sm flex items-center justify-center gap-2">
              <Sparkles size={14} />
              Takes only 3-5 minutes
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (showResults) {
    const result = calculateLevel(answers);
    const answersWithText = answers.map((answer) => {
      const question = quizQuestions.find((q) => q.id === answer.questionId);
      const option = question?.options.find((o) => o.id === answer.optionId);
      return {
        questionId: answer.questionId,
        optionId: answer.optionId,
        optionText: option?.text || "",
      };
    });

    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-6 py-4 shadow-sm mb-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
              <Image
                src="/logo.png"
                alt="Business TechPoint"
                width={115}
                height={40}
                className="h-16 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-[#0397B3] font-semibold transition-all duration-300 px-4 py-2 rounded-lg hover:bg-[#0397B3]/5"
            >
              <Home size={20} />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </div>
        </nav>

        <div className="py-12 px-4">
          <ResultsCard
            result={result}
            answers={answersWithText}
            allAnswers={answers}
            onRestart={handleRestart}
            onJoinCommunity={handleJoinCommunity}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#BCE5EB] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0397B3] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 px-6 py-4 shadow-sm mb-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
            <Image
              src="/logo).png"
              alt="Business TechPoint"
              width={115}
              height={40}
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-700 hover:text-[#0397B3] font-semibold transition-all duration-300 px-4 py-2 rounded-lg hover:bg-[#0397B3]/5"
          >
            <Home size={20} />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </nav>

      <div className="py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              {currentQuestion?.isBasicInfo
                ? "Let's Start With The Basics"
                : `Question ${currentQuestionIndex - 1} of 12`}
            </h1>
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={quizQuestions.length}
            />
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-gray-200">
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              selectedOption={currentAnswer?.optionId}
            />
          </div>

          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                transition-all duration-300
                ${
                  currentQuestionIndex === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#0397B3] hover:bg-gray-50"
                }
              `}
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Back</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-xl font-semibold
                transition-all duration-300
                ${
                  canProceed
                    ? "bg-gradient-to-r from-[#0397B3] to-teal-600 text-white hover:shadow-xl hover:shadow-[#0397B3]/20"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              <span>{isLastQuestion ? "View Results" : "Next"}</span>
              {!isLastQuestion && <ChevronRight size={20} />}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
