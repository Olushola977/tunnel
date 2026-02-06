import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import SectionHeader from '../components/SectionHeader'
import { approvalRates } from '../data/reports'

const Reports = () => {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Reports"
        subtitle="Compare processor performance, approval rates, and value distribution."
        action={
          <button className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-brand-500 hover:text-white">
            Export
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card-surface p-5">
          <p className="text-sm text-slate-400">Average Ticket</p>
          <p className="mt-2 text-2xl font-semibold text-white">$186.40</p>
          <p className="mt-2 text-xs text-emerald-300">+4.2% vs last week</p>
        </div>
        <div className="card-surface p-5">
          <p className="text-sm text-slate-400">Top Region</p>
          <p className="mt-2 text-2xl font-semibold text-white">North America</p>
          <p className="mt-2 text-xs text-slate-400">61% of total volume</p>
        </div>
        <div className="card-surface p-5">
          <p className="text-sm text-slate-400">Dispute Rate</p>
          <p className="mt-2 text-2xl font-semibold text-white">0.42%</p>
          <p className="mt-2 text-xs text-emerald-300">Stable</p>
        </div>
      </div>

      <div className="card-surface p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white">Approval Rates by Processor</h3>
          <p className="text-sm text-slate-400">Live rates averaged over the last 7 days.</p>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={approvalRates}>
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
              <YAxis stroke="#64748b" fontSize={12} domain={[85, 100]} />
              <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1f2937' }} />
              <Bar dataKey="rate" fill="#38bdf8" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Reports
