import SectionHeader from '../components/SectionHeader'
import StatusBadge from '../components/StatusBadge'
import { transactions } from '../data/transactions'

const Transactions = () => {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Transaction Log"
        subtitle="Review approvals, failures, and routing decisions in near real-time."
        action={
          <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            New transaction
          </button>
        }
      />

      <div className="card-surface p-4">
        <div className="flex flex-wrap items-center gap-3">
          <input
            className="w-full flex-1 rounded-xl border border-slate-800/70 bg-slate-900/70 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 md:max-w-sm"
            placeholder="Search by ID, amount, method, processor..."
          />
          <select className="rounded-xl border border-slate-800/70 bg-slate-900/70 px-4 py-2 text-sm text-white">
            <option>All methods</option>
            <option>Visa</option>
            <option>Mastercard</option>
            <option>Amex</option>
          </select>
          <select className="rounded-xl border border-slate-800/70 bg-slate-900/70 px-4 py-2 text-sm text-white">
            <option>All processors</option>
            <option>Processor A</option>
            <option>Processor B</option>
            <option>Processor C</option>
          </select>
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900/80 text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">Transaction ID</th>
              <th className="px-4 py-3">Merchant</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Processor</th>
              <th className="px-4 py-3">Latency</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="table-row">
                <td className="px-4 py-3 font-medium text-white">{tx.id}</td>
                <td className="px-4 py-3 text-slate-300">{tx.merchant}</td>
                <td className="px-4 py-3 text-slate-300">${tx.amount.toFixed(2)}</td>
                <td className="px-4 py-3 text-slate-300">{tx.method}</td>
                <td className="px-4 py-3 text-slate-300">{tx.processor}</td>
                <td className="px-4 py-3 text-slate-300">{tx.latencyMs}ms</td>
                <td className="px-4 py-3">
                  <StatusBadge status={tx.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transactions
