import dotenv from 'dotenv'
dotenv.config()

import { WebSocket } from 'ws'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Supabase client configuration missing. Set SUPABASE_URL and SUPABASE_ANON_KEY in your .env file.',
  )
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: {
    transport: WebSocket,
  },
})

export default supabase