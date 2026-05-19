import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Box, Truck, BarChart3, Shield, Sparkles, ArrowRight } from 'lucide-react'

const categories = [
  { label: 'Inventory Sync', icon: Box, subtitle: 'Auto-update stock across channels.' },
  { label: 'Order Fulfillment', icon: Truck, subtitle: 'Ship faster with smart routing.' },
  { label: 'Sales Insights', icon: BarChart3, subtitle: 'Monitor revenue growth instantly.' },
  { label: 'Secure Access', icon: Shield, subtitle: 'Role-based permissions for every team.' },
]

const featuredProducts = [
  { name: 'Bulk Paper Set', description: 'Premium grade stock supply for retail and shipment.', price: '$1,620' },
  { name: 'Shipping Bundle', description: 'Complete box, label, and pallet kit for fast dispatch.', price: '$2,080' },
  { name: 'Label Starter Pack', description: 'High-visibility labels built for heavy volume workflows.', price: '$780' },
]

const heroStats = [
  { value: '18K+', label: 'Daily orders processed' },
  { value: '99.8%', label: 'On-time delivery rate' },
  { value: '4.9/5', label: 'Customer satisfaction score' },
]

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.45, ease: 'easeOut' },
  }),
}

const HomePage = () => (
  <div className="relative overflow-hidden bg-slate-950 text-slate-100">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_24rem)]" />
    <div className="absolute right-0 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-3xl sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center"
        >
          <div className="space-y-8">
            <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 ring-1 ring-cyan-400/20">
              Wholesale portal
            </span>
            <div className="space-y-5">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                A premium portal for wholesale teams to own every order, stock level, and customer relationship.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Build stronger supplier partnerships, move inventory smarter, and create rapid order flow with glassmorphism UI and real-time insights.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/auth/register"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Start free trial
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:bg-white/10"
              >
                Explore dashboard
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-center">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-slate-950/20 ring-1 ring-white/10"
          >
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-slate-200/30" />
            <div className="space-y-6">
              <div className="rounded-[1.75rem] bg-slate-950/30 p-5 ring-1 ring-white/10 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Live dashboard</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Revenue pulse</h2>
                <p className="mt-4 text-slate-400">
                  Visualize every sale and stock movement from a single command center built for wholesale volume.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-slate-950/30 p-5 ring-1 ring-white/10 backdrop-blur-xl">
                  <p className="text-sm font-semibold text-slate-300">Order velocity</p>
                  <p className="mt-3 text-3xl font-semibold text-white">+27%</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-950/30 p-5 ring-1 ring-white/10 backdrop-blur-xl">
                  <p className="text-sm font-semibold text-slate-300">Inventory health</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Stable</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mb-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Built for wholesale</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Core capabilities crafted for B2B teams</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            From order orchestration to inventory analytics, scale your operation with polished components and a high-performance portal experience.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map(({ label, icon: Icon, subtitle }, index) => (
            <motion.div
              key={label}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className="group rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 group-hover:bg-cyan-400/15">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Featured products</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Top wholesale bundles to accelerate operations</h2>
          </div>
          <Link
            to="/dashboard/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:bg-white/10"
          >
            View full catalog
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariant}
              className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-7 shadow-2xl shadow-slate-950/30"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-3xl bg-gradient-to-br from-cyan-500/15 to-sky-400/10 p-4 text-cyan-300">
                  <Sparkles size={24} />
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Wholesale
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{product.name}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">{product.description}</p>
              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="text-2xl font-semibold text-white">{product.price}</p>
                <Link
                  to="/dashboard/orders"
                  className="rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/25"
                >
                  Order now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20"
        >
          <h3 className="text-xl font-semibold text-white">Scale with confidence</h3>
          <p className="mt-4 text-slate-400">Manage high-volume purchasing and fulfillment from an elegant, high-performance portal built for wholesale teams.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20"
        >
          <h3 className="text-xl font-semibold text-white">Glassmorphism interactions</h3>
          <p className="mt-4 text-slate-400">Transparent panels, blurred overlays, and silky motion create a premium dashboard experience your team will enjoy every day.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20"
        >
          <h3 className="text-xl font-semibold text-white">Built to convert</h3>
          <p className="mt-4 text-slate-400">Fast onboarding links, polished section hierarchy, and clear CTAs help capture wholesale leads and close accounts faster.</p>
        </motion.div>
      </section>

      <footer className="mt-20 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-slate-950/20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Wholesale Portal</p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">A premium commerce operations portal for wholesale brands that need speed, precision, and polished design.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <Link to="/dashboard" className="transition hover:text-white">Dashboard</Link>
            <Link to="/auth/login" className="transition hover:text-white">Sign in</Link>
            <Link to="/auth/register" className="transition hover:text-white">Sign up</Link>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © 2026 Wholesale Portal. Designed for modern B2B teams.
        </div>
      </footer>
    </div>
  </div>
)

export default HomePage
