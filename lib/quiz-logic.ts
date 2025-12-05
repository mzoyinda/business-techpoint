export interface QuizAnswer {
  questionId: string;
  optionId: string;
  level: number;
}

export interface QuizResult {
  finalLevel: number;
  isTie: boolean;
  levelCounts: Record<number, number>;
  businessType: string;
  teamSize: string;
}

export function calculateLevel(answers: QuizAnswer[]): QuizResult {
  const scoredAnswers = answers.filter(a => a.level > 0);

  const levelCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };

  scoredAnswers.forEach(answer => {
    levelCounts[answer.level]++;
  });

  const maxCount = Math.max(...Object.values(levelCounts));
  const topLevels = Object.entries(levelCounts)
    .filter(([_, count]) => count === maxCount)
    .map(([level]) => parseInt(level));

  const isTie = topLevels.length > 1;
  const finalLevel = isTie ? Math.min(...topLevels) : topLevels[0];

  const businessTypeAnswer = answers.find(a => a.questionId === "business-type");
  const teamSizeAnswer = answers.find(a => a.questionId === "team-size");

  return {
    finalLevel,
    isTie,
    levelCounts,
    businessType: businessTypeAnswer?.optionId || "",
    teamSize: teamSizeAnswer?.optionId || "",
  };
}
