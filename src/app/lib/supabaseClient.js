import { createClient } from '@supabase/supabase-js'

export const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase env variables are missing. Check your Vercel project settings.'
    )
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}
