import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://vyremsufuyapgntqfebf.supabase.co" ;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5cmVtc3VmdXlhcGdudHFmZWJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNDM2NTgsImV4cCI6MjA5MDYxOTY1OH0.dVEm4eZQE_fIdipaLjei7QjFBWc-_KEFRzktiRQ4bEc" ;

const supabase = createClient(supabaseUrl , supabaseKey) ;

export default supabase ;