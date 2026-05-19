import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { login as loginRequest } from '../../services/authService.js'
import useAuthStore from '../../store/authStore.js'

const roleOptions = [
  { value: 'buyer', label: 'Buyer' },
  { value: 'admin', label: 'Admin' },
]

const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.state?.from?.pathname || '/dashboard'
  const login = useAuthStore((state) => state.login)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      role: 'buyer',
    },
  })

  const selectedRole = watch('role')

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const onSubmit = async (data) => {
    try {
      const response = await loginRequest(data)
      login(response.user, response.token, response.role)
      toast.success('Logged in successfully')
      navigate(redirectTo, { replace: true })
    } catch (error) {
      const message = error?.data?.error || error?.error || error?.message || 'Login failed'
      toast.error(message)
    }
  }

  return (
    <div className="space-y-8 rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">Sign in</p>
        <h1 className="text-3xl font-semibold text-slate-950">Welcome back to your wholesale portal</h1>
        <p className="text-sm text-slate-500">Use your account to access orders, inventory, and team tools.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-2 sm:grid-cols-2">
          {roleOptions.map((role) => (
            <button
              key={role.value}
              type="button"
              onClick={() => setValue('role', role.value)}
              className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                selectedRole === role.value
                  ? 'border-cyan-500 bg-cyan-500/10 text-slate-900'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              {role.label}
            </button>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Email address</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              },
            })}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
          />
          {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 8, message: 'Password must be at least 8 characters' },
            })}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500"
          />
          {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Signing in…' : 'Sign in'}
        </button>
      </form>

      <p className="text-sm text-slate-500">
        New to the portal?{' '}
        <Link to="/auth/register" className="font-semibold text-slate-900 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
