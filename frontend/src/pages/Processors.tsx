import SectionHeader from '../components/SectionHeader'
import { processors } from '../data/processors'

const statusClass = (status: string) => {
  if (status === 'connected') return 'text-emerald-300'
  if (status === 'degraded') return 'text-amber-300'
  return 'text-rose-300'
}

const Processors = () => {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Processor Integrations"
        subtitle="Manage active processors and monitor live health checks."
        action={
          <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            Add processor
          </button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {processors.map((processor) => (
          <div key={processor.name} className="card-surface p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{processor.name}</h3>
              <span className={`text-xs font-semibold ${statusClass(processor.status)}`}>
                {processor.status}
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>Success Rate: <span className="text-white">{processor.successRate || '--'}%</span></p>
              <p>Latency: <span className="text-white">{processor.latencyMs || '--'}ms</span></p>
              <p>Weekly Volume: <span className="text-white">{processor.volume.toLocaleString()}</span></p>
            </div>
            <button className="mt-4 w-full rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-brand-500 hover:text-white">
              Configure routing
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Processors
