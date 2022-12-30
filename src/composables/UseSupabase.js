import { createClient } from "@supabase/supabase-js";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eWZ5Y2lham16dmNxeHVmeXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIzOTM5MTUsImV4cCI6MTk4Nzk2OTkxNX0.QQRQz1BenjvSvJFI65rqyB1wOWf_T472fhZe4WtItQk";
const supabaseUrl = "https://ivyfyciajmzvcqxufysf.supabase.co";

// setup client
const supabase = createClient(supabaseUrl, supabaseKey);

// expose supabase client
export default function useSupabase() {
  return { supabase };
}
