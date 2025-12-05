"use client";

import { QuizQuestion } from "@/lib/quiz-data";
import { useState } from "react";

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (optionId: string, level: number) => void;
  selectedOption?: string;
}

export default function QuestionCard({
  question,
  onAnswer,
  selectedOption,
}: QuestionCardProps) {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-snug">
        {question.text}
      </h2>
      <div className="space-y-4">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id;
          const isHovered = hoveredOption === option.id;

          return (
            <button
              key={option.id}
              onClick={() => onAnswer(option.id, option.level)}
              onMouseEnter={() => setHoveredOption(option.id)}
              onMouseLeave={() => setHoveredOption(null)}
              className={`
                w-full p-6 rounded-2xl text-left transition-all duration-300
                border-2 transform
                ${
                  isSelected
                    ? "border-[#0397B3] bg-gradient-to-br from-[#0397B3]/10 to-teal-50 shadow-lg scale-[1.01]"
                    : isHovered
                    ? "border-[#0397B3]/40 bg-gray-50 shadow-md scale-[1.005]"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }
              `}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`
                  w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1
                  transition-all duration-300 flex items-center justify-center
                  ${
                    isSelected
                      ? "border-[#0397B3] bg-gradient-to-br from-[#0397B3] to-teal-600"
                      : "border-gray-300 bg-white"
                  }
                `}
                >
                  {isSelected && (
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  )}
                </div>
                <span className="text-base md:text-lg text-gray-800 leading-relaxed flex-1">
                  {option.text}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
