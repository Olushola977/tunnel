import SectionHeader from '../components/SectionHeader'
import { insights } from '../data/insights'

const Insights = () => {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="AI Insights"
        subtitle="Routing recommendations based on recent approval and latency trends."
        action={
          <button className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-brand-500 hover:text-white">
            Run analysis
          </button>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {insights.map((insight) => (
          <div key={insight.id} className="card-surface p-5">
            <p className="text-xs uppercase text-slate-500">{insight.id}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{insight.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{insight.detail}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span className="rounded-full bg-brand-500/10 px-2 py-1 text-brand-200">{insight.impact}</span>
              <span>{insight.confidence}% confidence</span>
            </div>
            <button className="mt-4 w-full rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
              Apply suggestion
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Insights
