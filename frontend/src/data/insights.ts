export type Insight = {
  id: string
  title: string
  detail: string
  impact: string
  confidence: number
}

export const insights: Insight[] = [
  {
    id: 'IN-771',
    title: 'Switch debit traffic to Processor C',
    detail: 'Processor C shows 3.4% higher approval for Visa Debit in the last 48 hours.',
    impact: '+1.8% approvals',
    confidence: 86
  },
  {
    id: 'IN-772',
    title: 'Reduce latency on Processor B',
    detail: 'Latency spikes detected for EU traffic. Consider routing to Processor D after 250ms.',
    impact: '-120ms latency',
    confidence: 78
  },
  {
    id: 'IN-773',
    title: 'Optimize APAC routing window',
    detail: 'Processor A and F outperform during 02:00-06:00 UTC in APAC markets.',
    impact: '+2.1% approvals',
    confidence: 72
  }
]
