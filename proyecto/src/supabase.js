// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cikcadmhhahaevvlbdyb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpa2NhZG1oaGFoYWV2dmxiZHliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzc3NzksImV4cCI6MjA2MjkxMzc3OX0.ByE4l8Cysk2Rbm_U83ppiLjBrPccFTpmzBU6PicwX6w';
export const supabase = createClient(supabaseUrl, supabaseKey);