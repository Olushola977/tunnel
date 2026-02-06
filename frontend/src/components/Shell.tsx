import { NavLink, Outlet } from 'react-router-dom'
import { Brain, ChartBar, FileText, LayoutDashboard, Settings, ShieldCheck, UserCircle, Workflow } from 'lucide-react'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-amber-500/12 text-amber-100 ring-1 ring-amber-400/20 shadow-[0_0_24px_rgba(251,191,36,0.16)]'
      : 'text-stone-300 hover:bg-amber-500/10 hover:text-amber-50'
  }`

const Shell = () => {
  return (
    <div className="app-shell tunnel-shell flex min-h-screen">
      <aside className="tunnel-panel hidden w-64 flex-col gap-6 border-r border-stone-800/80 px-5 py-6 lg:flex">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
            <Workflow size={22} />
          </div>
          <div>
            <p className="text-lg font-semibold">Tunnel</p>
            <p className="text-xs text-stone-400">Operations Tunnel</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          <NavLink to="/dashboard" className={navLinkClass}>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>
          <NavLink to="/transactions" className={navLinkClass}>
            <FileText size={18} />
            Transactions
          </NavLink>
          <NavLink to="/reports" className={navLinkClass}>
            <ChartBar size={18} />
            Reports
          </NavLink>
          <NavLink to="/processors" className={navLinkClass}>
            <ShieldCheck size={18} />
            Processors
          </NavLink>
          <NavLink to="/rules" className={navLinkClass}>
            <Settings size={18} />
            Rules
          </NavLink>
          <NavLink to="/insights" className={navLinkClass}>
            <Brain size={18} />
            AI Insights
          </NavLink>
          <NavLink to="/account" className={navLinkClass}>
            <UserCircle size={18} />
            Account
          </NavLink>
        </nav>
        <div className="mt-auto rounded-2xl border border-stone-800/60 bg-stone-900/60 p-4">
          <p className="text-xs uppercase text-stone-500">Active workspace</p>
          <p className="mt-2 text-sm font-semibold">Tunnel Core</p>
          <p className="text-xs text-stone-400">Transit Control v1.2</p>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="tunnel-panel flex items-center justify-between border-b border-stone-800/80 px-6 py-4 backdrop-blur">
          <div>
            <p className="text-xs uppercase text-stone-500">Tunnel Operations</p>
            <h1 className="text-xl font-semibold text-white">Tunnel Command</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 rounded-full border border-stone-800/70 bg-stone-900/60 px-4 py-2 text-sm text-stone-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Live flow
            </div>
            <div className="flex items-center gap-3 rounded-full border border-stone-800/70 bg-stone-900/60 px-3 py-2 text-sm text-stone-200">
              <span className="h-8 w-8 rounded-full bg-stone-800"></span>
              Taylor Jordan
            </div>
          </div>
        </header>

        <main className="flex-1 px-6 py-8 lg:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Shell
