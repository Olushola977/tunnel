import SectionHeader from '../components/SectionHeader'
import { rules } from '../data/rules'

const Rules = () => {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Rules"
        subtitle="Control routing, failover, and retry behavior by payment method."
        action={
          <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            Create rule
          </button>
        }
      />

      <div className="grid gap-4">
        {rules.map((rule) => (
          <div key={rule.id} className="card-surface p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase text-slate-500">{rule.id}</p>
                <h3 className="text-lg font-semibold text-white">{rule.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{rule.description}</p>
              </div>
              <div className="flex flex-col items-end gap-2 text-xs text-slate-400">
                <span className={`badge ${rule.status === 'active' ? 'badge-success' : 'badge-warning'}`}>
                  {rule.status}
                </span>
                <span>Updated {rule.lastUpdated}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rules
