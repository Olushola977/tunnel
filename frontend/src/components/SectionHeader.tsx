import type { ReactNode } from 'react'

type SectionHeaderProps = {
  title: string
  subtitle?: string
  action?: ReactNode
}

const SectionHeader = ({ title, subtitle, action }: SectionHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-slate-400">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  )
}

export default SectionHeader
