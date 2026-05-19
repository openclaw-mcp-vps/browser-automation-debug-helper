export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          QA Automation
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Stop Guessing Why Your<br />
          <span className="text-[#58a6ff]">Automation Tests Fail</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Capture DOM snapshots at the moment of failure, get AI-powered fix suggestions, and resolve Selenium &amp; Playwright issues in minutes — not hours.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Debugging for $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works with Selenium, Playwright, and Cypress.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          { title: 'DOM Snapshots', desc: 'Capture full DOM state at failure time via webhook.' },
          { title: 'AI Fix Suggestions', desc: 'Get actionable fixes for stale elements, timeouts, and selectors.' },
          { title: 'Failure History', desc: 'Browse past failures with diffs to spot regressions fast.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              'Unlimited failure captures',
              'AI-powered fix suggestions',
              'DOM snapshot storage (30 days)',
              'Webhook integration',
              'Selenium, Playwright & Cypress support',
              'Email alerts on new failures'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it integrate with my test suite?',
              a: 'Send a POST request to our webhook endpoint from your test teardown hook. We provide ready-made snippets for Selenium, Playwright, and Cypress.'
            },
            {
              q: 'What kind of fixes does the AI suggest?',
              a: 'Common issues like stale element references, dynamic selector changes, timing/wait problems, and missing elements are detected and explained with code examples.'
            },
            {
              q: 'Is my DOM data kept private?',
              a: 'Yes. Snapshots are stored encrypted, scoped to your account, and automatically deleted after 30 days. We never share your data.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Browser Automation Debug Helper. All rights reserved.
      </footer>
    </main>
  )
}
