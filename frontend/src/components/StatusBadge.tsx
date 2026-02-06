import type { TransactionStatus } from '../data/transactions'

const statusClasses: Record<TransactionStatus, string> = {
  completed: 'badge badge-success',
  pending: 'badge badge-warning',
  failed: 'badge badge-danger',
}

const StatusBadge = ({ status }: { status: TransactionStatus }) => {
  return <span className={statusClasses[status]}>{status}</span>
}

export default StatusBadge

