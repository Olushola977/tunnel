import SectionHeader from '../components/SectionHeader'

const Account = () => {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Account"
        subtitle="Team settings, API keys, and routing permissions."
        action={
          <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            Invite user
          </button>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card-surface p-5">
          <h3 className="text-lg font-semibold text-white">Workspace</h3>
          <p className="mt-2 text-sm text-slate-400">Tunnel Core · Network Operations</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>Primary region: North America</p>
            <p>Default currency: USD</p>
            <p>Compliance tier: Level 2</p>
          </div>
        </div>

        <div className="card-surface p-5">
          <h3 className="text-lg font-semibold text-white">API Keys</h3>
          <p className="mt-2 text-sm text-slate-400">Rotate keys every 90 days.</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>Live key: pw_live_****_4821</p>
            <p>Test key: pw_test_****_1024</p>
            <button className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-brand-500 hover:text-white">
              Rotate keys
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
