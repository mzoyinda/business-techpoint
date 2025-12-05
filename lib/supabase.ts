import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface QuizResponseData {
  business_type: string;
  team_size: string;
  final_level: number;
  is_tie: boolean;
  level_counts: Record<number, number>;
  answers: Array<{
    questionId: string;
    optionId: string;
    level: number;
  }>;
}

export async function saveQuizResponse(data: QuizResponseData) {
  const { error } = await supabase.from("quiz_responses").insert([data]);

  if (error) {
    console.error("Error saving quiz response:", error);
    throw error;
  }
}
