import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Browser Automation Debug Helper',
  description: 'Debug browser automation script failures with DOM snapshots and AI-powered fix suggestions for Selenium and Playwright.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="391d7617-b98e-467d-9106-1443f342b29f"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
