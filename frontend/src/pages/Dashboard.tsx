import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Activity, ArrowUpRight, CheckCircle2, Clock3 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import StatCard from '../components/StatCard'
import { dailyVolume, volumeByProcessor } from '../data/reports'

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        title="Dashboard"
        subtitle="Monitor approval rates, latency, and routing health across processors."
        action={
          <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            New report
          </button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Transactions" value="82.4k" change="+6.3% vs last week" icon={<Activity size={18} />} />
        <StatCard label="Success Rate" value="96.8%" change="+1.2% approvals" icon={<CheckCircle2 size={18} />} />
        <StatCard label="Avg. Latency" value="187ms" change="-14ms improvement" icon={<Clock3 size={18} />} />
        <StatCard label="Routing Health" value="A-" change="Stable across regions" icon={<ArrowUpRight size={18} />} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">Daily Volume</h3>
            <p className="text-sm text-slate-400">Last 7 days across all processors.</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyVolume}>
                <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1f2937' }} />
                <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-surface p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">Volume by Processor</h3>
            <p className="text-sm text-slate-400">Live distribution by primary routing rules.</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeByProcessor}>
                <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #1f2937' }} />
                <Bar dataKey="volume" fill="#60a5fa" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card-surface p-6">
        <h3 className="text-lg font-semibold text-white">Routing Notes</h3>
        <p className="mt-2 text-sm text-slate-400">
          Processor B is trending above the latency threshold for EU traffic. Consider updating the fallback rule
          or rebalancing traffic for the next 6 hours.
        </p>
      </div>
    </div>
  )
}

export default Dashboard
