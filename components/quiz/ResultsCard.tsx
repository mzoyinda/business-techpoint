"use client";

import { QuizResult } from "@/lib/quiz-logic";
import { QuizAnswer } from "@/lib/quiz-logic";
import { levelDescriptions } from "@/lib/quiz-data";
import { Download, RefreshCw, CheckCircle2, AlertCircle, TrendingUp, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { saveQuizResponse } from "@/lib/supabase";

interface ResultsCardProps {
  result: QuizResult;
  answers: Array<{ questionId: string; optionId: string; optionText: string }>;
  allAnswers: QuizAnswer[];
  onRestart?: () => void;
  onJoinCommunity?: () => void;
}

export default function ResultsCard({ result, answers, allAnswers, onRestart, onJoinCommunity }: ResultsCardProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [saved, setSaved] = useState(false);
  const levelInfo = levelDescriptions[result.finalLevel as keyof typeof levelDescriptions];

  const businessTypeLabels: Record<string, string> = {
    product: "Product Business",
    service: "Service Business",
    both: "Product & Service Business",
    unsure: "Exploring Business Options",
  };

  const teamSizeLabels: Record<string, string> = {
    solo: "Just me",
    "2-5": "2–5 people",
    "6-10": "6–10 people",
    "11+": "11+ people",
  };

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!saved) {
      saveQuizResponse({
        business_type: result.businessType,
        team_size: result.teamSize,
        final_level: result.finalLevel,
        is_tie: result.isTie,
        level_counts: result.levelCounts,
        answers: allAnswers,
      }).then(() => {
        setSaved(true);
      }).catch((error) => {
        console.error("Failed to save quiz response:", error);
      });
    }
  }, [saved, result, allAnswers]);

  const handleDownloadEbook = () => {
    const ebookMessage = `Download your personalized e-book for ${businessTypeLabels[result.businessType]} at ${levelInfo.title}`;
    alert(ebookMessage);
    window.open("https://businesstechpoint.com", "_blank");
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10%",
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            >
              <div
                className="text-4xl"
                style={{
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                {["🎉", "🎊", "⭐", "✨", "🚀", "💪", "🌟"][Math.floor(Math.random() * 7)]}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-br from-[#0397B3] to-teal-700 p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-200 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="text-7xl md:text-8xl mb-6">{levelInfo.emoji}</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Congratulations!
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {levelInfo.title}
            </h2>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
              {businessTypeLabels[result.businessType]} • {teamSizeLabels[result.teamSize]}
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="bg-gradient-to-br from-[#0397B3]/10 to-teal-50 rounded-2xl p-6 md:p-8 mb-8 border border-[#0397B3]/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0397B3] to-teal-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Where You Are Right Now
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {levelInfo.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Common Challenges
                </h3>
              </div>
              <ul className="space-y-3">
                {levelInfo.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-gray-500 font-bold flex-shrink-0 mt-0.5">✗</span>
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0397B3]/10 to-teal-50 rounded-2xl p-6 border border-[#0397B3]/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0397B3] to-teal-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Your Next Steps
                </h3>
              </div>
              <ul className="space-y-3">
                {levelInfo.nextSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="text-[#0397B3] font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-10 mb-6 border border-blue-200 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-6">
              <Download className="text-white" size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get Your FREE Personalized E-Book!
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Download a comprehensive guide tailored specifically for <strong>{businessTypeLabels[result.businessType]}</strong> at <strong>{levelInfo.title}</strong>
            </p>
            <button
              onClick={handleDownloadEbook}
              className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 inline-flex items-center gap-3"
            >
              <Download size={24} />
              Download Your E-Book Now
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#0397B3] to-teal-700 rounded-3xl p-8 md:p-10 mb-6 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
                Join Business TechPoint and get access to tools, templates, live sessions, and a supportive community to help you level up!
              </p>
              <button
                onClick={onJoinCommunity || (() => window.open("https://businesstechpoint.com", "_blank"))}
                className="group bg-white text-[#0397B3] px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl inline-flex items-center gap-3"
              >
                Join the Community Today
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onRestart || (() => window.location.reload())}
              className="bg-white text-gray-700 border-2 border-gray-300 hover:border-[#0397B3] px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-3"
            >
              <RefreshCw size={20} />
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
