import type { ReactNode } from 'react'

type StatCardProps = {
  label: string
  value: string
  change?: string
  icon?: ReactNode
}

const StatCard = ({ label, value, change, icon }: StatCardProps) => {
  return (
    <div className="card-surface flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>{label}</span>
        {icon ? <span className="text-brand-300">{icon}</span> : null}
      </div>
      <div>
        <p className="text-3xl font-semibold text-white">{value}</p>
        {change ? <p className="mt-2 text-xs text-emerald-300">{change}</p> : null}
      </div>
    </div>
  )
}

export default StatCard
