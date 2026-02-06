export type Processor = {
  name: string
  status: 'connected' | 'degraded' | 'offline'
  successRate: number
  latencyMs: number
  volume: number
}

export const processors: Processor[] = [
  { name: 'Processor A', status: 'connected', successRate: 98.4, latencyMs: 165, volume: 23840 },
  { name: 'Processor B', status: 'degraded', successRate: 92.1, latencyMs: 241, volume: 17410 },
  { name: 'Processor C', status: 'connected', successRate: 96.7, latencyMs: 188, volume: 19220 },
  { name: 'Processor D', status: 'connected', successRate: 95.2, latencyMs: 214, volume: 15100 },
  { name: 'Processor E', status: 'offline', successRate: 0, latencyMs: 0, volume: 0 },
  { name: 'Processor F', status: 'connected', successRate: 97.5, latencyMs: 173, volume: 12750 }
]
