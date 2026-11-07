'use client'

import { useEffect } from 'react'

// Addresses are assembled in the browser so the server-rendered HTML never
// contains them in harvestable form.
export default function EmailLinks() {
  useEffect(() => {
    document
      .querySelectorAll<HTMLAnchorElement>('a[data-email-user]')
      .forEach((a) => {
        const address = `${a.dataset.emailUser}@${a.dataset.emailDomain}`
        a.href = `mailto:${address}`
        a.textContent = address
      })
  }, [])

  return null
}
