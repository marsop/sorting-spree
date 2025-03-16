import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ddbrmfkeieuxpkjbhvyc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkYnJtZmtlaWV1eHBramJodnljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5NzYzMDQsImV4cCI6MjA1NzU1MjMwNH0.DeXoKZHjFRj-ySKfBbzBIFNVJNUwsshHrRlpbMo84Iw';
export const supabase = createClient(supabaseUrl, supabaseKey);