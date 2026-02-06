import { Navigate, Route, Routes } from 'react-router-dom'
import Shell from './components/Shell'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Reports from './pages/Reports'
import Processors from './pages/Processors'
import Rules from './pages/Rules'
import Insights from './pages/Insights'
import Account from './pages/Account'

const App = () => {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/processors" element={<Processors />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  )
}

export default App
