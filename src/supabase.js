import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nqhpscjkmvgugmekruij.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xaHBzY2prbXZndWdtZWtydWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEwNzYxNDUsImV4cCI6MTk4NjY1MjE0NX0.36dP7ged1OoE-CBiUOnZZlANWDaeQkHnJY4naGnttgU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
