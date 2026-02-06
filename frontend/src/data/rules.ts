export type Rule = {
  id: string
  title: string
  description: string
  status: 'active' | 'draft'
  lastUpdated: string
}

export const rules: Rule[] = [
  {
    id: 'RL-3021',
    title: 'High-value routing',
    description: 'Route transactions over $500 to Processor A for better approval rates.',
    status: 'active',
    lastUpdated: '2026-02-05'
  },
  {
    id: 'RL-3022',
    title: 'Visa failover',
    description: 'Fail over Visa transactions to Processor B if latency exceeds 300ms.',
    status: 'active',
    lastUpdated: '2026-02-04'
  },
  {
    id: 'RL-3023',
    title: 'Retry policy',
    description: 'Retry failed transactions on Processor C with exponential backoff.',
    status: 'draft',
    lastUpdated: '2026-02-03'
  }
]
