/*
  # Email Subscribers Table

  1. New Tables
    - `email_subscribers`
      - `id` (uuid, primary key) - Unique identifier for each subscriber
      - `email` (text, unique, not null) - Subscriber's email address
      - `subscribed_at` (timestamptz) - Timestamp when user subscribed
      - `source` (text) - Where the subscription came from (e.g., 'landing_page')
      
  2. Security
    - Enable RLS on `email_subscribers` table
    - Add policy for inserting new subscribers (public access for sign-ups)
    - No read access for public users (admin only)
    
  3. Notes
    - Email field is unique to prevent duplicate subscriptions
    - Default timestamp for tracking subscription time
    - Source field helps track marketing effectiveness
*/

CREATE TABLE IF NOT EXISTS email_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  source text DEFAULT 'landing_page'
);

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their email (for newsletter signup)
CREATE POLICY "Anyone can subscribe"
  ON email_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can read subscriber data
CREATE POLICY "Only authenticated users can view subscribers"
  ON email_subscribers
  FOR SELECT
  TO authenticated
  USING (true);