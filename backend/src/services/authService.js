import supabase from '../config/supabaseClient.js'

const normalizeEmail = (email) => String(email).trim().toLowerCase()

export const findUserByEmail = async (email) => {
  const normalizedEmail = normalizeEmail(email)
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', normalizedEmail)
    .maybeSingle()

  if (error) {
    throw error
  }

  return data
}

export const insertUser = async ({ email, passwordHash, companyName, role }) => {
  const normalizedEmail = normalizeEmail(email)
  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        email: normalizedEmail,
        password_hash: passwordHash,
        company_name: companyName,
        role,
      },
    ])
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}
