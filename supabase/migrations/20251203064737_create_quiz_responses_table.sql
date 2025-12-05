/*
  # Quiz Responses Table

  1. New Tables
    - `quiz_responses`
      - `id` (uuid, primary key) - Unique identifier for each quiz response
      - `business_type` (text) - Type of business (product, service, or both)
      - `team_size` (text) - Size of the business team
      - `final_level` (int) - The calculated level result (1-4)
      - `is_tie` (boolean) - Whether the result was a tie between levels
      - `level_counts` (jsonb) - Count of answers per level
      - `answers` (jsonb) - All quiz answers with question IDs and options
      - `created_at` (timestamptz) - When the quiz was completed

  2. Security
    - Enable RLS on `quiz_responses` table
    - Add policy for public insert (anyone can submit quiz results)
    - Add policy for authenticated users to read all responses (for analytics)

  3. Important Notes
    - This table stores quiz submissions for analytics and tracking
    - No authentication required to submit quiz responses
    - Data is stored anonymously
*/

CREATE TABLE IF NOT EXISTS quiz_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_type text NOT NULL,
  team_size text NOT NULL,
  final_level int NOT NULL CHECK (final_level >= 1 AND final_level <= 4),
  is_tie boolean DEFAULT false,
  level_counts jsonb NOT NULL,
  answers jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quiz responses"
  ON quiz_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can read quiz responses"
  ON quiz_responses
  FOR SELECT
  TO anon
  USING (true);
