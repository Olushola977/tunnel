export type TransactionStatus = 'completed' | 'pending' | 'failed'

export type Transaction = {
  id: string
  amount: number
  method: string
  processor: string
  status: TransactionStatus
  date: string
  merchant: string
  country: string
  latencyMs: number
}

export const transactions: Transaction[] = [
  {
    id: 'TX-20498',
    amount: 242.15,
    method: 'Visa Credit',
    processor: 'Processor A',
    status: 'completed',
    date: '2026-02-05T18:24:00Z',
    merchant: 'Northline Supply',
    country: 'US',
    latencyMs: 182,
  },
  {
    id: 'TX-20499',
    amount: 118.42,
    method: 'Mastercard',
    processor: 'Processor B',
    status: 'failed',
    date: '2026-02-05T18:21:00Z',
    merchant: 'Kite & Pine',
    country: 'US',
    latencyMs: 240,
  },
  {
    id: 'TX-20500',
    amount: 78.9,
    method: 'Amex',
    processor: 'Processor C',
    status: 'completed',
    date: '2026-02-05T18:16:00Z',
    merchant: 'Sunrise Market',
    country: 'CA',
    latencyMs: 164,
  },
  {
    id: 'TX-20501',
    amount: 612.3,
    method: 'Visa Debit',
    processor: 'Processor D',
    status: 'pending',
    date: '2026-02-05T18:09:00Z',
    merchant: 'Elevate Health',
    country: 'US',
    latencyMs: 312,
  },
  {
    id: 'TX-20502',
    amount: 42.0,
    method: 'Discover',
    processor: 'Processor A',
    status: 'completed',
    date: '2026-02-05T18:02:00Z',
    merchant: 'Harbor Roasters',
    country: 'GB',
    latencyMs: 176,
  },
  {
    id: 'TX-20503',
    amount: 324.75,
    method: 'Visa Credit',
    processor: 'Processor E',
    status: 'completed',
    date: '2026-02-05T17:58:00Z',
    merchant: 'Ashbury Co',
    country: 'US',
    latencyMs: 154,
  },
  {
    id: 'TX-20504',
    amount: 92.6,
    method: 'Mastercard',
    processor: 'Processor B',
    status: 'failed',
    date: '2026-02-05T17:52:00Z',
    merchant: 'Latitude Labs',
    country: 'AU',
    latencyMs: 298,
  },
  {
    id: 'TX-20505',
    amount: 512.0,
    method: 'Amex',
    processor: 'Processor C',
    status: 'completed',
    date: '2026-02-05T17:45:00Z',
    merchant: 'Meridian Ventures',
    country: 'US',
    latencyMs: 171,
  }
]
