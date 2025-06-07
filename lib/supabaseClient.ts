import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://repipmtmqdkkfssclycg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlcGlwbXRtcWRra2Zzc2NseWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMTUxNjQsImV4cCI6MjA2NDg5MTE2NH0.s58AMqwbrJiJlcYJCReHWGXsBb-kEIDDZjQJulIqdzw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);